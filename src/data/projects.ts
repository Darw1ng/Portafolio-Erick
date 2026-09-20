import type { L } from '../i18n/lang'

export type Status = 'LIVE' | 'WIP' | 'LAB'
export type Category = 'producto' | 'salud' | 'rastreo' | 'ia' | 'web' | 'hardware'
export type SceneId = 'wristband' | 'vision' | 'rig'

export type Project = {
  id: string
  title: string
  year: string
  status: Status
  category: Category
  tech: string[]
  summary: L
  description: L
  highlights?: L[]
  link?: string
  image?: string
  scene?: SceneId
  featured?: boolean
}

export const categories: { id: Category | 'all'; label: L }[] = [
  { id: 'all', label: { es: 'Todos', en: 'All' } },
  { id: 'producto', label: { es: 'Producto', en: 'Product' } },
  { id: 'salud', label: { es: 'Salud', en: 'Health' } },
  { id: 'rastreo', label: { es: 'Rastreo y movilidad', en: 'Tracking & mobility' } },
  { id: 'ia', label: { es: 'IA y visión', en: 'AI & vision' } },
  { id: 'web', label: { es: 'Sitios y propuestas', en: 'Sites & proposals' } },
  { id: 'hardware', label: { es: 'Hardware y redes', en: 'Hardware & networking' } },
]

