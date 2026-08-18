/* motion.js: de motion-runtime van het prototype. Nul externe libraries.
   Laadt na app.js. Hoort bij css/motion.css; het een werkt niet zonder het ander.

   Publieke API, alles onder één globale namespace (net als app.js):
     ProtoMotion.reveal(root?)             — [data-mo="rise"] / [data-mo="clip"] + stagger
     ProtoMotion.initChain(root, opts?)    — sticky sectie met stapgestuurde visual
     ProtoMotion.createLoop(el, tick, o?)  — rAF-lus met viewport-, tab- en idle-pauze
     ProtoMotion.bindPause(btn, loop, l?)  — pauzeknop (WCAG 2.2.2) aan een lus koppelen
     ProtoMotion.mediaLoop(root?)          — micro-video bij hover/focus
     ProtoMotion.budget()                  — laag-budgetmodus + DPR-cap voor canvas
     ProtoMotion.prefersReduced()          — boolean helper
     ProtoMotion.onReducedChange(fn)       — meeluisteren op live omschakelen

   Regels die dit bestand handhaaft:
   - Alleen composited properties (transform, opacity, clip-path, stroke-dashoffset).
   - prefers-reduced-motion is een EINDTOESTAND, geen versnelling, en wordt live
     gevolgd via een 'change'-listener.
   - Scroll-listeners staan op {passive:true}, zijn rAF-gethrottled en draaien
     alleen wanneer hun sectie in of vlak bij beeld is.
   - Elke rAF-lus pauzeert buiten de viewport en bij document.hidden, en stopt
     zichzelf zodra er niets meer beweegt. */

