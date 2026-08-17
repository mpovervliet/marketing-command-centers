/* app.js: minimale hulplaag voor het prototype.
   Doel: het prototype gedraagt zich als een site zonder ooit iets te versturen,
   op te slaan of te meten. Voeg hier geen tags van de opdrachtgever aan toe. */

(function () {
  'use strict';

  // 1. Formulieren versturen niets (QA blok C3, AVG).
  //    Elke submit wordt onderschept en vervangen door een bevestiging in de pagina.
  document.addEventListener('submit', function (e) {
    var form = e.target.closest('form');
    if (!form) return;
    e.preventDefault();
    var note = document.createElement('p');
    note.className = 'form-note';
    note.setAttribute('role', 'status');
    note.textContent = 'Bevestiging in het prototype. Er is niets verzonden en niets opgeslagen.';
    form.replaceChildren(note);
    note.focus && note.focus();
  }, true);

  // 2. Beperkte beweging respecteren, ook voor JS-animaties die je later toevoegt.
  window.PROTO_REDUCED_MOTION =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 3. Actief navigatie-item markeren op basis van de bestandsnaam.
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
  });

  // 4. Zichtbare console-melding met de herleidbaarheid van dit scherm.
  //    Handig tijdens QA blok A1: open de console en je ziet direct de DDR-koppeling.
  var b = document.body;
  if (b && b.dataset.prId) {
    console.info('[prototype]', b.dataset.prId, '->', b.dataset.ddr || 'GEEN DDR GEKOPPELD');
  }

  // 5. Zoekindex laden als die bestaat (gegenereerd door _gen_searchindex.py).
  //    Faalt stil: een prototype zonder zoekfunctie hoort geen console-error te geven.
  var box = document.querySelector('[data-proto-search]');
  if (!box) return;
  fetch('search-index.json')
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (index) {
      if (!index) return;
      box.addEventListener('input', function () {
        var q = box.value.trim().toLowerCase();
        var out = document.querySelector('[data-proto-results]');
        if (!out) return;
        if (q.length < 2) { out.replaceChildren(); return; }
        var hits = index.filter(function (item) {
          return (item.titel + ' ' + item.tekst).toLowerCase().indexOf(q) !== -1;
        }).slice(0, 20);
        out.replaceChildren();
        hits.forEach(function (h) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.href = h.url; a.textContent = h.titel;
          li.appendChild(a); out.appendChild(li);
        });
        if (!hits.length) {
          var li = document.createElement('li');
          li.textContent = 'Geen resultaten. Probeer een andere term.';
          out.appendChild(li);
        }
      });
    })
    .catch(function () { /* stil */ });
})();
