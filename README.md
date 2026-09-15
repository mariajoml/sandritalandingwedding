# Sandra Riveros — Wedding Planner

Landing page estática: HTML, CSS y JavaScript, sin dependencias ni build.
Se publica tal cual en cualquier hosting.

```
web/
├── index.html
├── favicon.png
├── assets/
│   ├── css/styles.css
│   ├── js/i18n.js        todos los textos, en español e inglés
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

| Confirmar «Pocas bodas al año» | `assets/js/i18n.js`, clave `fil.1p` — es un compromiso concreto con los novios; confirmar con Sandra |
| Bio real de Sandra | `assets/js/i18n.js`, claves `san.lead` y `san.p2` (en los dos idiomas) |
| **Nombre de la segunda membresía** | `assets/js/i18n.js`, claves `mem.2` y `mem.2d` — «Worldwide Romance Society» no aparece como organización pública; confirmar el nombre exacto |
| **Testimonios reales** | `assets/js/i18n.js`, claves `tes.1q` a `tes.3c` — los tres actuales son texto de ejemplo y deben reemplazarse por citas reales, con autorización de los novios |

El formulario arma un mensaje de WhatsApp con los datos. Mientras `WHATSAPP`
tenga el valor de ejemplo, abre el cliente de correo en su lugar, para que
ninguna consulta se pierda.

## Español e inglés

Todos los textos viven en `assets/js/i18n.js`, en un solo diccionario con las
dos versiones. En el HTML no hay texto suelto: cada elemento lleva un
`data-i18n="clave"` y el idioma se aplica al cargar.

**Para cambiar un texto**, búscalo en `i18n.js` y edítalo en `es` y en `en`.
No hay que tocar el HTML.

El idioma se elige así, en este orden: `?lang=es` o `?lang=en` en la URL, luego
la última elección guardada en el navegador, y si no, el idioma del navegador
(español si es español, inglés en cualquier otro caso). El botón ES/EN está en
el menú, arriba en escritorio y dentro del menú en móvil.

## Qué hace la página

- Hero con tres fotos en fundido y zoom lento, y el posicionamiento
  «Colombia & destino internacional» bajo el titular.
- Franja de lugares bajo el hero y sección propia de Destinos, con la ficha
  de alcance e idiomas en la sección de Sandra.
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

`index.html` carga los assets con `?v=9`. Sube ese número al cambiarlos para
que los navegadores no sirvan la versión vieja.

## Dominio

El sitio apunta a `https://sandrariveroswedding.com`. Ese dominio está escrito
en `index.html` (canonical, Open Graph y datos estructurados), en `robots.txt`
y en `sitemap.xml`. Si cambia, hay que actualizarlo en esos tres archivos.

## Publicar en Cloudflare Pages

El repositorio es privado y Cloudflare Pages funciona con repos privados sin
costo. En <https://dash.cloudflare.com> → *Workers & Pages* → *Create* →
*Pages* → *Connect to Git*, elegir `sandritalandingwedding` y dejar:

| Campo | Valor |
|---|---|
| Framework preset | None |
| Build command | *(vacío)* |
| Build output directory | `/` |
| Root directory | `/` |

No hay build: el sitio se sirve tal cual. Cada `git push` a `main` vuelve a
desplegar solo.

Para el dominio propio: *Custom domains* → *Set up a domain*. Si el dominio ya
está en Cloudflare, el DNS se configura solo. Si está en otro proveedor, la
pantalla indica el CNAME que hay que crear. El HTTPS lo emite Cloudflare.

El archivo `_headers` define caché y cabeceras de seguridad; lo lee Cloudflare
Pages automáticamente.
