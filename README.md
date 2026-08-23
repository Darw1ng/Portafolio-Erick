# Portafolio — Erick Jiménez

Portafolio personal de **Erick Jiménez Domínguez**, CTO en Petworld y desarrollador del frontend en Pulso.

🔗 **[portafolio-wawin.vercel.app](https://portafolio-wawin.vercel.app/)**

![HTML5](https://img.shields.io/badge/HTML5-000000?style=flat&logo=html5&logoColor=E34F26)
![CSS3](https://img.shields.io/badge/CSS3-000000?style=flat&logo=css3&logoColor=1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-000000?style=flat&logo=javascript&logoColor=F7DF1E)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Sin dependencias](https://img.shields.io/badge/dependencias-0-4ecdc4?style=flat)

> *[English version below](#english)*



---

## Sobre el sitio

Sitio de una sola página, construido **sin frameworks ni dependencias** — HTML, CSS y JavaScript puro. La decisión es deliberada: un portafolio debe cargar rápido, no depender de un ecosistema de paquetes y poder mantenerse dentro de cinco años sin resolver un árbol de dependencias roto.

### Características

- **Bilingüe (ES / EN)** — switch en la barra de navegación. La preferencia se guarda en `localStorage` y en la primera visita se detecta el idioma del navegador. Sin librerías de i18n: cada nodo traducible lleva sus atributos `data-es` / `data-en` y un solo pase de JavaScript los intercambia.
- **Fondo animado en canvas** — campo de estrellas con parpadeo y desplazamiento, dimensionado al alto real del documento.
- **Carrusel de proyectos** — responsive (1 / 2 / 3 tarjetas según viewport), con indicadores generados dinámicamente.
- **Modal de detalle** — se alimenta de los atributos `data-*` de cada tarjeta, así que agregar un proyecto es agregar un bloque de HTML; no hay que tocar el JavaScript.
- **Animaciones al hacer scroll** — `IntersectionObserver` para el fade-in de secciones y las barras del stack. Sin listeners de scroll.
- **SEO y Open Graph** — meta tags completas, canonical, `og:locale` alterno y `twitter:card`.
- **Accesibilidad** — HTML semántico, `aria-label` en los controles (traducidos junto con el resto de la interfaz) y cierre del modal con `Escape`.

### Estructura

```
.
├── index.html          # Todo el contenido y los datos de proyectos (atributos data-*)
├── css/styles.css      # Estilos, variables de tema y media queries
├── js/script.js        # i18n, modal, carrusel, observers y canvas
├── img/                # Screenshots y placeholders SVG
└── favicon.svg
```

### Correr en local

No hay build. Basta con servir la carpeta:

```bash
python -m http.server 8000
# → http://localhost:8000
```

Abrir `index.html` directamente también funciona, aunque `localStorage` se comporta mejor sobre `http://`.

### Agregar un proyecto

Copiar un bloque `.project-card` dentro de `#carousel` y ajustar sus atributos:

| Atributo        | Para qué sirve                                    |
| --------------- | ------------------------------------------------- |
| `data-title`    | Nombre del proyecto (no se traduce)               |
| `data-desc-es`  | Descripción larga en español, para el modal       |
| `data-desc-en`  | Descripción larga en inglés, para el modal        |
| `data-tech`     | Tecnologías separadas por coma → chips del modal  |
| `data-status`   | `LIVE` o `WIP` → badge de la tarjeta              |
| `data-img`      | Ruta de la imagen                                 |
| `data-link`     | URL del proyecto, o `#` para ocultar el botón     |

El texto visible de la tarjeta se traduce con `data-es` / `data-en` sobre el `<p>`, igual que cualquier otro texto del sitio.

### Stack mostrado en el sitio

React · TypeScript · React Native · Node.js · Express · PostgreSQL · Sequelize · Python · Django · Salesforce (Apex, LWC, Flows) · Stripe · Supabase · Railway · Vercel · Turborepo

---

<a name="english"></a>

## English

Personal portfolio of **Erick Jiménez Domínguez**, CTO at Petworld and frontend developer at Pulso.

🔗 **[portafolio-wawin.vercel.app](https://portafolio-wawin.vercel.app/)**

### About

A single-page site built **with no frameworks and no dependencies** — plain HTML, CSS and JavaScript. That's a deliberate choice: a portfolio should load fast, not depend on a package ecosystem, and still be maintainable in five years without untangling a broken dependency tree.

### Features

- **Bilingual (ES / EN)** — toggle in the navbar. The preference persists in `localStorage` and falls back to the browser language on a first visit. No i18n library: every translatable node carries `data-es` / `data-en` attributes and a single JavaScript pass swaps them.
- **Animated canvas background** — twinkling, drifting star field sized to the real document height.
- **Project carousel** — responsive (1 / 2 / 3 cards by viewport) with dynamically generated indicators.
- **Detail modal** — driven by each card's `data-*` attributes, so adding a project means adding an HTML block; the JavaScript stays untouched.
- **Scroll animations** — `IntersectionObserver` for section fade-ins and stack bars. No scroll listeners.
- **SEO & Open Graph** — full meta tags, canonical URL, alternate `og:locale` and `twitter:card`.
- **Accessibility** — semantic HTML, `aria-label`s on controls (translated along with the rest of the UI) and `Escape` to close the modal.

### Running locally

There's no build step. Just serve the folder:

```bash
python -m http.server 8000
# → http://localhost:8000
```

### Adding a project

Copy a `.project-card` block inside `#carousel` and adjust its attributes — see the Spanish table above; the field names are the same.

---

## Contacto / Contact

- **Email** — [jimdom340@gmail.com](mailto:jimdom340@gmail.com)
- **GitHub** — [@Darw1ng](https://github.com/Darw1ng)
- **Portafolio** — [portafolio-wawin.vercel.app](https://portafolio-wawin.vercel.app/)
