# Sandra Riveros — Wedding Planner

Landing page estática: HTML, CSS y JavaScript, sin dependencias ni build.
Se publica tal cual en cualquier hosting.

```
web/
├── index.html
├── favicon.png
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/              26 fotos optimizadas + el logo (~7 MB)
└── README.md
```

## Ver en local

```bash
python3 -m http.server 4173 --directory web
```

Luego abre <http://localhost:4173>.

## Pendientes antes de publicar

Todos están marcados con `TODO` en el código.

| Qué | Dónde |
|---|---|
| Número de WhatsApp real | `assets/js/main.js` (`WHATSAPP`) y `index.html` (enlace `wa.me`) |
| Correo real | `index.html` (3 lugares) y `assets/js/main.js` (`CORREO`) |
| Usuario de Instagram | `index.html`, sección Contacto |
| Bio real de Sandra | `index.html`, sección `#sandra` |
| **Testimonios reales** | `index.html`, sección `#testimonios` — los tres actuales son texto de ejemplo y deben reemplazarse por citas reales, con autorización de los novios |
| Dominio en `og:image` | `index.html`, usar la URL absoluta cuando el sitio esté en línea |

El formulario arma un mensaje de WhatsApp con los datos. Mientras `WHATSAPP`
tenga el valor de ejemplo, abre el cliente de correo en su lugar, para que
ninguna consulta se pierda.

## Qué hace la página

- Hero con tres fotos en fundido y zoom lento.
- Titulares que entran palabra por palabra al hacer scroll.
- Servicios: al pasar el mouse por cada servicio, su foto sigue al cursor
  (en móvil la foto aparece debajo de cada uno).
- Portafolio en mosaico con cursor "Ver" y lightbox con teclado (← → Esc).
- Parallax suave en las fotos grandes y barra de progreso de lectura.
- Testimonios en carrusel y formulario con etiquetas flotantes.

Todo respeta `prefers-reduced-motion`: si el sistema pide menos animación,
la página se queda quieta.

## Fotografía

Las fotos salen del archivo de Sandra, recortadas y comprimidas con `ffmpeg`.
Para cambiar una: reemplaza el archivo en `assets/img/` conservando el nombre
y la proporción (las horizontales son 3:2, las verticales 3:4).

El logo (`assets/img/logo-sr.png`) es el original con el fondo removido, en
negro sobre transparencia; el CSS lo vuelve blanco donde hace falta.

## Al editar CSS o JS

`index.html` carga los assets con `?v=8`. Sube ese número al cambiarlos para
que los navegadores no sirvan la versión vieja.

## Publicar en GitHub Pages

En *Settings → Pages*, elegir la rama `main` y la carpeta `/web`.
