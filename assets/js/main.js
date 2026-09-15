/* =========================================================
   Sandra Riveros — interacciones
   ========================================================= */
(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(hover:hover) and (min-width:861px)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- año ---------- */
  var year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- cortina de entrada ---------- */
  var curtain = $('#curtain');
  requestAnimationFrame(function () { curtain.classList.add('is-on'); });

  var lift = function () { curtain.classList.add('is-off'); };
  // levantamos en cuanto esté la foto del hero, no cuando cargue toda la página
  var heroImg = $('.slide.is-active img');
  if (!heroImg || heroImg.complete) {
    setTimeout(lift, reduce ? 0 : 620);
  } else {
    heroImg.addEventListener('load', function () { setTimeout(lift, reduce ? 0 : 420); });
    heroImg.addEventListener('error', lift);
  }
  setTimeout(lift, 2600);   // tope, pase lo que pase

  /* ---------- partir titulares en palabras ---------- */
  function splitWords(el) {
    var walk = function (node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.nodeValue.split(/(\s+)/).forEach(function (chunk) {
            if (!chunk) return;
            if (/^\s+$/.test(chunk)) { frag.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span');
            w.className = 'w';
            var inner = document.createElement('i');
            inner.textContent = chunk;
            w.appendChild(inner);
            frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
    $$('.w > i', el).forEach(function (i, n) {
      i.style.transitionDelay = (n * 0.045) + 's';
    });
  }
  if (!reduce) $$('.split').forEach(splitWords);

  // al cambiar de idioma el texto se reescribe: hay que volver a partirlo
  document.addEventListener('langchange', function () {
    if (reduce) return;
    $$('.split').forEach(function (el) {
      var visible = el.classList.contains('in');
      el.classList.remove('in');
      splitWords(el);
      if (visible) requestAnimationFrame(function () { el.classList.add('in'); });
    });
  });

  /* ---------- aparición al hacer scroll ---------- */
  var targets = $$('.reveal, .split');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.06 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- nav + barra de progreso ---------- */
  var nav = $('#nav');
  var progress = $('#progress');
  var lastY = 0;

  function onScroll() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';

    nav.classList.toggle('is-stuck', y > window.innerHeight * 0.7);
    // se esconde al bajar, vuelve al subir
    nav.classList.toggle('is-hidden', y > lastY && y > window.innerHeight * 1.2);
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- menú móvil ---------- */
  var burger = $('#burger');
  var menu = $('#menu');
  function setMenu(open) {
    menu.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', window.I18N.t(open ? 'nav.cerrar' : 'nav.abrir'));
    document.body.style.overflow = open ? 'hidden' : '';
    document.body.classList.toggle('menu-open', open);
  }
  burger.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.hidden) setMenu(false);
  });

  /* ---------- hero ---------- */
  var slides = $$('.slide');
  var dots = $$('#heroDots button');
  var slideAt = 0;
  var timer;

  function goSlide(n) {
    slides[slideAt].classList.remove('is-active');
    dots[slideAt].classList.remove('is-on');
    slideAt = (n + slides.length) % slides.length;
    slides[slideAt].classList.add('is-active');
    dots[slideAt].classList.add('is-on');
  }
  function autoplay() {
    clearInterval(timer);
    if (reduce) return;
    timer = setInterval(function () { goSlide(slideAt + 1); }, 6800);
  }
  dots.forEach(function (d, n) {
    d.addEventListener('click', function () { goSlide(n); autoplay(); });
  });
  autoplay();

  /* ---------- parallax ---------- */
  var layers = $$('[data-parallax]');
  if (layers.length && !reduce) {
    var ticking = false;
    var move = function () {
      var vh = window.innerHeight;
      layers.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        var mid = r.top + r.height / 2;
        var pct = (mid - vh / 2) / vh;              // -1 … 1
        var amt = parseFloat(el.dataset.parallax) || 20;
        el.style.transform = 'translate3d(0,' + (pct * amt).toFixed(2) + 'px,0)';
      });
      ticking = false;
    };
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(move);
    }, { passive: true });
    window.addEventListener('resize', move);
    move();
  }

  /* ---------- servicios: la foto sigue al cursor ---------- */
  var srv = $('#srv');
  if (srv && fine) {
    var thumbs = $$('.srv__thumb', srv);
    var tx = 0, ty = 0, cx = 0, cy = 0, raf = null, active = null;

    var loop = function () {
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      if (active) active.style.translate = cx + 'px ' + cy + 'px';
      raf = Math.abs(tx - cx) > 0.4 || Math.abs(ty - cy) > 0.4 ? requestAnimationFrame(loop) : null;
    };

    srv.addEventListener('pointermove', function (e) {
      tx = e.clientX; ty = e.clientY;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    srv.addEventListener('pointerenter', function (e) {
      cx = tx = e.clientX; cy = ty = e.clientY;
      srv.classList.add('is-hovering');
    });
    srv.addEventListener('pointerleave', function () {
      srv.classList.remove('is-hovering');
      active = null;
    });
    var rows = $$('.srv__row', srv);
    rows.forEach(function (row, n) {
      row.addEventListener('pointerenter', function () {
        rows.forEach(function (r) { r.classList.remove('is-on'); });
        row.classList.add('is-on');
        active = thumbs[n];
        active.style.translate = cx + 'px ' + cy + 'px';
      });
    });
    srv.addEventListener('pointerleave', function () {
      rows.forEach(function (r) { r.classList.remove('is-on'); });
    });
  }

  /* ---------- portafolio: cursor "Ver" + lightbox ---------- */
  var gallery = $('#gallery');
  var figures = $$('.g', gallery);
  var cursor = $('#cursor');

  if (fine && cursor) {
    gallery.addEventListener('pointermove', function (e) {
      cursor.style.translate = e.clientX + 'px ' + e.clientY + 'px';
    });
    gallery.addEventListener('pointerenter', function (e) {
      cursor.style.translate = e.clientX + 'px ' + e.clientY + 'px';
      cursor.classList.add('is-on');
    });
    gallery.addEventListener('pointerleave', function () { cursor.classList.remove('is-on'); });
  }

  var lb = $('#lb');
  var lbImg = $('#lbImg');
  var lbCap = $('#lbCap');
  var lbCount = $('#lbCount');
  var at = 0;
  var lastFocus = null;

  function show(n) {
    at = (n + figures.length) % figures.length;
    var img = $('img', figures[at]);
    var cap = $('figcaption', figures[at]);
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lbCap.textContent = cap ? cap.textContent : '';
    lbCount.textContent = (at + 1) + ' / ' + figures.length;
  }
  function openLb(n) {
    lastFocus = document.activeElement;
    show(n);
    lb.hidden = false;
    document.body.classList.add('lb-open');
    if (cursor) cursor.classList.remove('is-on');
    $('#lbClose').focus();
  }
  function closeLb() {
    lb.hidden = true;
    document.body.classList.remove('lb-open');
    if (lastFocus) lastFocus.focus();
  }

  figures.forEach(function (fig, n) {
    fig.setAttribute('tabindex', '0');
    fig.setAttribute('role', 'button');
    fig.setAttribute('aria-label', window.I18N.t('pf.ampliar') + ': ' + ($('img', fig).alt || ''));
    fig.addEventListener('click', function () { openLb(n); });
    fig.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLb(n); }
    });
  });

  $('#lbClose').addEventListener('click', closeLb);
  $('#lbPrev').addEventListener('click', function () { show(at - 1); });
  $('#lbNext').addEventListener('click', function () { show(at + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(at - 1);
    if (e.key === 'ArrowRight') show(at + 1);
  });

  /* ---------- testimonios ---------- */
  var quotes = $$('#slider blockquote');
  var qDots = $$('#sliderDots button');
  var qAt = 0, qTimer;

  function goQuote(n) {
    quotes[qAt].classList.remove('is-on');
    qDots[qAt].classList.remove('is-on');
    qAt = (n + quotes.length) % quotes.length;
    quotes[qAt].classList.add('is-on');
    qDots[qAt].classList.add('is-on');
  }
  function qPlay() {
    clearInterval(qTimer);
    if (reduce) return;
    qTimer = setInterval(function () { goQuote(qAt + 1); }, 7000);
  }
  qDots.forEach(function (d, n) {
    d.addEventListener('click', function () { goQuote(n); qPlay(); });
  });
  var slider = $('#slider');
  slider.addEventListener('pointerenter', function () { clearInterval(qTimer); });
  slider.addEventListener('pointerleave', qPlay);
  qPlay();

  /* ---------- formulario → WhatsApp ---------- */
  var WHATSAPP = '573102913750';
  var CORREO = 'sandrariveroseventos@gmail.com';

  $$('[data-ph]').forEach(function (el) {
    el.addEventListener('focus', function () { el.placeholder = el.dataset.ph || ' '; });
    el.addEventListener('blur', function () { el.placeholder = ' '; });
  });

  var form = $('#form');
  var err = $('#formErr');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    err.hidden = true;

    if (!form.checkValidity()) {
      err.textContent = window.I18N.t('for.error');
      err.hidden = false;
      form.reportValidity();
      return;
    }

    var d = new FormData(form);
    var T = window.I18N.t;
    var sin = T('wa.pordefinir');
    var lineas = [
      T('wa.saludo'),
      '',
      T('wa.pareja') + ': ' + (d.get('nombre') || '—'),
      T('wa.correo') + ': ' + (d.get('email') || '—'),
      T('wa.fecha') + ': ' + (d.get('fecha') || sin),
      T('wa.invitados') + ': ' + (d.get('invitados') || sin),
      T('wa.lugar') + ': ' + (d.get('lugar') || sin),
      T('wa.servicio') + ': ' + (d.get('servicio') || '—')
    ];
    if (d.get('mensaje')) lineas.push('', d.get('mensaje'));
    var texto = encodeURIComponent(lineas.join('\n'));

    if (WHATSAPP.indexOf('X') !== -1) {
      // Sin número configurado: abrimos el correo para no perder la consulta.
      window.location.href = 'mailto:' + CORREO +
        '?subject=' + encodeURIComponent(T('wa.asunto') + ' — ' + (d.get('nombre') || '')) +
        '&body=' + texto;
      return;
    }
    window.open('https://wa.me/' + WHATSAPP + '?text=' + texto, '_blank', 'noopener');
  });
})();