export const projects: Project[] = [
  {
    id: 'petworld',
    title: 'Petworld',
    year: '2026 — hoy',
    status: 'LIVE',
    category: 'producto',
    featured: true,
    tech: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Stripe', 'Backblaze B2', 'Railway', 'Vercel'],
    link: 'https://www.petworldapp.com',
    image: '/img/ph-petworld.svg',
    summary: {
      es: 'Plataforma SaaS del ecosistema de mascotas, con monetización viva. Trabajo el stack completo.',
      en: 'SaaS platform for the pet ecosystem, with live monetization. I work the entire stack.',
    },
    description: {
      es: 'Plataforma SaaS para el ecosistema de mascotas: adopción, cartilla de salud digital, refugios y negocios. Trabajo el stack completo —frontend, backend, base de datos e infraestructura—. Diseñé el sistema de suscripciones y entitlements con Stripe, el motor de límites por plan que sostiene la monetización en vivo, el programa de adopción selectiva, las placas QR de identidad, el módulo de equipo con roles y permisos por negocio, la migración de almacenamiento a Backblaze B2 y el panel de administración.',
      en: 'SaaS platform for the pet ecosystem: adoption, digital health records, shelters and businesses. I work across the full stack —frontend, backend, database and infrastructure—. I designed the Stripe subscriptions and entitlements system, the per-plan quota engine behind live monetization, the selective adoption program, QR identity tags, the team module with per-business roles and permissions, the storage migration to Backblaze B2 and the admin panel.',
    },
    highlights: [
      { es: 'Migraciones SQL versionadas y más de 2,900 pruebas automatizadas en el backend.', en: 'Versioned SQL migrations and 2,900+ automated backend tests.' },
      { es: 'Refactor completo del frontend a TypeScript estricto.', en: 'Full frontend refactor to strict TypeScript.' },
      { es: 'App móvil en Flutter camino a Play Store, con 371 pruebas en verde.', en: 'Flutter mobile app heading to the Play Store, with 371 green tests.' },
    ],
  },
  {
    id: 'pulso',
    title: 'Pulso',
    year: '2025 — hoy',
    status: 'LIVE',
    category: 'salud',
    featured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Django', 'PostgreSQL', 'Vitest', 'Cloudflare Pages'],
    link: 'https://pulso-sitirt.pages.dev',
    image: '/img/ph-pulso.svg',
    summary: {
      es: 'SaaS médico para consultorios. Producto de equipo: yo llevo el carril de React del monorepo.',
      en: 'Medical SaaS for clinics. A team product: I own the React track of the monorepo.',
    },
    description: {
      es: 'SaaS médico para consultorios: expediente clínico, recetas, agenda, cobros e inventario. Es un producto de equipo y yo trabajo el frontend, el carril de React dentro de un monorepo Django + React, contra un contrato de API compartido con el carril de backend. Construí el registro público de médicos, los módulos por especialidad (traumatología, cardiología, neumología, dermatología, nefrología, ginecología y psicología), el visor anatómico en 3D, el buscador del catálogo CIE-10 sobre más de 400 diagnósticos, el cobro directo desde la cita y la receta personalizable.',
      en: 'Medical SaaS for clinics: patient records, prescriptions, scheduling, billing and inventory. It is a team product and I work on the frontend: the React track inside a Django + React monorepo, against an API contract shared with the backend track. I built the public doctor sign-up, the specialty modules (orthopedics, cardiology, pulmonology, dermatology, nephrology, gynecology and psychology), the 3D anatomy viewer, the ICD-10 search across 400+ diagnoses, billing straight from the appointment and the customizable prescription.',
    },
    highlights: [
      { es: 'Reglas normativas dentro del producto: qué especialidad puede recetar y en qué grupo cae cada fármaco.', en: 'Regulatory rules inside the product: which specialty may prescribe and which group each drug falls into.' },
      { es: 'Módulos detrás de feature flags, para encender especialidad por especialidad.', en: 'Modules behind feature flags, to turn specialties on one at a time.' },
      { es: 'Auditoría previa a producción que dejó el frontend listo para pacientes reales.', en: 'Pre-production audit that got the frontend ready for real patients.' },
    ],
  },
  {
    id: 'pem',
    title: 'PEM · Protección de recién nacidos',
    year: '2026',
    status: 'WIP',
    category: 'rastreo',
    featured: true,
    scene: 'wristband',
    tech: ['three.js', 'JavaScript', 'BLE / RTLS', 'Simulación', 'Vercel'],
    link: 'https://pem-propuesta-3d.vercel.app',
    image: '/img/screenshot-pem.jpg',
    summary: {
      es: 'Gemelo 3D de un piso de maternidad con pulseras BLE: cada bebé vinculado a su mamá, en vivo.',
      en: '3D twin of a maternity floor with BLE wristbands: every baby linked to their mother, live.',
    },
    description: {
      es: 'Prototipo navegable de un sistema de protección de recién nacidos para el área de maternidad de un hospital, sobre rastreo en interiores con anclas BLE. El piso entero es un gemelo en 3D que se gira y se acerca: habitaciones, cunero, enfermería, tococirugía, tamiz neonatal y salidas, con cada bebé en su zona y su trayectoria dibujada. Al tocar a un bebé se ve a su mamá vinculada, la batería y la señal de la etiqueta.',
      en: 'Navigable prototype of a newborn protection system for a hospital maternity floor, built on indoor tracking with BLE anchors. The whole floor is a 3D twin that rotates and zooms: rooms, nursery, nurse station, delivery room, neonatal screening and exits, with every baby in their zone and their path drawn. Tapping a baby shows the linked mother, plus tag battery and signal.',
    },
    highlights: [
      { es: 'Eventos críticos simulados: banda cortada, cruce de umbral, pérdida de señal y Código Rosa.', en: 'Simulated critical events: cut band, threshold crossing, signal loss and Code Pink.' },
      { es: 'Un solo motor de simulación a 1 Hz alimenta la vista 3D y la operativa.', en: 'A single 1 Hz simulation engine feeds both the 3D and the operational views.' },
      { es: 'Cobertura de anclas BA3000 dibujada sobre el plano para discutir la instalación real.', en: 'BA3000 anchor coverage drawn over the floor plan to discuss the real installation.' },
    ],
  },
  {
    id: 'conteo',
    title: 'Conteo de pasajeros por cámara',
    year: '2026',
    status: 'LAB',
    category: 'ia',
    featured: true,
    scene: 'vision',
    tech: ['Python', 'NanoDet', 'ONNX Runtime', 'OpenCV', 'Raspberry Pi'],
    summary: {
      es: 'Detección y seguimiento de quién sube y quién baja de un camión, a 19 fps sobre un solo núcleo.',
      en: 'Detecting and tracking who boards and who leaves a bus, at 19 fps on a single core.',
    },
    description: {
      es: 'Visión por computadora para contar quién sube y quién baja de una unidad de transporte público, y sostener la ocupación en vivo. El detector corre a 19 fps usando el 55 % de un solo núcleo, así que una Raspberry Pi 5 sobra para llevarlo a bordo. La cámara va frontal, no cenital, y la huella de cada persona es efímera: se olvida cuando termina el viaje.',
      en: 'Computer vision to count who boards and who leaves a public transport unit, and to keep occupancy live. The detector runs at 19 fps using 55% of a single core, so a Raspberry Pi 5 is more than enough to take it on board. The camera faces forward, not down, and each person footprint is ephemeral: it is forgotten when the trip ends.',
    },
    highlights: [
      { es: 'Sin reconocimiento entre días: nada biométrico se guarda, por diseño y por ley.', en: 'No recognition across days: nothing biometric is stored, by design and by law.' },
      { es: 'Cajas anidadas descartadas a mano: el NMS por IoU deja pasar al pasajero fantasma.', en: 'Nested boxes discarded by hand: IoU-based NMS lets the ghost passenger through.' },
      { es: 'Extra del proyecto Xaman-Ek, en laboratorio aparte y con 20 pruebas en verde.', en: 'A Xaman-Ek add-on, kept in a separate lab with 20 green tests.' },
    ],
  },
  {
    id: 'rig',
    title: 'Ensamble, redes y domótica',
    year: '2017 — hoy',
    status: 'LIVE',
    category: 'hardware',
    featured: true,
    scene: 'rig',
    tech: ['Ensamble de equipo', 'Cisco Packet Tracer', 'Cableado estructurado', 'IoT'],
    summary: {
      es: 'Antes del código está el fierro: armar la máquina, tender la red y automatizar la casa.',
      en: 'Before the code there is the metal: building the machine, running the network, automating the home.',
    },
    description: {
      es: 'Armo equipos desde las piezas —tarjeta madre, procesador, memoria, almacenamiento, fuente y disipación— y los diagnostico cuando fallan. A eso se suma el trabajo de red: cableado, configuración y simulación en Cisco Packet Tracer, más proyectos de domótica e IoT. Especialidad de nivel medio en redes y domótica, con práctica en servidores y administración de sistemas desde 2017.',
      en: 'I build machines from parts —motherboard, processor, memory, storage, power supply and cooling— and troubleshoot them when they fail. On top of that comes the network work: cabling, configuration and simulation in Cisco Packet Tracer, plus home automation and IoT projects. Intermediate level in networking and home automation, with hands-on practice in servers and systems administration since 2017.',
    },
    highlights: [
      { es: 'Certificación Cisco Packet Tracer (2024).', en: 'Cisco Packet Tracer certification (2024).' },
      { es: 'Seis meses como auxiliar de TI en una consultora, viendo la infraestructura de clientes por dentro.', en: 'Six months as IT assistant at a consulting firm, seeing client infrastructure from the inside.' },
      { es: 'La escena de aquí al lado es un despiece: cada pieza entra en el orden real de ensamble.', en: 'The scene right here is a teardown: every part enters in real assembly order.' },
    ],
  },
  {
    id: 'anatomia',
    title: 'Pulso · Anatomía 3D',
    year: '2026',
    status: 'LIVE',
    category: 'salud',
    tech: ['React', 'TypeScript', 'three.js', 'React Three Fiber', 'drei', 'glTF'],
    link: 'https://pulso-sitirt.pages.dev',
    image: '/img/screenshot-pulso-anatomia.jpg',
    summary: {
      es: 'Visor anatómico dentro de Pulso para que el médico le explique al paciente qué le está pasando.',
      en: 'Anatomy viewer inside Pulso so the doctor can show the patient what is going on.',
    },
    description: {
      es: 'Modelos por región —columna lumbar y nervio ciático, rodilla y pie, cadera, brazo, corazón, pulmones, piel, riñones, pie diabético— que se giran, se acercan y se abren en pantalla completa. Al elegir un padecimiento, el modelo resalta la estructura afectada, la señala con una etiqueta y la explica en palabras llanas; tocar cualquier parte también la explica.',
      en: 'Region models —lumbar spine and sciatic nerve, knee and foot, hip, arm, heart, lungs, skin, kidneys, diabetic foot— that rotate, zoom and go full screen. Picking a condition highlights the affected structure, labels it and explains it in plain language; tapping any part explains it too.',
    },
  },
  {
    id: 'xamanek',
    title: 'Xaman-Ek',
    year: '2026',
    status: 'WIP',
    category: 'rastreo',
    tech: ['Flutter', 'Dart', 'PostgreSQL', 'RLS', 'VPS'],
    summary: {
      es: 'Rastreo del transporte público de Córdoba: dónde viene el camión, en vivo y sin APIs de paga.',
      en: 'Public transport tracking in Córdoba: where the bus is, live and without paid APIs.',
    },
    description: {
      es: 'Sistema de rastreo de camiones urbanos para Córdoba, Veracruz, con tres carriles de trabajo y app en Flutter. El mapa es lienzo propio, sin Mapbox: el ruteo se resuelve con datos libres. Incluye panel de turnos y control de unidades, con políticas de acceso a nivel de base de datos y sin pedirle la ubicación al pasajero.',
      en: 'Urban bus tracking for Córdoba, Veracruz, with three work tracks and a Flutter app. The map is a custom canvas, no Mapbox: routing is solved with open data. It includes a shift panel and unit control, with row-level database policies and without asking the passenger for their location.',
    },
    highlights: [
      { es: 'Privacidad primero: el pasajero nunca entrega su ubicación.', en: 'Privacy first: the passenger never hands over their location.' },
      { es: 'Mapa y ruteo propios, construidos para que el costo de operación no dependa de un proveedor.', en: 'Custom map and routing, built so running costs do not depend on a vendor.' },
    ],
  },
  {
    id: 'kura',
    title: 'Kura',
    year: '2026',
    status: 'LIVE',
    category: 'salud',
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'PostgreSQL', 'Neon', 'Vercel'],
    link: 'https://kura-salud.vercel.app',
    image: '/img/screenshot-kura.jpg',
    summary: {
      es: 'Telemedicina por suscripción para enfermedades crónicas en México. Hackathon InnovaHealth 2026.',
      en: 'Subscription telemedicine for chronic conditions in Mexico. InnovaHealth 2026 hackathon.',
    },
    description: {
      es: 'Telemedicina por suscripción para personas con enfermedades crónicas —diabetes tipo 2, hipertensión, sobrepeso, dislipidemia, hipotiroidismo y enfermedad renal crónica—: consulta al mes con médico certificado, medicamento entregado en casa y acompañamiento diario entre consultas. Proyecto de equipo para el hackathon InnovaHealth 2026 (CNIB, Oaxaca); yo llevo el frontend y el alcance clínico.',
      en: 'Subscription telemedicine for people with chronic conditions —type 2 diabetes, hypertension, overweight, dyslipidemia, hypothyroidism and chronic kidney disease—: a monthly visit with a certified doctor, medication delivered at home and daily follow-up in between. A team project for the InnovaHealth 2026 hackathon (CNIB, Oaxaca); I own the frontend and the clinical scope.',
    },
  },
  {
    id: 'just2know',
    title: 'just2know',
    year: '2025',
    status: 'LIVE',
    category: 'producto',
    tech: ['React', 'Vite', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Vercel'],
    link: 'https://just2know.vercel.app',
    image: '/img/screenshot-just2know.jpg',
    summary: {
      es: 'Calendario familiar compartido, de idea a producto en producción con suscripciones.',
      en: 'Shared family calendar, from idea to a live product with subscriptions.',
    },
    description: {
      es: 'Construido de punta a punta: autenticación propia, sincronización en tiempo real con Supabase, invitaciones a grupos y un flujo completo de suscripción con Stripe —checkout, webhooks y portal de cliente— verificado extremo a extremo.',
      en: 'Built end to end: custom authentication, real-time sync with Supabase, group invitations, and a complete Stripe subscription flow —checkout, webhooks and customer portal— verified end to end.',
    },
  },
  {
    id: 'wakos',
    title: 'WakOs Salesforce',
    year: '2025',
    status: 'LIVE',
    category: 'producto',
    tech: ['Salesforce', 'Apex', 'LWC', 'TypeScript', 'React', 'Stripe'],
    link: 'https://github.com/Darw1ng/WakOs-Salesforce',
    image: '/img/screenshot-wakos.jpg',
    summary: {
      es: 'ERP de e-learning nativo en Salesforce: cursos, pagos con Stripe y seguimiento de progreso.',
      en: 'Salesforce-native e-learning ERP: courses, Stripe payments and progress tracking.',
    },
    description: {
      es: 'Backend en Apex con Flows declarativos, frontend en React con TypeScript, arquitectura basada en Custom Metadata y API REST.',
      en: 'Apex backend with declarative Flows, React + TypeScript frontend, Custom Metadata architecture and a REST API.',
    },
  },
  {
    id: 'garcia',
    title: 'POS García',
    year: '2026',
    status: 'WIP',
    category: 'producto',
    tech: ['TypeScript', 'Monorepo', 'Cloudflare', 'Impresión local'],
    summary: {
      es: 'Punto de venta para una pescadería: pesaje, calibres y tickets, pensado para el mostrador.',
      en: 'Point of sale for a fish market: weighing, grades and tickets, made for the counter.',
    },
    description: {
      es: 'Punto de venta a la medida de un negocio que vende por peso: el calibre sale de una lista cerrada, la tara tiene piso para que nunca dé peso negativo y la impresora se resuelve con un puente local en vez de depender de la nube. Yo llevo el carril de nube del monorepo.',
      en: 'Point of sale tailored to a business that sells by weight: the grade comes from a closed list, tare has a floor so weight can never go negative, and the printer is solved with a local bridge instead of depending on the cloud. I own the cloud track of the monorepo.',
    },
  },
  {
    id: 'rudix',
    title: 'Rudix Mobility',
    year: '2026',
    status: 'WIP',
    category: 'rastreo',
    tech: ['React Native', 'Expo SDK 57', 'TypeScript', 'Uniwind'],
    summary: {
      es: 'App de movilidad en Expo, construida sobre el SDK 57 y un sistema de estilos nuevo.',
      en: 'Mobility app in Expo, built on SDK 57 and a new styling system.',
    },
    description: {
      es: 'Aplicación móvil de movilidad en React Native con Expo SDK 57 y Uniwind. Repositorio privado, en desarrollo activo.',
      en: 'React Native mobility app with Expo SDK 57 and Uniwind. Private repository, under active development.',
    },
  },
  {
    id: 'apolo',
    title: 'Apolo',
    year: '2026',
    status: 'WIP',
    category: 'rastreo',
    tech: ['GPS', 'GT06', 'Node.js', 'PostgreSQL'],
    summary: {
      es: 'Rastreo vehicular con protocolo GT06 y simulador propio, sin una sola API de paga.',
      en: 'Vehicle tracking with the GT06 protocol and a custom simulator, without a single paid API.',
    },
    description: {
      es: 'Plataforma de rastreo vehicular pensada con una restricción dura: cero servicios de paga. Incluye un simulador de dispositivos GT06 para poder desarrollar y probar sin hardware en la mano, y la capa de mapas resuelta con datos libres.',
      en: 'Vehicle tracking platform designed under a hard constraint: zero paid services. It includes a GT06 device simulator so development and testing can happen without hardware at hand, and a map layer solved with open data.',
    },
  },
  {
    id: 'quijote',
    title: 'Quijote',
    year: '2025',
    status: 'WIP',
    category: 'producto',
    tech: ['React 19', 'TypeScript', 'Vite', 'Turborepo', 'pnpm'],
    image: '/img/screenshot-quijote.jpg',
    summary: {
      es: 'Inventario para librerías: de un export de diseño a un monorepo funcional.',
      en: 'Bookstore inventory: from a design export to a working monorepo.',
    },
    description: {
      es: 'Arquitectura con pnpm y Turborepo, seis rutas construidas con Vite, React 19 y TypeScript, y un sistema de estilos encapsulado para evitar colisiones de CSS. Control de inventario propio y en consigna, proveedores, devoluciones y órdenes de compra.',
      en: 'pnpm + Turborepo architecture, six routes built with Vite, React 19 and TypeScript, and a scoped styling system to avoid CSS collisions. Owned and consignment inventory, suppliers, returns and purchase orders.',
    },
  },
  {
    id: 'genesis',
    title: 'Génesis Calasanz',
    year: '2026',
    status: 'LIVE',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'Supabase', 'Vercel'],
    image: '/img/screenshot-genesis.jpg',
    summary: {
      es: 'Sitio del grupo con inscripción en línea: el formulario escribe directo en la base.',
      en: 'Group website with online sign-up: the form writes straight into the database.',
    },
    description: {
      es: 'Sitio institucional del grupo Génesis Calasanz del Colegio Cristóbal Colón, con inscripción en línea respaldada por Supabase. La portada es la esencia del proyecto: sobria y sin sobrecarga de color.',
      en: 'Institutional site for the Génesis Calasanz group at Colegio Cristóbal Colón, with online registration backed by Supabase. The cover page is the heart of it: restrained, without color overload.',
    },
  },
  {
    id: 'aforo',
    title: 'Aforo',
    year: '2026',
    status: 'WIP',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://aforo-propuesta.vercel.app',
    image: '/img/screenshot-aforo.jpg',
    summary: {
      es: 'Propuesta de app para una entrenadora: quién va hoy, quién pagó y quién regresa el mes que viene.',
      en: 'App proposal for a fitness trainer: who is coming today, who paid and who returns next month.',
    },
    description: {
      es: 'Cuatro pantallas de celular navegables con datos de ejemplo: el día de hoy con la meta del mes, el directorio de alumnas con filtros por adeudo, el pase de lista donde se marca asistió, faltó, canceló o reagendó, y las métricas del negocio.',
      en: 'Four navigable phone screens on sample data: today with the monthly goal, the student directory filtered by outstanding payments, the roll call marking attended, missed, cancelled or rescheduled, and the business metrics.',
    },
  },
  {
    id: 'tandem',
    title: 'Tándem · Portafolio de servicios',
    year: '2026',
    status: 'LIVE',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    link: 'https://portafolio-tech-navy.vercel.app',
    summary: {
      es: 'Sitio de estudio con cotizador propio y catálogo de casos, derivado de un solo archivo de datos.',
      en: 'Studio site with its own quote builder and case catalog, derived from a single data file.',
    },
    description: {
      es: 'Portafolio de servicios tecnológicos bajo marca de estudio: seis páginas sin frameworks donde la portada, el índice, el muro de casos y los contadores se derivan de un único archivo de datos, más un cotizador por pasos que termina en WhatsApp.',
      en: 'Tech services portfolio under a studio brand: six framework-free pages where the cover, index, case wall and counters are all derived from a single data file, plus a step-by-step quote builder that ends in WhatsApp.',
    },
  },
  {
    id: 'l4m',
    title: 'Looking4More',
    year: '2024',
    status: 'LIVE',
    category: 'producto',
    tech: ['TypeScript', 'React Native', 'Expo'],
    image: '/img/screenshot-l4m.png',
    summary: {
      es: 'App móvil de exploración y descubrimiento de contenido, con autenticación y feed dinámico.',
      en: 'Mobile app for content exploration and discovery, with authentication and a dynamic feed.',
    },
    description: {
      es: 'Aplicación móvil desarrollada con React Native y TypeScript. Plataforma de exploración y descubrimiento de contenido con autenticación propia, perfiles de usuario y feed dinámico.',
      en: 'Mobile app built with React Native and TypeScript. Content exploration and discovery platform with custom authentication, user profiles and a dynamic feed.',
    },
  },
  {
    id: 'atomoss',
    title: 'AtomOss',
    year: '2024',
    status: 'LIVE',
    category: 'producto',
    tech: ['React Native', 'Expo', 'TypeScript'],
    image: '/img/screenshot-atomoss.png',
    summary: {
      es: 'Plataforma de comunidad en móvil: noticias, perfiles y contenido multimedia, en producción.',
      en: 'Mobile community platform: news, profiles and multimedia content, shipped to production.',
    },
    description: {
      es: 'Aplicación móvil construida con React Native y Expo. Plataforma de comunidad con sistema de noticias, perfiles de usuario y contenido multimedia, publicada en producción.',
      en: 'Mobile app built with React Native and Expo. Community platform with a news system, user profiles and multimedia content, shipped to production.',
    },
  },
  {
    id: 'queabierto',
    title: '¿Qué está abierto?',
    year: '2024',
    status: 'WIP',
    category: 'producto',
    tech: ['TypeScript', 'React Native', 'Expo', 'PostgreSQL'],
    link: 'https://github.com/Darw1ng/Que-esta-abierto-a-esta-hora',
    image: '/img/screenshot-queabierto.png',
    summary: {
      es: 'Qué negocios están abiertos ahora mismo, con lógica de horarios dinámica.',
      en: 'Which businesses are open right now, with dynamic opening-hours logic.',
    },
    description: {
      es: 'Aplicación móvil que muestra en tiempo real qué negocios y lugares están abiertos a la hora actual. Backend con PostgreSQL y lógica de horarios dinámica.',
      en: 'Mobile app showing in real time which businesses and places are open at the current hour. PostgreSQL backend with dynamic opening-hours logic.',
    },
  },
  {
    id: 'fartofar',
    title: 'FarToFar',
    year: '2022',
    status: 'LIVE',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    image: '/img/screenshot-fartofar.jpg',
    summary: {
      es: 'Uno de mis primeros sitios. Marca el inicio del camino.',
      en: 'One of my first websites. It marks the start of the path.',
    },
    description: {
      es: 'Sitio web personal construido con HTML, CSS, JavaScript y PHP. Lo dejo aquí a propósito: es de donde salió todo lo demás.',
      en: 'Personal website built with HTML, CSS, JavaScript and PHP. It stays here on purpose: it is where everything else came from.',
    },
  },
]

export const featured = projects.filter((p) => p.featured)
export const rest = projects.filter((p) => !p.featured)
