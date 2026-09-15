/* =========================================================
   Sandra Riveros — español / inglés
   Para cambiar un texto, edítalo aquí en los dos idiomas.
   ========================================================= */
(function () {
  'use strict';

  var DICT = {
    es: {
      'meta.title': 'Sandra Riveros — Wedding Planner',
      'meta.desc': 'Planeación y diseño de bodas. Dirección creativa, producción y coordinación para celebraciones en Colombia y destino.',

      'nav.filosofia': 'Filosofía',
      'nav.servicios': 'Servicios',
      'nav.portafolio': 'Portafolio',
      'nav.proceso': 'Proceso',
      'nav.sandra': 'Sandra',
      'nav.contacto': 'Contacto',
      'nav.cta': 'Agenda tu cita',
      'nav.abrir': 'Abrir menú',
      'nav.cerrar': 'Cerrar menú',
      'menu.foot': 'Bogotá · Colombia y destino',

      'hero.kicker': 'Wedding planner · Colombia &amp; destino internacional',

      'loc.1': 'Sabana de Bogotá',
      'loc.2': 'Cartagena',
      'loc.3': 'Caribe',
      'loc.4': 'Destino internacional',

      'des.eyebrow': 'Destinos',
      'des.title': 'Donde ustedes quieran <em>casarse</em>',
      'des.lead': 'La mitad del trabajo de una boda destino es logística: proveedores que no conocen el lugar, invitados que llegan de varios países, permisos, clima, transporte. Eso lo resolvemos nosotros, dentro o fuera de Colombia, con el mismo equipo de siempre.',
      'des.1h': 'En Colombia',
      'des.1p': 'Haciendas de la sabana, iglesias coloniales, fincas y hoteles. Conocemos los lugares y a quienes trabajan en ellos.',
      'des.2h': 'Fuera del país',
      'des.2p': 'Viajamos con la producción completa y armamos el equipo local. Ustedes tratan con una sola persona, esté donde esté la boda.',
      'des.3h': 'Invitados de varios países',
      'des.3p': 'Comunicación en español e inglés, logística de llegada y una agenda que hace que el viaje valga la pena.',
      'des.img1': 'Capilla blanca de una hacienda colombiana',
      'des.img2': 'Recepción con follaje colgante sobre las mesas',
      'des.band': 'Ceremonia al aire libre entre árboles',

      'san.ficha1': 'Base',
      'san.ficha1v': 'Bogotá, Colombia',
      'san.ficha2': 'Alcance',
      'san.ficha2v': 'Colombia y destino internacional',
      'san.ficha3': 'Idiomas',
      'san.ficha3v': 'Español e inglés',
      'san.ficha4': 'Especialidad',
      'san.ficha4v': 'Bodas destino para parejas de cualquier parte',

      'hero.title': 'Que el día más importante <em>se sienta</em> como ustedes',
      'hero.cta': 'Agenda tu cita',
      'hero.link': 'Ver portafolio',
      'hero.bajar': 'Bajar',
      'hero.img': 'Imagen',

      'fil.eyebrow': 'Filosofía',
      'fil.title': 'No hacemos bodas bonitas. Hacemos el día que ustedes van a <em>recordar completo</em>.',
      'fil.lead': 'Una boda se arma con cientos de decisiones pequeñas. Nuestro trabajo es tomarlas con criterio, sostener el hilo de principio a fin y devolverles el día limpio: sin pendientes, sin afanes, sin que nadie tenga que resolver nada a las once de la noche.',
      'fil.img': 'Novios frente al lago después de la ceremonia',
      'fil.1h': 'Criterio',
      'fil.1p': 'Un concepto claro antes del primer mantel. Todo lo que entra a la boda responde a él.',
      'fil.2h': 'Ejecución',
      'fil.2p': 'Cronogramas, proveedores y montaje bajo una sola dirección. Nada queda al azar.',
      'fil.3h': 'Calma',
      'fil.3p': 'El lujo real de una boda no se ve: se siente en no tener que estar pendiente de nada.',

      'mq.1': 'Planeación integral',
      'mq.2': 'Dirección de arte',
      'mq.3': 'Bodas destino',
      'mq.4': 'Coordinación del día',

      'srv.eyebrow': 'Servicios',
      'srv.title': 'Cuatro formas de acompañarlos',
      'srv.1h': 'Planeación integral',
      'srv.1p': 'Desde la primera idea hasta el último invitado. Presupuesto, proveedores, cronograma y diseño bajo una sola batuta.',
      'srv.1img': 'Montaje de mesa durante la producción de una boda',
      'srv.2h': 'Diseño y dirección de arte',
      'srv.2p': 'Concepto, paleta, flores, luz y montaje. Cada elemento entra porque sostiene una idea, no porque estaba de moda.',
      'srv.2img': 'Boceto a mano del diseño de una instalación floral',
      'srv.3h': 'Bodas destino',
      'srv.3p': 'Hacienda, mar o sabana. Producimos fuera de la ciudad con equipo propio y logística resuelta de punta a punta.',
      'srv.3img': 'Carpa blanca montada en un jardín',
      'srv.4h': 'Coordinación del día',
      'srv.4p': 'Ustedes ya lo planearon todo. Nosotros lo ejecutamos para que el día de la boda solo tengan que estar presentes.',
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

      'band.quote': 'El lujo de una boda no está en lo que se ve. Está en que nadie tuvo que preocuparse.',

      'pro.eyebrow': 'El proceso',
      'pro.title': 'Cómo trabajamos',
      'pro.1h': 'Conversamos',
      'pro.1p': 'Una reunión sin costo para entender a la pareja, la fecha, el número de invitados y hasta dónde llega el presupuesto.',
      'pro.2h': 'Diseñamos',
      'pro.2p': 'Concepto, paleta, planos de montaje y selección de proveedores. Ustedes aprueban antes de que se mueva un peso.',
      'pro.3h': 'Producimos',
      'pro.3p': 'Contratación, cronograma, pruebas y visitas técnicas. Nos volvemos el único interlocutor de todos los proveedores.',
      'pro.4h': 'Celebramos',
      'pro.4p': 'Montaje, dirección del día y desmontaje. Ustedes llegan y la boda ya está lista.',

      'san.eyebrow': 'Sandra',
      'san.title': 'La persona detrás de cada decisión',
      'san.lead': 'Sandra Riveros dirige cada boda como si fuera la única del año. Está en la primera reunión, en la visita técnica, en la prueba de menú y a las seis de la mañana del día del montaje, revisando que cada mesa quede como se dibujó.',
      'san.p2': 'Su manera de trabajar es simple y poco común: pocas bodas al año, atención completa a cada una y una relación directa con los novios. Nada de intermediarios, nada de equipos que aparecen el día del evento sin conocer la historia.',
      'san.rol': 'Wedding Planner',
      'san.img1': 'Sandra Riveros junto a una novia el día de su boda',
      'san.img2': 'Sandra Riveros terminando el montaje de una mesa',

      'tes.eyebrow': 'Lo que dicen',
      'tes.1q': '“Nos entregó el día completo. No tuvimos que resolver una sola cosa y todo salió exactamente como lo habíamos imaginado.”',
      'tes.2q': '“Entendió lo que queríamos antes de que supiéramos explicarlo. El montaje nos dejó sin palabras.”',
      'tes.3q': '“Nuestros invitados todavía nos hablan de esa boda. Y nosotros solo tuvimos que llegar y disfrutar.”',
      'tes.1c': 'Novios 2024',
      'tes.2c': 'Novios 2024',
      'tes.3c': 'Novios 2023',
      'tes.n': 'Testimonio',

      'mem.lead': 'Miembro de',
      'mem.1': 'Bodas ABC LATAM',
      'mem.1d': 'Association of Bridal Consultants · desde 1955',
      'mem.2': 'Worldwide Romance Society',
      'mem.2d': 'Red internacional de profesionales de bodas',

      'con.eyebrow': 'Contacto',
      'con.title': 'Cuéntennos de su boda',
      'con.lead': 'La primera conversación no tiene costo ni compromiso. Escríbannos con la fecha y el lugar que tienen en mente y les respondemos con disponibilidad y siguientes pasos.',
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
      'for.mensaje': 'Cuéntennos un poco más',
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
      'meta.title': 'Sandra Riveros — Wedding Planner',
      'meta.desc': 'Wedding planning and design. Creative direction, production and coordination for celebrations in Colombia and abroad.',

      'nav.filosofia': 'Philosophy',
      'nav.servicios': 'Services',
      'nav.portafolio': 'Portfolio',
      'nav.proceso': 'Process',
      'nav.sandra': 'Sandra',
      'nav.contacto': 'Contact',
      'nav.cta': 'Book a call',
      'nav.abrir': 'Open menu',
      'nav.cerrar': 'Close menu',
      'menu.foot': 'Bogotá · Colombia &amp; destination',

      'hero.kicker': 'Wedding planner · Colombia &amp; destination worldwide',

      'loc.1': 'Bogotá highlands',
      'loc.2': 'Cartagena',
      'loc.3': 'The Caribbean',
      'loc.4': 'Worldwide',

      'des.eyebrow': 'Destinations',
      'des.title': 'Wherever you want to <em>get married</em>',
      'des.lead': 'Half the work of a destination wedding is logistics: vendors who do not know the venue, guests arriving from several countries, permits, weather, transport. We handle all of it, inside or outside Colombia, with the same team as always.',
      'des.1h': 'In Colombia',
      'des.1p': 'Haciendas on the highland plain, colonial churches, country estates and hotels. We know the places and the people who work in them.',
      'des.2h': 'Abroad',
      'des.2p': 'We travel with the full production and build the local team. You deal with one person, wherever the wedding is.',
      'des.3h': 'Guests from everywhere',
      'des.3p': 'We work in Spanish and English, handle arrivals, and build a weekend that makes the trip worth it.',
      'des.img1': 'White chapel at a Colombian hacienda',
      'des.img2': 'Reception with hanging foliage above the tables',
      'des.band': 'Outdoor ceremony among the trees',

      'san.ficha1': 'Based in',
      'san.ficha1v': 'Bogotá, Colombia',
      'san.ficha2': 'Scope',
      'san.ficha2v': 'Colombia and destination worldwide',
      'san.ficha3': 'Languages',
      'san.ficha3v': 'Spanish and English',
      'san.ficha4': 'Specialty',
      'san.ficha4v': 'Destination weddings for couples from anywhere',

      'hero.title': 'A day that <em>feels</em> like the two of you',
      'hero.cta': 'Book a call',
      'hero.link': 'See portfolio',
      'hero.bajar': 'Scroll down',
      'hero.img': 'Image',

      'fil.eyebrow': 'Philosophy',
      'fil.title': 'We don’t make pretty weddings. We make the day you’ll <em>remember whole</em>.',
      'fil.lead': 'A wedding is built from hundreds of small decisions. Our job is to make them with judgement, hold the thread from beginning to end, and hand you back a clean day: nothing pending, nothing rushed, nobody solving anything at eleven at night.',
      'fil.img': 'The couple by the lake after the ceremony',
      'fil.1h': 'Judgement',
      'fil.1p': 'A clear concept before the first linen. Everything that enters the wedding answers to it.',
      'fil.2h': 'Execution',
      'fil.2p': 'Timelines, vendors and setup under one direction. Nothing is left to chance.',
      'fil.3h': 'Calm',
      'fil.3p': 'The real luxury of a wedding is invisible: it is not having to keep an eye on anything.',

      'mq.1': 'Full planning',
      'mq.2': 'Art direction',
      'mq.3': 'Destination weddings',
      'mq.4': 'Day-of coordination',

      'srv.eyebrow': 'Services',
      'srv.title': 'Four ways to work together',
      'srv.1h': 'Full planning',
      'srv.1p': 'From the first idea to the last guest. Budget, vendors, timeline and design under one baton.',
      'srv.1img': 'Table setup during the production of a wedding',
      'srv.2h': 'Design and art direction',
      'srv.2p': 'Concept, palette, flowers, light and setup. Every element earns its place by holding up an idea, not by being in fashion.',
      'srv.2img': 'Hand-drawn sketch of a floral installation',
      'srv.3h': 'Destination weddings',
      'srv.3p': 'Hacienda, coast or highland plain. We produce outside the city with our own team and logistics solved end to end.',
      'srv.3img': 'White marquee set up in a garden',
      'srv.4h': 'Day-of coordination',
      'srv.4p': 'You have planned it all. We run it, so that on the wedding day all you have to do is be there.',
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

      'band.quote': 'The luxury of a wedding is not in what you see. It is in that nobody had to worry.',

      'pro.eyebrow': 'The process',
      'pro.title': 'How we work',
      'pro.1h': 'We talk',
      'pro.1p': 'A free first meeting to understand the couple, the date, the number of guests and how far the budget goes.',
      'pro.2h': 'We design',
      'pro.2p': 'Concept, palette, floor plans and vendor selection. You approve before a single peso moves.',
      'pro.3h': 'We produce',
      'pro.3p': 'Contracts, timeline, tastings and site visits. We become the single point of contact for every vendor.',
      'pro.4h': 'We celebrate',
      'pro.4p': 'Setup, running the day and strike. You arrive and the wedding is already there.',

      'san.eyebrow': 'Sandra',
      'san.title': 'The person behind every decision',
      'san.lead': 'Sandra Riveros runs every wedding as if it were the only one of the year. She is at the first meeting, the site visit, the menu tasting, and at six in the morning on setup day, checking that every table looks the way it was drawn.',
      'san.p2': 'Her way of working is simple and uncommon: few weddings a year, full attention on each one, and a direct relationship with the couple. No middlemen, no teams that show up on the day without knowing the story.',
      'san.rol': 'Wedding Planner',
      'san.img1': 'Sandra Riveros with a bride on her wedding day',
      'san.img2': 'Sandra Riveros finishing a table setup',

      'tes.eyebrow': 'What they say',
      'tes.1q': '“She handed us the whole day. We did not have to solve a single thing and it turned out exactly as we had pictured it.”',
      'tes.2q': '“She understood what we wanted before we knew how to explain it. The setup left us speechless.”',
      'tes.3q': '“Our guests still talk to us about that wedding. And all we had to do was show up and enjoy it.”',
      'tes.1c': 'Couple, 2024',
      'tes.2c': 'Couple, 2024',
      'tes.3c': 'Couple, 2023',
      'tes.n': 'Testimonial',

      'mem.lead': 'Member of',
      'mem.1': 'Bodas ABC LATAM',
      'mem.1d': 'Association of Bridal Consultants · since 1955',
      'mem.2': 'Worldwide Romance Society',
      'mem.2d': 'International network of wedding professionals',

      'con.eyebrow': 'Contact',
      'con.title': 'Tell us about your wedding',
      'con.lead': 'The first conversation is free and without commitment. Write to us with the date and the place you have in mind and we will come back with availability and next steps.',
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
      'for.mensaje': 'Tell us a little more',
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
