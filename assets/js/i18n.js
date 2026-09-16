/* =========================================================
   Sandra Riveros · español / inglés
   Para cambiar un texto, edítalo aquí en los dos idiomas.
   ========================================================= */
(function () {
  'use strict';

  var DICT = {
    es: {
      'meta.title': 'Sandra Riveros · Wedding Planner',
      'meta.desc': 'Planeación y diseño de bodas. Dirección creativa, producción y coordinación para celebraciones en Colombia y destino.',

      'nav.filosofia': 'Filosofía',
      'nav.servicios': 'Servicios',
      'nav.portafolio': 'Portafolio',
      'nav.proceso': 'Proceso',
      'nav.sandra': 'Sandra',
      'nav.contacto': 'Contacto',
      'nav.cta': 'Hablemos',
      'nav.abrir': 'Abrir menú',
      'nav.cerrar': 'Cerrar menú',
      'menu.foot': 'Bogotá · Colombia y destino',

      'hero.kicker': 'Wedding planner · Colombia &amp; destino internacional',

      'loc.1': 'Bodas en Colombia y en el exterior',
      'loc.2': 'Atención en español e inglés',
      'loc.3': 'Advanced Member · Bodas ABC',

      'des.eyebrow': 'Destinos',
      'des.title': 'Donde ustedes quieran <em>casarse</em>',
      'des.lead': 'Casarse lejos de casa es hermoso y es complicado. Proveedores que no conocen el lugar, invitados que llegan de varios países, permisos, clima, transporte. De todo eso nos encargamos nosotros, dentro o fuera de Colombia, para que lo único que ustedes tengan en la cabeza sea verse.',
      'des.1h': 'En Colombia',
      'des.1p': 'Haciendas de la sabana, iglesias coloniales, fincas y hoteles. Sabemos cuáles funcionan de verdad y a quién llamar en cada uno.',
      'des.2h': 'Fuera del país',
      'des.2p': 'Viajamos con la producción completa y armamos el equipo local. Ustedes siguen hablando con la misma persona, esté donde esté la boda.',
      'des.3h': 'Invitados de varios países',
      'des.3p': 'Escribimos en español y en inglés, organizamos las llegadas y armamos un fin de semana que haga que valga la pena el viaje.',
      'des.img1': 'Capilla blanca de una hacienda colombiana',
      'des.img2': 'Recepción con follaje colgante sobre las mesas',
      'des.band': 'Ceremonia al aire libre entre árboles',

      'san.ficha1': 'Base',
      'san.ficha1v': 'Bogotá, Colombia',
      'san.ficha2': 'Alcance',
      'san.ficha2v': 'Colombia y destino internacional',
      'san.ficha3': 'Idiomas',
      'san.ficha3v': 'Español e inglés',

      'hero.title': 'Que el día más importante <em>se sienta</em> como ustedes',
      'hero.cta': 'Hablemos de su boda',
      'hero.link': 'Ver bodas',
      'hero.bajar': 'Bajar',
      'hero.img': 'Imagen',

      'fil.eyebrow': 'Filosofía',
      'fil.title': 'No hacemos bodas bonitas. Hacemos el día que ustedes van a <em>recordar completo</em>.',
      'fil.lead': 'Toda boda empieza igual: con la historia de ustedes y con la clase de fin de semana que quieren que su gente recuerde. De ahí sale lo demás: el lugar, la mesa, la hora a la que suena la primera canción. Nuestro trabajo es tomar esas cientos de decisiones pequeñas con ustedes, no por ustedes, y devolverles el día limpio.',
      'fil.img': 'Novios frente al lago después de la ceremonia',
      'fil.1h': 'Pocas bodas al año',
      'fil.1p': 'Sandra no toma más de las que puede acompañar en persona. Del primer café al último brindis, ustedes hablan siempre con ella. Nunca con un intermediario.',
      'fil.2h': 'La logística, primero',
      'fil.2p': 'Lo que más miedo da de una boda es que algo se caiga. Por eso resolvemos primero lo invisible: tiempos, proveedores, montaje. Cuando eso está firme, lo demás se disfruta.',
      'fil.3h': 'Criterio local, cabeza internacional',
      'fil.3p': 'Conocemos los lugares y a la gente que trabaja en ellos, aquí y afuera. Vengan de donde vengan sus invitados, nadie se siente perdido.',
      'fil.4h': 'El fin de semana completo',
      'fil.4p': 'No solo la ceremonia: la llegada de los que viajan, la cena de la víspera, el desayuno del domingo. Ahí es donde su gente se encuentra.',

      'mq.1': 'Planeación integral',
      'mq.2': 'Dirección de arte',
      'mq.3': 'Bodas destino',
      'mq.4': 'Coordinación del día',

      'srv.eyebrow': 'Servicios',
      'srv.title': 'Cuatro formas de acompañarlos',
      'srv.1h': 'Planeación integral',
      'srv.1p': 'Los acompañamos todo el camino: presupuesto, proveedores, cronograma y diseño. Ustedes deciden; nosotros cargamos con el resto.',
      'srv.1img': 'Montaje de mesa durante la producción de una boda',
      'srv.2h': 'Diseño y dirección de arte',
      'srv.2p': 'Concepto, paleta, flores y luz que salen de su historia, no de un catálogo. Si un detalle no dice algo de ustedes, no entra.',
      'srv.2img': 'Boceto a mano del diseño de una instalación floral',
      'srv.3h': 'Bodas destino',
      'srv.3p': 'Casarse lejos no debería ser planear a ciegas. Vamos, miramos, armamos el equipo local y les contamos todo como si estuvieran parados ahí.',
      'srv.3img': 'Carpa blanca montada en un jardín',
      'srv.4h': 'Coordinación del día',
      'srv.4p': 'Ustedes ya hicieron el trabajo. Ese día lo tomamos nosotros, para que puedan estar con su gente y no pendientes del reloj.',
      'srv.4img': 'Entrada a la carpa iluminada con faroles',

      'pf.eyebrow': 'Portafolio',
      'pf.title': 'Algunas celebraciones',
      'pf.note': 'Ceremonias, recepciones y los detalles que las sostienen.',
      'pf.ver': 'Ver',
      'pf.ampliar': 'Ampliar',
      'pf.1': 'Mesa en blanco',
      'pf.1a': 'Mesa larga vestida en blanco con flores de temporada',
      'pf.2': 'Recepción bajo carpa',
      'pf.2a': 'Recepción bajo carpa transparente con un árbol como centro',
      'pf.3': 'Después de la ceremonia',
      'pf.3a': 'Novios bailando sobre el prado al atardecer',
      'pf.4': 'Mesa principal',
      'pf.4a': 'Mesa principal con vajilla, flores y detalles en color',
      'pf.5': 'Antes de todo',
      'pf.5a': 'El vestido de la novia colgado antes de la ceremonia',
      'pf.6': 'Mesa de postres',
      'pf.6a': 'Mesa de postres con piezas artesanales y velas',
      'pf.7': 'Altar',
      'pf.7a': 'Altar al aire libre con madera y flores secas',
      'pf.8': 'Flores de la sabana',
      'pf.8a': 'Mesa vestida con bud vases y flores amarillas',
      'pf.9': 'Lounge',
      'pf.9a': 'Lounge con sofá capitoneado y fondo de follaje',
      'pf.10': 'Carpa de vela',
      'pf.10a': 'Carpa de vela blanca montada sobre el prado',
      'pf.11': 'Papelería',
      'pf.11a': 'Numeración de mesa en papel sobre cristalería',
      'pf.12': 'Señalética',
      'pf.12a': 'Aviso escrito a mano entre follaje y flores secas',

      'band.quote': 'El día de su boda no deberían estar resolviendo nada. Deberían estar ahí.',

      'pro.eyebrow': 'El proceso',
      'pro.title': 'Cómo trabajamos',
      'pro.1h': 'Conversamos',
      'pro.1p': 'Un café sin costo ni compromiso. Queremos saber cómo se conocieron, quiénes son los que no pueden faltar y hasta dónde llega el presupuesto. Sin eso no se diseña nada.',
      'pro.2h': 'Diseñamos',
      'pro.2p': 'Les mostramos el concepto, la paleta y los planos antes de que se mueva un peso. Si algo no les suena, se cambia. Es su boda.',
      'pro.3h': 'Producimos',
      'pro.3p': 'Contratos, cronogramas, pruebas y visitas técnicas. Desde aquí ustedes dejan de contestar correos: hablamos nosotros con todos.',
      'pro.4h': 'Celebramos',
      'pro.4p': 'Montaje, dirección del día y desmontaje. Ustedes llegan y ya está todo. Lo único que les queda por hacer es estar ahí.',

      'san.eyebrow': 'Sandra',
      'san.title': 'La persona detrás de cada decisión',
      'san.lead': 'Sandra Riveros dirige cada boda como si fuera la única del año. Está en la primera reunión, en la visita técnica, en la prueba de menú y a las seis de la mañana del día del montaje, revisando que cada mesa quede como se la imaginaron ustedes.',
      'san.p2': 'Su manera de trabajar es simple y poco común: pocas bodas al año, atención completa a cada una y una relación directa con ustedes. Con el tiempo termina conociendo a la familia, y eso se nota el día de la boda.',
      'san.rol': 'Wedding Planner',
      'san.img1': 'Sandra Riveros junto a una novia el día de su boda',
      'san.img2': 'Sandra Riveros terminando el montaje de una mesa',

      'mem.lead': 'Miembro de',
      'mem.1': 'Bodas ABC LATAM',
      'mem.1b': 'Worldwide Romance Society',
      'mem.1d': 'Advanced Member',

      'con.eyebrow': 'Contacto',
      'con.title': 'Cuéntennos de su boda',
      'con.lead': 'Escríbannos aunque todavía no tengan nada definido: ni fecha, ni lugar, ni idea clara. La primera conversación es para conocernos, sin costo y sin compromiso, y para decirles con honestidad si podemos acompañarlos.',
      'con.wa': 'WhatsApp',
      'con.mail': 'Correo',
      'con.ig': 'Instagram',
      'con.base': 'Base',
      'con.baseval': 'Bogotá · Colombia y destino',

      'for.nombre': 'Nombres de la pareja',
      'for.nombreph': 'Ana y Daniel',
      'for.email': 'Correo',
      'for.emailph': 'ana@correo.com',
      'for.fecha': 'Fecha estimada',
      'for.fechaph': 'Noviembre 2026',
      'for.invitados': 'Invitados',
      'for.invitadosph': '150',
      'for.lugar': 'Lugar o ciudad',
      'for.lugarph': 'Hacienda en la sabana',
      'for.servicio': '¿Qué necesitan?',
      'for.op1': 'Planeación integral',
      'for.op2': 'Diseño y dirección de arte',
      'for.op3': 'Boda destino',
      'for.op4': 'Coordinación del día',
      'for.op5': 'Todavía no lo tengo claro',
      'for.mensaje': 'Cuéntennos cómo se imaginan el día',
      'for.mensajeph': 'Cómo se imaginan el día…',
      'for.enviar': 'Enviar por WhatsApp',
      'for.alt': '¿Prefieren correo?',
      'for.error': 'Revisen los campos marcados: faltan los nombres o el correo.',

      'wa.saludo': 'Hola Sandra, nos gustaría hablar de nuestra boda.',
      'wa.pareja': 'Pareja',
      'wa.correo': 'Correo',
      'wa.fecha': 'Fecha estimada',
      'wa.invitados': 'Invitados',
      'wa.lugar': 'Lugar',
      'wa.servicio': 'Servicio',
      'wa.pordefinir': 'por definir',
      'wa.asunto': 'Boda',

      'foot.legal': '© {year} Sandra Riveros · Wedding Planner · Bogotá, Colombia',
      'lb.cerrar': 'Cerrar',
      'lb.anterior': 'Anterior',
      'lb.siguiente': 'Siguiente',
      'skip': 'Saltar al contenido'
    },

    en: {
      'meta.title': 'Sandra Riveros · Wedding Planner',
      'meta.desc': 'Wedding planning and design. Creative direction, production and coordination for celebrations in Colombia and abroad.',

      'nav.filosofia': 'Philosophy',
      'nav.servicios': 'Services',
      'nav.portafolio': 'Portfolio',
      'nav.proceso': 'Process',
      'nav.sandra': 'Sandra',
      'nav.contacto': 'Contact',
      'nav.cta': 'Let’s talk',
      'nav.abrir': 'Open menu',
      'nav.cerrar': 'Close menu',
      'menu.foot': 'Bogotá · Colombia &amp; destination',

      'hero.kicker': 'Wedding planner · Colombia &amp; destination worldwide',

      'loc.1': 'Weddings in Colombia and abroad',
      'loc.2': 'We work in Spanish and English',
      'loc.3': 'Advanced Member · Bodas ABC',

      'des.eyebrow': 'Destinations',
      'des.title': 'Wherever you want to <em>get married</em>',
      'des.lead': 'Marrying far from home is beautiful, and it is complicated. Vendors who do not know the venue, guests arriving from several countries, permits, weather, transport. We take all of it, inside or outside Colombia, so the only thing on your mind is seeing each other.',
      'des.1h': 'In Colombia',
      'des.1p': 'Haciendas on the highland plain, colonial churches, country estates and hotels. We know which ones truly work, and who to call at each.',
      'des.2h': 'Abroad',
      'des.2p': 'We travel with the full production and build the local team. You keep talking to the same person, wherever the wedding is.',
      'des.3h': 'Guests from everywhere',
      'des.3p': 'We write in Spanish and English, handle the arrivals, and build a weekend that makes the trip worth it.',
      'des.img1': 'White chapel at a Colombian hacienda',
      'des.img2': 'Reception with hanging foliage above the tables',
      'des.band': 'Outdoor ceremony among the trees',

      'san.ficha1': 'Based in',
      'san.ficha1v': 'Bogotá, Colombia',
      'san.ficha2': 'Scope',
      'san.ficha2v': 'Colombia and destination worldwide',
      'san.ficha3': 'Languages',
      'san.ficha3v': 'Spanish and English',

      'hero.title': 'A day that <em>feels</em> like the two of you',
      'hero.cta': 'Let’s talk about your wedding',
      'hero.link': 'See weddings',
      'hero.bajar': 'Scroll down',
      'hero.img': 'Image',

      'fil.eyebrow': 'Philosophy',
      'fil.title': 'We don’t make pretty weddings. We make the day you’ll <em>remember whole</em>.',
      'fil.lead': 'Every wedding starts the same way: with your story, and with the kind of weekend you want your people to remember. Everything else follows: the venue, the table, the hour the first song plays. Our job is to make those hundreds of small decisions with you, not for you, and hand you back a clean day.',
      'fil.img': 'The couple by the lake after the ceremony',
      'fil.1h': 'A few weddings a year',
      'fil.1p': 'Sandra takes on only as many as she can be present for. From the first coffee to the last toast, you always talk to her. Never to a middleman.',
      'fil.2h': 'Logistics first',
      'fil.2p': 'The scariest part of a wedding is something falling apart. So we solve the invisible half first: timings, vendors, setup. Once that holds, the rest is yours to enjoy.',
      'fil.3h': 'Local knowledge, global mind',
      'fil.3p': 'We know the venues and the people who work in them, here and abroad. Wherever your guests come from, nobody feels lost.',
      'fil.4h': 'The whole weekend',
      'fil.4p': 'Not just the ceremony: the arrival of those who travelled, the dinner the night before, Sunday breakfast. That is where your people actually meet.',

      'mq.1': 'Full planning',
      'mq.2': 'Art direction',
      'mq.3': 'Destination weddings',
      'mq.4': 'Day-of coordination',

      'srv.eyebrow': 'Services',
      'srv.title': 'Four ways to work together',
      'srv.1h': 'Full planning',
      'srv.1p': 'We walk the whole way with you: budget, vendors, timeline and design. You decide; we carry the rest.',
      'srv.1img': 'Table setup during the production of a wedding',
      'srv.2h': 'Design and art direction',
      'srv.2p': 'Concept, palette, flowers and light that come from your story, not from a catalogue. If a detail says nothing about you, it does not make it in.',
      'srv.2img': 'Hand-drawn sketch of a floral installation',
      'srv.3h': 'Destination weddings',
      'srv.3p': 'Marrying far from home should not mean planning blind. We go, we look, we build the local team, and we tell you everything as if you were standing there.',
      'srv.3img': 'White marquee set up in a garden',
      'srv.4h': 'Day-of coordination',
      'srv.4p': 'You already did the work. We take the day itself, so you can be with your people instead of watching the clock.',
      'srv.4img': 'Marquee entrance lit with lanterns',

      'pf.eyebrow': 'Portfolio',
      'pf.title': 'A few celebrations',
      'pf.note': 'Ceremonies, receptions and the details that hold them up.',
      'pf.ver': 'View',
      'pf.ampliar': 'Enlarge',
      'pf.1': 'Table in white',
      'pf.1a': 'Long table dressed in white with seasonal flowers',
      'pf.2': 'Reception under the marquee',
      'pf.2a': 'Reception under a clear marquee with a tree at its centre',
      'pf.3': 'After the ceremony',
      'pf.3a': 'The couple dancing on the lawn at dusk',
      'pf.4': 'Head table',
      'pf.4a': 'Head table with tableware, flowers and touches of colour',
      'pf.5': 'Before it all',
      'pf.5a': 'The bride’s dress hanging before the ceremony',
      'pf.6': 'Dessert table',
      'pf.6a': 'Dessert table with handmade pieces and candles',
      'pf.7': 'Altar',
      'pf.7a': 'Outdoor altar in wood and dried flowers',
      'pf.8': 'Highland flowers',
      'pf.8a': 'Table dressed with bud vases and yellow flowers',
      'pf.9': 'Lounge',
      'pf.9a': 'Lounge with a tufted sofa against a wall of foliage',
      'pf.10': 'Sailcloth tent',
      'pf.10a': 'White sailcloth tent pitched on the lawn',
      'pf.11': 'Stationery',
      'pf.11a': 'Paper table number among the glassware',
      'pf.12': 'Signage',
      'pf.12a': 'Hand-lettered sign among foliage and dried flowers',

      'band.quote': 'On your wedding day you should not be solving anything. You should be there.',

      'pro.eyebrow': 'The process',
      'pro.title': 'How we work',
      'pro.1h': 'We talk',
      'pro.1p': 'A coffee, free and with no commitment. We want to know how you met, who absolutely has to be there, and how far the budget goes. Without that, nothing can be designed.',
      'pro.2h': 'We design',
      'pro.2p': 'We show you the concept, the palette and the floor plans before a single peso moves. If something does not feel right, it changes. It is your wedding.',
      'pro.3h': 'We produce',
      'pro.3p': 'Contracts, timelines, tastings and site visits. From here you stop answering emails: we talk to everyone.',
      'pro.4h': 'We celebrate',
      'pro.4p': 'Setup, running the day, and strike. You arrive and it is all there. The only thing left for you to do is be present.',

      'san.eyebrow': 'Sandra',
      'san.title': 'The person behind every decision',
      'san.lead': 'Sandra Riveros runs every wedding as if it were the only one of the year. She is at the first meeting, the site visit, the menu tasting, and at six in the morning on setup day, checking that every table looks the way you imagined it.',
      'san.p2': 'Her way of working is simple and uncommon: few weddings a year, full attention on each one, and a direct relationship with you. Along the way she ends up knowing the family, and it shows on the day.',
      'san.rol': 'Wedding Planner',
      'san.img1': 'Sandra Riveros with a bride on her wedding day',
      'san.img2': 'Sandra Riveros finishing a table setup',

      'mem.lead': 'Member of',
      'mem.1': 'Bodas ABC LATAM',
      'mem.1b': 'Worldwide Romance Society',
      'mem.1d': 'Advanced Member',

      'con.eyebrow': 'Contact',
      'con.title': 'Tell us about your wedding',
      'con.lead': 'Write to us even if nothing is settled yet: no date, no venue, no clear idea. The first conversation is to get to know each other, free and without commitment, and to tell you honestly whether we are the right fit.',
      'con.wa': 'WhatsApp',
      'con.mail': 'Email',
      'con.ig': 'Instagram',
      'con.base': 'Based in',
      'con.baseval': 'Bogotá · Colombia &amp; destination',

      'for.nombre': 'Names of the couple',
      'for.nombreph': 'Ana and Daniel',
      'for.email': 'Email',
      'for.emailph': 'ana@email.com',
      'for.fecha': 'Estimated date',
      'for.fechaph': 'November 2026',
      'for.invitados': 'Guests',
      'for.invitadosph': '150',
      'for.lugar': 'Place or city',
      'for.lugarph': 'A hacienda outside Bogotá',
      'for.servicio': 'What do you need?',
      'for.op1': 'Full planning',
      'for.op2': 'Design and art direction',
      'for.op3': 'Destination wedding',
      'for.op4': 'Day-of coordination',
      'for.op5': 'Not sure yet',
      'for.mensaje': 'Tell us how you picture the day',
      'for.mensajeph': 'How you picture the day…',
      'for.enviar': 'Send via WhatsApp',
      'for.alt': 'Prefer email?',
      'for.error': 'Please check the marked fields: the names or the email are missing.',

      'wa.saludo': 'Hi Sandra, we would like to talk about our wedding.',
      'wa.pareja': 'Couple',
      'wa.correo': 'Email',
      'wa.fecha': 'Estimated date',
      'wa.invitados': 'Guests',
      'wa.lugar': 'Place',
      'wa.servicio': 'Service',
      'wa.pordefinir': 'to be defined',
      'wa.asunto': 'Wedding',

      'foot.legal': '© {year} Sandra Riveros · Wedding Planner · Bogotá, Colombia',
      'lb.cerrar': 'Close',
      'lb.anterior': 'Previous',
      'lb.siguiente': 'Next',
      'skip': 'Skip to content'
    }
  };

  var STORE = 'sr-lang';

  function pick() {
    var url = new URLSearchParams(location.search).get('lang');
    if (url === 'es' || url === 'en') return url;
    try {
      var saved = localStorage.getItem(STORE);
      if (saved === 'es' || saved === 'en') return saved;
    } catch (e) { /* modo privado */ }
    var nav = (navigator.language || 'es').toLowerCase();
    return nav.indexOf('es') === 0 ? 'es' : 'en';
  }

  function t(key, lang) {
    var d = DICT[lang] || DICT.es;
    return d[key] != null ? d[key] : (DICT.es[key] != null ? DICT.es[key] : key);
  }

  function apply(lang) {
    if (!DICT[lang]) lang = 'es';
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.innerHTML = t(el.dataset.i18n, lang);
    });

    // atributos: data-i18n-attr="placeholder:for.nombreph, aria-label:lb.cerrar"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.dataset.i18nAttr.split(',').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length !== 2) return;
        var attr = bits[0].trim();
        var txt = t(bits[1].trim(), lang);
        // los atributos no llevan HTML: pasamos las entidades a texto
        var tmp = document.createElement('textarea');
        tmp.innerHTML = txt;
        el.setAttribute(attr, tmp.value);
      });
    });

    document.title = t('meta.title', lang);
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.desc', lang));

    var legal = document.getElementById('legal');
    if (legal) legal.textContent = t('foot.legal', lang).replace('{year}', new Date().getFullYear());

    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('is-on', b.dataset.lang === lang);
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });

    try { localStorage.setItem(STORE, lang); } catch (e) { /* modo privado */ }

    window.I18N.lang = lang;
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  window.I18N = { apply: apply, t: function (k) { return t(k, window.I18N.lang); }, lang: 'es' };

  apply(pick());

  document.addEventListener('click', function (e) {
    var b = e.target.closest('.lang button');
    if (b) apply(b.dataset.lang);
  });
})();