(function () {
  'use strict';

  /* --- 0. De html.js-guard: allereerste handeling van dit bestand -----------
     motion.css verbergt reveal-elementen UITSLUITEND onder html.js. Zolang deze
     regel niet is gedraaid, staat alle content op zijn eindtoestand en is de
     pagina volledig leesbaar. Faalt dit script (JS uit, netwerkfout, syntax-
     fout in een latere regel), dan verdwijnt er dus niets. Zet daarom nooit een
     verborgen begintoestand buiten .js, en verplaats deze regel nooit naar
     beneden: alles erboven is code die de guard kan tegenhouden. */
  document.documentElement.classList.add('js');

  /* --- 1. Reduced motion als runtime-toestand ------------------------------
     Niet één keer uitlezen: de gebruiker kan de systeeminstelling midden in de
     sessie omzetten. html.mo-reduced geeft CSS een haak op diezelfde toestand. */
  var RM = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var reduced = !!RM.matches;
  var subs = [];

  function prefersReduced() { return reduced; }
  function onReducedChange(fn) { subs.push(fn); }

  function applyReduced(next) {
    reduced = !!next;
    document.documentElement.classList.toggle('mo-reduced', reduced);
    window.PROTO_REDUCED_MOTION = reduced;   // vlag van app.js meeschrijven
    for (var i = 0; i < subs.length; i++) { try { subs[i](reduced); } catch (e) {} }
  }
  applyReduced(reduced);
  if (RM.addEventListener) RM.addEventListener('change', function (e) { applyReduced(e.matches); });
  else if (RM.addListener) RM.addListener(function (e) { applyReduced(e.matches); });

  /* --- 2. Kleine helpers ---------------------------------------------------- */
  function list(root, sel) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
  function vh() { return window.innerHeight || document.documentElement.clientHeight || 0; }

  /* Hooguit één uitvoering per frame. */
  function rafThrottle(fn) {
    var queued = false;
    return function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; fn(); });
    };
  }

  /* --- 3. reveal(): rise, clip en stagger ----------------------------------- */
  var revealIO = null, revealMap = null;   // geobserveerde node -> elementen

  function armAndShow(el) {
    el.classList.add('mo-arm', 'mo-in');
    // will-change weer loslaten zodra de transitie klaar is (of na een ruime timeout).
    var done = function () { el.classList.remove('mo-arm'); el.removeEventListener('transitionend', done); };
    el.addEventListener('transitionend', done); window.setTimeout(done, 1600);
  }

  /* Stagger-plafond 8: daarboven leest het laatste element als een bug. Tot en
     met 8 kinderen krijgt elk kind zijn eigen index; daarboven groeperen we per
     rij (gelijke offsetTop = één index) en toppen we af op 7. */
  function assignStagger(container) {
    var kids = Array.prototype.slice.call(container.children);
    if (!kids.length) return;
    if (kids.length <= 8) {
      kids.forEach(function (k, i) { k.style.setProperty('--mo-i', i); });
      return;
    }
    var rows = [];
    kids.forEach(function (k) {
      var top = Math.round(k.offsetTop / 8) * 8;      // afronden tegen sub-pixelruis
      var idx = rows.indexOf(top);
      if (idx === -1) { rows.push(top); idx = rows.length - 1; }
      k.style.setProperty('--mo-i', Math.min(idx, 7));   // plafond 7 (= 8 stappen)
    });
  }

  function reveal(root) {
    root = root || document;
    list(root, '[data-mo-stagger]').forEach(assignStagger);

    var items = list(root, '[data-mo="rise"], [data-mo="clip"]');
    if (!items.length) return;

    if (reduced || typeof IntersectionObserver === 'undefined') {   // direct eindtoestand
      items.forEach(function (el) { el.classList.add('mo-in'); }); return;
    }
    if (!revealIO) {
      revealMap = new WeakMap();
      revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          // Ook tonen als het element de viewport heeft overgeslagen: bij een
          // snelle flick vuurt de observer pas als het er al voorbij is, en dan
          // blijft het anders onzichtbaar hangen.
          var rootTop = en.rootBounds ? en.rootBounds.top : 0;
          var passed = !en.isIntersecting && en.boundingClientRect.bottom < rootTop;
          if (!en.isIntersecting && !passed) return;
          (revealMap.get(en.target) || []).forEach(armAndShow);
          revealMap['delete'](en.target);
          revealIO.unobserve(en.target);
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -5% 0px' });
    }
    items.forEach(function (el) {
      if (el.classList.contains('mo-in')) return;
      /* Een clip-reveal staat op clip-path:inset(0 0 100% 0) en heeft dus nul
         zichtbare oppervlakte. Chrome rekent zo'n element als NIET zichtbaar,
         waardoor de observer nooit vuurt en het beeld voorgoed dicht blijft.
         Daarom observeren we bij clip de ouder en zetten we .mo-in op het kind. */
      var node = (el.getAttribute('data-mo') === 'clip' && el.parentElement) ? el.parentElement : el;
      var arr = revealMap.get(node);
      if (arr) { if (arr.indexOf(el) < 0) arr.push(el); return; }
      revealMap.set(node, [el]);
      revealIO.observe(node);
    });
  }

  // Schakelt de gebruiker live om: alles direct naar de eindtoestand.
  onReducedChange(function (isReduced) {
    if (!isReduced) return;
    list(document, '[data-mo="rise"], [data-mo="clip"]').forEach(function (el) {
      el.classList.add('mo-in');
      el.classList.remove('mo-arm');
    });
    if (revealIO) { revealIO.disconnect(); revealMap = new WeakMap(); }
  });

  /* --- 4. createLoop(): de enige toegestane rAF-lus -------------------------
     Drie regels uit het performance-budget zitten hier ingebakken, zodat geen
     enkel component ze zelf hoeft te onthouden:
       1. pauzeert buiten de viewport (IntersectionObserver op el);
       2. pauzeert bij document.hidden (verborgen tab kost geen frame);
       3. beëindigt zichzelf zodra tick() false teruggeeft — "idle" betekent
          letterlijk nul frames, niet een lus die leeg rondjes draait.
     tick(ts) geeft false terug als er niets meer beweegt; alles anders (ook
     undefined) betekent doorgaan. Bij reduced motion draait de lus niet, tenzij
     opts.reduced === false (voor beweging die geen animatie is).
     Retourneert {start, stop, setPaused, isPaused, isRunning, destroy}. */
  function createLoop(el, tick, opts) {
    opts = opts || {};
    var honorReduced = opts.reduced !== false;
    var raf = 0, running = false, dead = false, paused = !!opts.paused;
    var inView = true, io = null;

    function canRun() { return !dead && !paused && inView && !document.hidden && !(honorReduced && reduced); }
    function frame(ts) {
      if (dead) { running = false; raf = 0; return; }
      var more = tick(ts) !== false;
      if (more && canRun()) { raf = requestAnimationFrame(frame); }
      else { running = false; raf = 0; }
    }
    function start() { if (running || !canRun()) return; running = true; raf = requestAnimationFrame(frame); }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; }

    if (el && typeof IntersectionObserver !== 'undefined') {
      inView = false;
      io = new IntersectionObserver(function (ens) {
        inView = ens[0].isIntersecting;
        if (inView) start(); else stop();
      }, { threshold: 0 });
      io.observe(el);
    }
    function onVis() { if (document.hidden) stop(); else start(); }
    document.addEventListener('visibilitychange', onVis);
    onReducedChange(function (isReduced) { if (isReduced && honorReduced) stop(); else start(); });

    return {
      start: start, stop: stop,
      setPaused: function (p) { paused = !!p; if (paused) stop(); else start(); },
      isPaused: function () { return paused; },
      isRunning: function () { return running; },
      destroy: function () {
        dead = true; stop(); if (io) io.disconnect();
        document.removeEventListener('visibilitychange', onVis);
      }
    };
  }

  /* --- 5. bindPause(): pauzeknop voor WCAG 2.2.2 ---------------------------
     Elke beweging die langer dan 5 seconden automatisch doorloopt heeft dit
     nodig. Pauzeren stopt de lus echt; het is geen visuele truc. De labels
     komen van de bouwer, zodat dit bestand taalneutraal blijft.
     labels: {play:'Afspelen', pause:'Pauzeren'} */
  function bindPause(btn, loop, labels) {
    if (!btn || !loop) return null;
    labels = labels || {};
    var playL = labels.play || 'Play', pauseL = labels.pause || 'Pause';
    function sync() {
      var p = loop.isPaused();
      btn.setAttribute('aria-pressed', p ? 'true' : 'false');
      btn.setAttribute('aria-label', p ? playL : pauseL);
      var t = btn.querySelector('[data-mo-pause-label]');
      if (t) t.textContent = p ? playL : pauseL;
    }
    btn.addEventListener('click', function () { loop.setPaused(!loop.isPaused()); sync(); });
    sync();
    return { sync: sync };
  }

  /* --- 6. budget(): laag-budgetmodus voor canvas ----------------------------
     Onder 900px of bij een hoge devicePixelRatio is een canvas duurder dan op
     desktop: een 390px-canvas op DPR 3 heeft meer pixels dan een 1200px-canvas
     op DPR 1. Dus: minder elementen (count) en een lagere DPR-cap (dpr).
     Gebruik: var b = ProtoMotion.budget(); var n = b.count(1350); */
  function budget() {
    var w = window.innerWidth || document.documentElement.clientWidth || 0;
    var low = (w > 0 && w < 900) || (window.devicePixelRatio || 1) > 2;
    return {
      low: low,
      dpr: Math.min(window.devicePixelRatio || 1, low ? 1.5 : 2),
      count: function (full) { return low ? Math.round(full * 0.45) : full; }
    };
  }

  /* --- 7. initChain(): sticky sectie met stapgestuurde visual ---------------
     Scroll-VOLGEN, geen scroll-hijack: de gebruiker houdt volledige controle
     over de scrollsnelheid. Het aantal stappen ligt niet vast; wat in de HTML
     staat, telt. Markup: [data-chain-track] met [data-chain-step]-blokken,
     optioneel [data-chain-fig] (evenveel als stappen), [data-chain-dot] en een
     SVG-pad [data-chain-line] voor de voortgangslijn.
     opts: {onStep(index, el)} — één keer per stap, ook in de statische modus. */
  function initChain(root, opts) {
    if (!root) return null;
    opts = opts || {};
    var steps = list(root, '[data-chain-step]');
    if (!steps.length) return null;
    var figs = list(root, '[data-chain-fig]');
    var dots = list(root, '[data-chain-dot]');
    var line = root.querySelector('[data-chain-line]');
    var track = root.querySelector('[data-chain-track]') || root;

    var len = 0;
    if (line && line.getTotalLength) {
      len = line.getTotalLength();
      line.style.strokeDasharray = len; line.style.strokeDashoffset = len;
    }

    var narrow = window.matchMedia ? window.matchMedia('(max-width:900px)') : { matches: false };
    function isStatic() { return reduced || narrow.matches; }

    function showAll() {   // eindtoestand: alles actief, lijn volledig getekend
      steps.forEach(function (s) { s.classList.add('on'); });
      figs.forEach(function (f) { f.classList.add('on'); });
      dots.forEach(function (d) { d.classList.add('on'); });
      if (line) line.style.strokeDashoffset = 0;
    }

    /* Eerst álle metingen, dan één schrijfronde. Lezen en schrijven afwisselen
       forceert per stap een reflow en dat is precies wat een scroll-listener
       niet mag doen. */
    function update() {
      if (isStatic()) { showAll(); return; }
      var v = vh(), r = track.getBoundingClientRect(), mid = [], i;
      for (i = 0; i < steps.length; i++) {
        var sr = steps[i].getBoundingClientRect();
        mid.push(sr.top + sr.height / 2);
      }
      // Voortgang binnen deze sectie (niet binnen het document): 0 zodra de
      // kolom de leeslijn bereikt, 1 zodra hij er volledig voorbij is.
      var p = clamp((v * 0.55 - r.top) / Math.max(r.height, 1), 0, 1);
      var best = 0, bd = Infinity;
      for (i = 0; i < mid.length; i++) {
        var d = Math.abs(mid[i] - v * 0.45);
        if (d < bd) { bd = d; best = i; }
      }
      if (line) line.style.strokeDashoffset = len * (1 - p);
      steps.forEach(function (s, k) { s.classList.toggle('on', k === best); });
      figs.forEach(function (f, k) { f.classList.toggle('on', k === best); });
      dots.forEach(function (dt, k) { dt.classList.toggle('on', k <= best); });
    }

    // De listener draait alleen wanneer de sectie in of vlak bij beeld is.
    var active = true, secIO = null, stepIO = null;
    var onScroll = rafThrottle(function () { if (active) update(); });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    if (narrow.addEventListener) narrow.addEventListener('change', update);
    else if (narrow.addListener) narrow.addListener(update);
    onReducedChange(update);

    if (typeof IntersectionObserver !== 'undefined') {
      active = false;
      secIO = new IntersectionObserver(function (en) {
        active = en[0].isIntersecting;
        if (active) update();
      }, { rootMargin: '250px 0px 250px 0px' });
      secIO.observe(root);

      if (typeof opts.onStep === 'function') {
        // Los van de actieve-stap-logica, zodat het ook klopt in de statische modus.
        stepIO = new IntersectionObserver(function (ens) {
          ens.forEach(function (en) {
            if (!en.isIntersecting) return;
            var i = steps.indexOf(en.target);
            stepIO.unobserve(en.target);
            if (i >= 0) { try { opts.onStep(i + 1, en.target); } catch (e) {} }
          });
        }, { threshold: 0.4 });
        steps.forEach(function (s) { stepIO.observe(s); });
      }
    }
    update();

    return {
      update: update,
      destroy: function () {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        if (secIO) secIO.disconnect(); if (stepIO) stepIO.disconnect();
      }
    };
  }

  /* --- 8. mediaLoop(): micro-video bij hover of focus -----------------------
     Een element met een GEVULDE data-mo-loop laadt de video pas bij hover of
     focus (preload="none"): geen byte verkeer voor bezoekers die er nooit komen.
     Leeg attribuut of reduced motion: er gebeurt niets, het stilstaande beeld
     blijft staan. De video is muted en aria-hidden, dus puur decoratief. */
  function mediaLoop(root) {
    list(root || document, '[data-mo-loop]').forEach(function (host) {
      var src = (host.getAttribute('data-mo-loop') || '').trim();
      if (!src) return;
      var stage = host.querySelector('[data-mo-loop-stage]') || host;
      var vid = null;
      function play() {
        if (reduced) return;
        if (!vid) {
          vid = document.createElement('video');
          vid.className = 'mo-loop';
          vid.muted = true; vid.loop = true; vid.playsInline = true;
          ['muted', 'loop', 'playsinline'].forEach(function (a) { vid.setAttribute(a, ''); });
          vid.setAttribute('preload', 'none'); vid.setAttribute('aria-hidden', 'true');
          vid.src = src; stage.appendChild(vid);
        }
        var pr = vid.play();
        if (pr && pr.catch) pr.catch(function () {});
        vid.classList.add('on');
      }
      function halt() { if (vid) { vid.classList.remove('on'); try { vid.pause(); } catch (e) {} } }
      ['mouseenter', 'focusin'].forEach(function (ev) { host.addEventListener(ev, play); });
      ['mouseleave', 'focusout'].forEach(function (ev) { host.addEventListener(ev, halt); });
    });
  }

  /* --- 9. Export en auto-start ---------------------------------------------
     Eén globale namespace, zoals app.js dat ook doet. reveal() en mediaLoop()
     starten vanzelf; initChain() en createLoop() roept de pagina zelf aan,
     omdat die een root-element en opties nodig hebben. */
  window.ProtoMotion = {
    reveal: reveal, initChain: initChain, createLoop: createLoop,
    bindPause: bindPause, mediaLoop: mediaLoop, budget: budget,
    prefersReduced: prefersReduced, onReducedChange: onReducedChange
  };

  function boot() { reveal(document); mediaLoop(document); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
