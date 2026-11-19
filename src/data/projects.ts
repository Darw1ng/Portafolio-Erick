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
      { es: 'Extra del sistema de rastreo de APA (antes Xaman-Ek), en laboratorio aparte y con 20 pruebas en verde.', en: 'An add-on to APA’s tracking system (formerly Xaman-Ek), kept in a separate lab with 20 green tests.' },
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
    id: 'enlazamed',
    title: 'Enlazamed · Rastreo de equipo médico',
    year: '2026',
    status: 'LIVE',
    category: 'salud',
    tech: ['Bun', 'TypeScript', 'React', 'Leaflet', 'MQTT', 'mTLS', 'SQLite', 'Flutter', 'BLE', 'DigitalOcean'],
    link: 'https://enlazamed.com',
    summary: {
      es: 'Plataforma multicliente para saber en qué cuarto está cada equipo médico, en tiempo real, con gateways y beacons BLE.',
      en: 'Multi-tenant platform to know which room every piece of medical equipment is in, in real time, with BLE gateways and beacons.',
    },
    description: {
      es: 'Localización en interiores para equipo médico prestado a hospitales. Cada cliente tiene su panel —hospitales, pisos y cuartos— y hay un panel maestro, soporte con tickets y servidores locales opcionales dentro del hospital. Todo compila a un solo ejecutable que trae su propio broker MQTT, motor de ubicación, alertas y base de datos. El personal tiene app de iPhone con avisos y configuración de equipos por Bluetooth.',
      en: 'Indoor positioning for medical equipment loaned to hospitals. Each client gets its own panel —hospitals, floors and rooms— plus a master panel, ticketed support and optional on-site servers inside the hospital. Everything compiles to a single executable that ships its own MQTT broker, positioning engine, alerts and database. Staff get an iPhone app with notifications and Bluetooth device setup.',
    },
    highlights: [
      { es: 'PKI propia: certificados X.509 armados en DER a mano; cada gateway recibe el suyo por MQTT y se reconecta por mTLS. Un impostor con la contraseña compartida queda fuera.', en: 'In-house PKI: X.509 certificates built in DER by hand; every gateway receives its own over MQTT and reconnects over mTLS. An impostor with the shared password stays out.' },
      { es: 'Los cuartos se trazan solos desde la imagen del plano (Otsu, chaflán, contorno de Moore y Douglas-Peucker) y el 3D se genera por pisos.', en: 'Rooms are traced automatically from the floor-plan image (Otsu, chamfer distance, Moore contour and Douglas-Peucker) and the 3D view is built per floor.' },
      { es: 'Configuración BLE remota a través del gateway para iPhone, que no tiene Web Bluetooth. 667 pruebas automáticas.', en: 'Remote BLE setup through the gateway for iPhone, which has no Web Bluetooth. 667 automated tests.' },
    ],
  },
  {
    id: 'apa',
    title: 'APA · Autobuses Palotal',
    year: '2026',
    status: 'WIP',
    category: 'rastreo',
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'PostGIS', 'RLS', 'React', 'Flutter', 'JT/T 808', 'GT06'],
    summary: {
      es: 'Rastreo en vivo del transporte urbano de Córdoba, Veracruz: el pasajero ve cuándo llega su camión y el dueño dónde va cada unidad.',
      en: 'Live tracking for urban transit in Córdoba, Veracruz: riders see when their bus arrives and the owner sees where every unit is.',
    },
    description: {
      es: 'Sistema completo para una empresa de autobuses con más de 50 años en Córdoba: app del pasajero con la llegada estimada por parada, app y panel del dueño con cada camión en el mapa, y publicidad propia dentro de la app. Los camiones reportan desde sus dashcams 4G a un receptor propio. Nació como Xaman-Ek y se convirtió en el sistema a la medida de APA. Desplegado en el servidor del cliente, en etapa de piloto.',
      en: 'A complete system for a bus company with over 50 years in Córdoba: a rider app with estimated arrival per stop, an owner app and panel with every bus on the map, and in-app advertising. Buses report from their 4G dashcams to a custom receiver. It started as Xaman-Ek and became APA’s tailor-made system. Deployed on the client’s server, in pilot stage.',
    },
    highlights: [
      { es: 'Receptor JT/T 808 escrito desde cero (enmarcado, escape, checksum, versiones 2013 y 2019) y validado byte a byte; GT06 y JT808 conviven en el mismo puerto.', en: 'JT/T 808 receiver written from scratch (framing, escaping, checksum, 2013 and 2019 headers) and validated byte by byte; GT06 and JT808 share the same port.' },
      { es: 'Varios operadores aislados en la propia base con seguridad por fila forzada; las pruebas se niegan a correr con un rol que pueda saltársela.', en: 'Several operators isolated inside the database with forced row-level security; the tests refuse to run under a role that could bypass it.' },
      { es: 'Llegada estimada que infiere el sentido del camión por su movimiento, y pruebas de mutantes en cada entrega sobre más de 2,500 pruebas.', en: 'Arrival estimates that infer the bus direction from its movement, and mutation testing on every release over more than 2,500 tests.' },
    ],
  },
  {
    id: 'hub',
    title: 'Hub de operación de clientes',
    year: '2026',
    status: 'LIVE',
    category: 'producto',
    tech: ['Express', 'TypeScript', 'PostgreSQL', 'React', 'Tailwind', 'PWA', 'Flutter', 'Stripe', 'Railway'],
    summary: {
      es: 'El tablero desde el que se opera cada sistema instalado en clientes: salud, tickets, respaldos, actualizaciones y cobro.',
      en: 'The dashboard that runs every system installed at client sites: health, tickets, backups, updates and billing.',
    },
    description: {
      es: 'Herramienta interna de la empresa: cada instalación reporta su latido y su salud, se atienden tickets, se entra por escritorio remoto, se guardan respaldos en la nube, se publican actualizaciones de los productos y se cobra el mantenimiento. Tiene web instalable con avisos push, app Android y un agente para Windows.',
      en: 'Internal company tool: every installation reports its heartbeat and health, tickets get handled, remote desktop is one click away, backups go to the cloud, product updates get published and maintenance gets billed. It has an installable web app with push notifications, an Android app and a Windows agent.',
    },
    highlights: [
      { es: 'Alta sola: los sistemas se registran la primera vez que tienen internet, con huella para no duplicarse.', en: 'Self-enrollment: systems register the first time they get internet, fingerprinted so they never duplicate.' },
      { es: 'La asistencia remota viaja en la respuesta del latido: diagnóstico, respaldo, reinicio o actualización verificada por sha256.', en: 'Remote assistance rides on the heartbeat response: diagnostics, backup, restart or an update verified by sha256.' },
      { es: 'Stripe sin SDK, firma S3 SigV4 propia y pases de Google Wallet firmados en el servidor.', en: 'Stripe without an SDK, in-house S3 SigV4 signing and Google Wallet passes signed on the server.' },
    ],
  },
  {
    id: 'pos',
    title: 'Punto de venta para abarrotes',
    year: '2026',
    status: 'WIP',
    category: 'producto',
    tech: ['Electron', 'Express', 'SQLite (WASM)', 'JavaScript', 'Web Serial', 'Ed25519', 'NSIS'],
    summary: {
      es: 'POS de escritorio con cajas en red, báscula, etiquetas con código de barras y actualizaciones firmadas.',
      en: 'Desktop POS with networked registers, scale, barcode labels and signed updates.',
    },
    description: {
      es: 'Punto de venta para tiendas de abarrotes: servidor local, cajas adicionales en la red y portal web para el celular. La variante para súper agrega báscula por puerto serial, toma de inventario, etiquetas EAN-13, UPC y Code 128, asistencia y rendimiento de cajeros.',
      en: 'Point of sale for grocery stores: local server, extra registers on the network and a web portal for phones. The supermarket variant adds a serial-port scale, stock taking, EAN-13, UPC and Code 128 labels, attendance and cashier performance.',
    },
    highlights: [
      { es: 'Banco de fallas propio: 824 escenarios —internet colgado, apagón a media venta, base dañada, disco de solo lectura— sin una venta perdida ni un folio con hueco.', en: 'In-house fault bench: 824 scenarios —hung internet, power cut mid-sale, damaged database, read-only disk— without a single lost sale or a gap in invoice numbers.' },
      { es: 'Actualizaciones firmadas con Ed25519, verificadas por tamaño y sha256, con dos espejos.', en: 'Updates signed with Ed25519, verified by size and sha256, with two mirrors.' },
      { es: 'Las etiquetas generadas se validaron leyéndolas con zxing: 36 de 36.', en: 'Generated labels were validated by reading them back with zxing: 36 out of 36.' },
    ],
  },
  {
    id: 'abonos',
    title: 'Abonos · Venta a crédito y cobranza',
    year: '2026',
    status: 'WIP',
    category: 'producto',
    tech: ['Express', 'SQLite', 'React', 'TypeScript', 'Tailwind', 'PWA', 'Cloudflare Workers'],
    summary: {
      es: 'Venta en abonos y cobranza en ruta para una mueblería, pensado para funcionar sin señal.',
      en: 'Installment sales and route collection for a furniture store, built to work without signal.',
    },
    description: {
      es: 'Rutas, vendedores, cobradores, semáforo de pago, nómina por quincena, camionetas, inventario, impresión térmica y exportación a Excel. El cobrador trabaja desde una web instalable que guarda los abonos aunque no haya señal, y la matriz y las sucursales se sincronizan entre sí.',
      en: 'Routes, sellers, collectors, payment traffic light, biweekly payroll, vans, inventory, thermal printing and Excel export. Collectors work from an installable web app that keeps payments even with no signal, and headquarters and branches sync with each other.',
    },
    highlights: [
      { es: 'Sincronización offline-first entre matriz y sucursal con clave de idempotencia por abono: nada se duplica.', en: 'Offline-first sync between headquarters and branch with an idempotency key per payment: nothing duplicates.' },
      { es: 'Importador desde los Excel reales del negocio y generador de XLSX propio, con fórmulas, sin librerías.', en: 'Importer from the business’s real spreadsheets and an in-house XLSX writer, with formulas, no libraries.' },
      { es: 'Fuzz de 985 peticiones sin un solo error 500.', en: 'A 985-request fuzz run without a single 500 error.' },
    ],
  },
  {
    id: 'gym',
    title: 'Gestión de gimnasios',
    year: '2026',
    status: 'WIP',
    category: 'producto',
    tech: ['Express', 'SQLite', 'React', 'Vite', 'C#', 'WebView2', 'Cloudflare', 'Google Wallet'],
    summary: {
      es: 'Socios, cobros, clases, alberca, inventario y control de acceso biométrico para un gimnasio con sucursales.',
      en: 'Members, billing, classes, pool, inventory and biometric access control for a multi-branch gym.',
    },
    description: {
      es: 'Sistema que se instala en la PC del gimnasio, con panel en la red local y acceso remoto. Cubre socios, cobros y cortes de caja, clases y nómina, alberca, inventario y control de acceso con terminales biométricas, más credencial en Google Wallet. Perfiles de dueño, administración, caja y recepción.',
      en: 'A system installed on the gym’s PC, with a local-network panel and remote access. It covers members, billing and cash closing, classes and payroll, pool, inventory and access control with biometric terminals, plus a Google Wallet membership card. Owner, admin, cashier and front-desk profiles.',
    },
    highlights: [
      { es: 'Un controlador por marca de terminal (Hikvision, Dahua, ZKTeco y genérico): la vigencia de cada socio se empuja según su plan y sucursal.', en: 'One driver per terminal brand (Hikvision, Dahua, ZKTeco and generic): each member’s validity is pushed according to plan and branch.' },
      { es: 'Permisos aplicados en el servidor: cada perfil recibe solo su vista, con avisos en vivo por SSE.', en: 'Permissions enforced on the server: each profile only receives its own view, with live notices over SSE.' },
      { es: 'Ventana nativa en C# con WebView2 en vez de Electron, y actualización de un clic con respaldo previo.', en: 'Native C# window with WebView2 instead of Electron, and one-click updates with a prior backup.' },
    ],
  },
  {
    id: 'elkon',
    title: 'ELKON Express · Bot de WhatsApp',
    year: '2026',
    status: 'WIP',
    category: 'ia',
    tech: ['Cloudflare Workers', 'D1', 'WhatsApp Cloud API', 'Workers AI', 'Whisper', 'Claude', 'TypeScript'],
    summary: {
      es: 'Un negocio entero manejado desde el chat: pedidos, comandas, fotos, notas de voz y resúmenes para el dueño.',
      en: 'A whole business run from the chat: requests, kitchen tickets, photos, voice notes and owner summaries.',
    },
    description: {
      es: 'Bot de WhatsApp para pymes —hoteles y restaurantes—: las solicitudes del huésped llegan al área que toca, las comandas a cocina, se leen fotos de comandas y hojas, se transcriben notas de voz, se levantan encuestas y el dueño recibe su resumen. Demo publicada y conectada a un número de prueba.',
      en: 'WhatsApp bot for small businesses —hotels and restaurants—: guest requests reach the right team, orders reach the kitchen, photos of tickets and sheets get read, voice notes get transcribed, surveys go out and the owner gets a summary. Demo published and connected to a test number.',
    },
    highlights: [
      { es: 'Fotos leídas por dos modelos cruzados: solo pasa lo que ambos coinciden, y todo se confirma con botones antes de registrarse.', en: 'Photos read by two cross-checked models: only what both agree on passes, and everything is confirmed with buttons before it is saved.' },
      { es: 'Pronóstico de demanda por día de la semana, quincenas y festivos, convertido en lista de compras por receta.', en: 'Demand forecast by weekday, paydays and holidays, turned into a shopping list per recipe.' },
      { es: 'Ventana de 24 h de WhatsApp resuelta con plantillas y cola; 291 comprobaciones automáticas.', en: 'WhatsApp’s 24-hour window handled with templates and a queue; 291 automated checks.' },
    ],
  },
  {
    id: 'tlaloc',
    title: 'El Ojo de Tláloc · NASA Space Apps 2026',
    year: '2026',
    status: 'LAB',
    category: 'ia',
    tech: ['Python', 'NumPy', 'FastAPI', 'Leaflet', 'Mapbox GL', 'NISAR', 'NASA POWER', 'Arduino'],
    link: 'https://darw1ng.github.io/El-Ojo-de-tlaloc/',
    summary: {
      es: 'Predictor estocástico de lluvia e inundación sobre Veracruz y Boca del Río, con humedad de suelo del radar NISAR.',
      en: 'Stochastic rain and flood predictor over Veracruz and Boca del Río, using soil moisture from the NISAR radar.',
    },
    description: {
      es: 'Proyecto para el reto Dancing with the SARs del NASA Space Apps Challenge 2026: una malla hexagonal sobre Veracruz que funde la humedad de suelo del radar NISAR con OpenStreetMap, NASA POWER y sondeos de un CanSat propio. Lideré al equipo de cinco y construí el backend y el modelo.',
      en: 'Built for the Dancing with the SARs challenge at NASA Space Apps 2026: a hexagonal grid over Veracruz that fuses NISAR soil moisture with OpenStreetMap, NASA POWER and soundings from our own CanSat. I led the five-person team and built the backend and the model.',
    },
    highlights: [
      { es: 'Campo gaussiano por Cholesky, AR(1), cadena de Markov calibrada, intensidad Weibull por cópula y asimilación EnKF.', en: 'Cholesky Gaussian field, AR(1), calibrated Markov chain, copula-coupled Weibull intensity and EnKF assimilation.' },
      { es: '200 miembros × 14 días × 221 celdas en 0.3 segundos, con 348 pruebas.', en: '200 members × 14 days × 221 cells in 0.3 seconds, with 348 tests.' },
      { es: 'Cada fuente declara su procedencia y sus sesgos; las cifras de escurrimiento son modeladas, no medidas.', en: 'Every source declares its provenance and biases; runoff figures are modeled, not measured.' },
    ],
  },
  {
    id: 'cotizador',
    title: 'Cotizador SitiRT',
    year: '2026',
    status: 'LIVE',
    category: 'web',
    tech: ['React', 'TypeScript', 'Vite', 'react-pdf', 'Tailwind', 'PHP', 'MySQL'],
    summary: {
      es: 'Cotizaciones con PDF listo para enviar e historial que se sincroniza entre equipos.',
      en: 'Quotes with a send-ready PDF and a history that syncs across devices.',
    },
    description: {
      es: 'Herramienta interna para armar cotizaciones: partidas, descuentos e impuestos, PDF real generado en el navegador, autoguardado e historial compartido. API en PHP con MySQL sobre el hosting de la empresa.',
      en: 'Internal tool to put quotes together: line items, discounts and taxes, a real PDF generated in the browser, autosave and shared history. PHP API with MySQL on the company hosting.',
    },
    highlights: [
      { es: 'Paginación para imprimir: busca el mínimo de hojas y, dentro de eso, la letra más grande que quepa.', en: 'Print pagination: it finds the fewest pages and, within that, the largest font that fits.' },
      { es: 'El descuento se aplica antes de impuestos, como en una factura fiscal.', en: 'Discounts apply before taxes, as on a tax invoice.' },
    ],
  },
  {
    id: 'traza',
    title: 'Traza · Rastreo de flotas',
    year: '2026',
    status: 'LAB',
    category: 'rastreo',
    tech: ['JavaScript', 'Three.js', 'Leaflet', 'MapLibre GL', 'OSRM', 'OpenFreeMap'],
    summary: {
      es: 'Prototipo de panel para transportistas: mapa, rutas reales, camiones en 3D y planificador.',
      en: 'Prototype dashboard for trucking companies: map, real routes, 3D trucks and a planner.',
    },
    description: {
      es: 'Prototipo funcional en un solo archivo: los trayectos salen de rutas reales calculadas con OSRM, el mapa usa teselas abiertas sin llaves de proveedor y cada unidad tiene su modelo 3D.',
      en: 'A working single-file prototype: trips come from real routes computed with OSRM, the map uses open tiles with no vendor keys and every unit has its own 3D model.',
    },
    highlights: [
      { es: '24 trayectos reales precalculados, con respaldo sin red.', en: '24 real trips precomputed, with an offline fallback.' },
      { es: 'Herramientas de QA propias que cazan desbordes en pantallas chicas.', en: 'In-house QA tools that catch overflow on small screens.' },
    ],
  },
  {
    id: 'djing',
    title: 'DJing Music',
    year: '2026',
    status: 'LAB',
    category: 'producto',
    tech: ['JavaScript', 'Web Audio', 'AudioWorklet', 'Web MIDI', 'Electron', 'Capacitor'],
    summary: {
      es: 'Mesa de mezclas de DJ para web, escritorio y Android, sin dependencias.',
      en: 'DJ mixing desk for web, desktop and Android, with zero dependencies.',
    },
    description: {
      es: 'Dos decks, loops, saltos, efectos, pre-escucha, micrófono y controlador MIDI, todo sobre Web Audio. La misma base corre en el navegador, en escritorio con Electron y en Android con Capacitor.',
      en: 'Two decks, loops, jumps, effects, cueing, microphone and MIDI controller, all on Web Audio. The same codebase runs in the browser, on desktop with Electron and on Android with Capacitor.',
    },
    highlights: [
      { es: 'Key lock con un AudioWorklet propio.', en: 'Key lock with an in-house AudioWorklet.' },
      { es: 'Detección de tono Camelot: marca qué canciones del historial combinan con la que suena.', en: 'Camelot key detection: it flags which tracks in the history mix with the one playing.' },
      { es: 'Cualquier control MIDI se asigna libremente.', en: 'Any MIDI control can be mapped freely.' },
    ],
  },
  {
    id: 'kura',
    title: 'Kura',
    year: '2026',
    status: 'LIVE',
    category: 'salud',
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Neon', 'Gemini', 'Vercel'],
    link: 'https://kura-salud.vercel.app',
    image: '/img/screenshot-kura.jpg',
    summary: {
      es: 'Telemedicina por suscripción para enfermedades crónicas, con Kiura, una asistente que acompaña al paciente entre consultas. 2.º lugar del Track 3 en InnovaHealth 2026.',
      en: 'Subscription telemedicine for chronic conditions, with Kiura, an assistant that walks with the patient between visits. 2nd place in Track 3 at InnovaHealth 2026.',
    },
    description: {
      es: 'Telemedicina por suscripción para personas con enfermedades crónicas —diabetes tipo 2, hipertensión, sobrepeso, dislipidemia, hipotiroidismo y enfermedad renal crónica—: consulta al mes con médico certificado, medicamento entregado en casa y acompañamiento diario entre consultas. Entre consulta y consulta el paciente habla con Kiura: le recuerda su medicamento, anota sus mediciones y, si una cifra sale de rango, le avisa a su médico al momento. El médico trabaja desde un panel que se actualiza solo y da la consulta por videollamada dentro de la misma plataforma. Proyecto de equipo para InnovaHealth 2026 (CNIB, Oaxaca), segundo lugar del Track 3; yo llevo el frontend y el alcance clínico.',
      en: 'Subscription telemedicine for people with chronic conditions —type 2 diabetes, hypertension, overweight, dyslipidemia, hypothyroidism and chronic kidney disease—: a monthly visit with a certified doctor, medication delivered at home and daily follow-up in between. Between visits the patient talks to Kiura: she reminds them of their medication, logs their readings and, when a reading falls out of range, alerts their doctor right away. The doctor works from a panel that updates on its own and runs the visit by video call inside the same platform. A team project for InnovaHealth 2026 (CNIB, Oaxaca), second place in Track 3; I own the frontend and the clinical scope.',
    },
    highlights: [
      { es: 'Reglas clínicas deterministas: una crisis hipertensiva abre la alerta y el guion al instante, sin esperar al modelo.', en: 'Deterministic clinical rules: a hypertensive crisis opens the alert and the script instantly, without waiting on the model.' },
      { es: 'Panel médico en vivo, videollamada con el expediente al lado y corrección auditable de mediciones mal dictadas.', en: 'Live doctor panel, video visits with the record side by side and auditable correction of misdictated readings.' },
      { es: 'Pantalla del piloto proyectable con métricas en vivo y un QR para que el jurado le escriba al paciente demo.', en: 'Projectable pilot screen with live metrics and a QR code so the jury can text the demo patient.' },
    ],
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
