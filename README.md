# Portafolio de Erick

Portafolio personal. Sitio de una sola página, bilingüe (ES/EN), con tres escenas 3D
que corren en vivo en el navegador y una sección en pixel art para los proyectos
que se hacen por gusto.

**Producción:** https://portafolio-wawin.vercel.app/

## Stack

- **React 19 + TypeScript + Vite 8**
- **three.js + React Three Fiber + drei** para las escenas 3D
- CSS propio, sin framework de estilos
- Deploy en Vercel (`vercel.json` fija el preset de Vite)

## Correrlo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # sale en dist/
npm run preview  # sirve dist/ para revisar el build
```

## Estructura

```
index.html            entrada de Vite (metas, OG, fuentes)
public/img/           capturas de proyectos, logos, og.png
src/
  App.tsx             orden de las secciones
  i18n/lang.tsx       contexto ES/EN; todo texto visible es un par { es, en }
  data/
    projects.ts       proyectos profesionales (el contenido vive aquí)
    arcade.ts         sección "por gusto" + sprites en pixel art
    skills.ts         capacidades y barras de nivel
    timeline.ts       trayectoria, formación, perfil y contadores
  components/         una sección por archivo + primitives.tsx (Reveal, sprites, iconos)
  three/
    Stage.tsx         monta el canvas solo cuando la sección se acerca al viewport
    SceneHost.tsx     único archivo que importa three.js (queda en su propio chunk)
    HeroScene.tsx     polvo, retícula y núcleo del hero
    WristbandScene.tsx  PEM: piso de maternidad con pulseras BLE
    VisionScene.tsx   conteo de pasajeros por cámara
    RigScene.tsx      despiece de una PC + switch de red
  styles/
    global.css        sistema visual (tokens, secciones, tarjetas, modal)
    arcade.css        zona pixel art: bordes duros, sombras sin blur, scanlines
```

## Cómo agregar contenido

**Un proyecto**: un objeto más en `src/data/projects.ts`. Si tiene `image`, va a
`public/img/`; si no, la tarjeta genera su propia portada con las iniciales y el color
de su categoría. `status` es `LIVE`, `WIP` o `LAB`; sin `link` la ficha dice
"repositorio privado".

**Un juego o proyecto por gusto**: un objeto más en `src/data/arcade.ts`. El sprite es
una matriz de caracteres y una paleta; `.` es transparente y las filas cortas se
rellenan solas, así que no hace falta cuadrarlas a mano.

**Una escena 3D**: crear el componente en `src/three/`, registrarlo en `SceneHost.tsx`
y poner `scene: '<id>'` en el proyecto correspondiente. El laboratorio arma sus pestañas
con los proyectos que tienen `scene`.

## Detalles que conviene no romper

- **Todo el 3D vive detrás de `Stage`**: descarga el chunk de three.js solo cuando la
  sección se acerca, y en el hero además espera a que el navegador esté ocioso. Importar
  `three` desde cualquier otro archivo lo devolvería al bundle inicial.
- **Cambiar de pestaña en el laboratorio desmonta el canvas anterior** (por el `key`), que
  es lo que libera la GPU. No sustituir por mostrar/ocultar.
- **Las etiquetas de las escenas son DOM** (`<Html>` de drei) con tamaño fijo, no
  `distanceFactor`: así se leen igual de cerca que de lejos.
- **Sin mapa de entorno, un material con `metalness` alto se ve negro.** Las escenas usan
  metalness medio y luces propias; subirlo a 1 apaga las piezas.
- **La preferencia de idioma se guarda en `localStorage['wawin-lang']`**, clave histórica:
  cambiarla borraría la preferencia de quien ya visitó.

## QA

Para revisar en un navegador sin GPU (o headless), Edge/Chrome necesitan
`--use-angle=swiftshader --enable-unsafe-swiftshader`. Dos trampas medidas:

- En headless, `--window-size` menor a ~500 px **no** produce un viewport chico: para
  probar móvil de verdad, cargar el sitio dentro de un `<iframe>` de 390 px.
- Las animaciones de entrada dependen de `IntersectionObserver`; en capturas automáticas
  conviene `--force-prefers-reduced-motion`, que las deja visibles de entrada.
