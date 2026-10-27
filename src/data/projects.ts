/**
 * SOTELO DIGITAL — Portafolio de Proyectos Web
 * Metadata vinculada directamente a tus repositorios oficiales de GitHub y demos en vivo.
 * Usuario GitHub: juliansotelo4444-code
 */

export interface ProjectItem {
  id: string;
  title: string;
  shortTitle: string;
  category: 'ecommerce' | 'dashboard' | 'landing';
  categoryLabel: string;
  badge: string;
  description: string;
  client: string;
  timeline: string;
  metric: string;
  image: string;
  stack: string[];
  results: string[];
  liveUrl?: string;
  repoUrl?: string;
  isExternalDemo?: boolean;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'mixpoint',
    title: 'Mix Point - E-Commerce de Alimentos Naturales',
    shortTitle: 'Mix Point Ventas',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce / Tienda Online',
    badge: '+180% Pedidos Online',
    description: 'Plataforma web de comercio electrónico y distribución especializada en frutos secos y alimentos naturales. Venta mayorista y minorista con catálogo interactivo y checkout ágil.',
    client: 'Mix Point Alimentos Naturales',
    timeline: '18 Días',
    metric: '+180% Pedidos | 225+ Productos',
    image: 'assets/images/mixpoint-mockup.jpg',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vercel'],
    results: [
      'Segmentación ágil para pedidos mayoristas y minoristas con listas de precios dinámicas.',
      'Catálogo interactivo con filtros instantáneos y búsqueda por categorías en tiempo real.',
      'Puntuación superior a 95 en Google Lighthouse y checkout directo a WhatsApp.'
    ],
    liveUrl: 'https://mix-point.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/Mix.point',
    isExternalDemo: true
  },
  {
    id: 'mixpoint-gestion',
    title: 'Mix Point Gestión - Sistema ERP & Asistencia por Voz',
    shortTitle: 'Mix Point ERP',
    category: 'dashboard',
    categoryLabel: 'Gestor de Datos / ERP',
    badge: 'ERP con IA & Voz',
    description: 'Sistema empresarial integral para control de inventario en tiempo real, trazabilidad de stock, facturación y asistencia por comandos de voz para almacén.',
    client: 'Mix Point Logística',
    timeline: '24 Días',
    metric: 'Control de Stock en Tiempo Real',
    image: 'assets/images/mixpoint-gestion.jpg',
    stack: ['React', 'TypeScript', 'PostgreSQL', 'API REST Node.js', 'Capacitor Android'],
    results: [
      'Control centralizado de inventario para depósito central y puntos de venta.',
      'Módulo de asistencia por voz con IA para agilizar el picking y despacho de mercadería.',
      'Trazabilidad total de operaciones de compra, venta, movimientos y reportes ejecutivos.'
    ],
    liveUrl: 'https://base-front-mixpoint.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/base-front-mixpoint',
    isExternalDemo: true
  },
  {
    id: 'vertical-global',
    title: 'Vertical Global - Ascensores & Mantenimiento',
    shortTitle: 'Vertical Global',
    category: 'landing',
    categoryLabel: 'Sitio Web Corporativo',
    badge: 'Elevación & Servicios',
    description: 'Página web corporativa para Vertical Global, especializada en instalación, modernización y mantenimiento integral de ascensores y sistemas de elevación.',
    client: 'Vertical Global',
    timeline: '14 Días',
    metric: 'Presencia Digital Líder',
    image: 'assets/images/dashboard-mockup.jpg',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    results: [
      'Presentación técnica de servicios de ascensores y planes de abono mensual.',
      'Canal de contacto directo para urgencias técnicas y atención 24/7.',
      'Despliegue de alto rendimiento en Vercel con carga instantánea.'
    ],
    liveUrl: 'https://vertical-global.vercel.app',
    repoUrl: 'https://github.com/juliansotelo4444-code/vertical-global-',
    isExternalDemo: true
  },
  {
    id: 'sotelo-propiedades',
    title: 'Sotelo Propiedades - Portal Inmobiliario Full-Stack',
    shortTitle: 'Sotelo Propiedades',
    category: 'landing',
    categoryLabel: 'Plataforma Inmobiliaria',
    badge: 'Full-Stack JWT',
    description: 'Portal inmobiliario moderno desarrollado con React + Vite y backend REST. Catálogo interactivo de propiedades en venta y alquiler con filtros y panel de administración.',
    client: 'Sotelo Propiedades',
    timeline: '15 Días',
    metric: 'Catálogo + Panel Admin',
    image: 'assets/images/realestate-mockup.jpg',
    stack: ['React', 'Vite', 'Node.js', 'Express', 'JWT', 'REST API'],
    results: [
      'Filtrado multicriterio por tipo, estado, operación, moneda y rango de precio.',
      'Panel privado para publicar, editar y administrar inmuebles con autenticación JWT.',
      'Diseño responsive adaptado de 320px a 2000px con paleta institucional de alto impacto.'
    ],
    repoUrl: 'https://github.com/juliansotelo4444-code/sotelo-propiedades-frontend'
  },
  {
    id: 'servicios-oeste',
    title: 'Servicios Oeste SPI - Soluciones Industriales',
    shortTitle: 'Servicios Oeste SPI',
    category: 'landing',
    categoryLabel: 'Sitio Web Corporativo',
    badge: 'Sector Industrial GBA',
    description: 'Plataforma web para empresa de obras, mantenimiento de tinglados y pisos industriales de alta resistencia en Zona Oeste GBA con galería de obras.',
    client: 'Servicios Oeste SPI',
    timeline: '14 Días',
    metric: 'Líder Zona Oeste',
    image: 'assets/images/servicios-oeste-mockup.jpg',
    stack: ['React 19', 'Vite', 'CSS Modular', 'WhatsApp API'],
    results: [
      'Galería fotográfica de obras y procesos de demarcación y aplicación de resina epoxi.',
      'Secciones estratégicas de habilitaciones, equipamiento y clientes industriales.',
      'Botón de contacto flotante directo con el equipo técnico comercial.'
    ],
    repoUrl: 'https://github.com/juliansotelo4444-code/servicios-oeste-spi.git'
  },
  {
    id: 'yeny',
    title: 'Yeny - Masoterapia & Bienestar Ituzaingó',
    shortTitle: 'Yeny Bienestar',
    category: 'landing',
    categoryLabel: 'Landing Page de Servicios',
    badge: 'Reserva Directa WhatsApp',
    description: 'Sitio web moderno y relajante para masoterapia profesional en Ituzaingó. Presentación estética de terapias manuales y reserva directa por WhatsApp.',
    client: 'Yeny Masoterapia',
    timeline: '10 Días',
    metric: 'Reserva en 1 Clic',
    image: 'assets/images/yeny-mockup.jpg',
    stack: ['React 19', 'Framer Motion', 'Lucide React', 'Vite', 'CSS Modular'],
    results: [
      'Diseño visual estético y minimalista con microanimaciones fluidas.',
      'Catálogo claro de servicios: masajes descontracturantes, relajantes y piedras calientes.',
      'Enlace directo a agenda por WhatsApp optimizado para conversión en móviles.'
    ],
    repoUrl: 'https://github.com/juliansotelo4444-code/masaje-yeny.git'
  },
  {
    id: 'cunadas-chic',
    title: 'Cuñadas Chic - Gestión de Fardos & Vintage',
    shortTitle: 'Cuñadas Chic',
    category: 'dashboard',
    categoryLabel: 'Gestor de Datos / Stock',
    badge: 'Punto de Venta & Stock',
    description: 'Sistema web integral para administración de negocio de fardos de ropa vintage: control de costos por fardo, etiquetado de prendas con código de barras y mostrador de ventas.',
    client: 'Cuñadas Chic',
    timeline: '12 Días',
    metric: 'Control de Costos & Ventas',
    image: 'assets/images/ecommerce-mockup.jpg',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'SQLite', 'Charts.js'],
    results: [
      'Control de fardos, fletes y cálculo de costo neto por prenda.',
      'Módulo mostrador para cobrar, señas y tickets de compra.',
      'Directorio de clientas con enlace directo a WhatsApp e Instagram.'
    ],
    repoUrl: 'https://github.com/juliansotelo4444-code/cu-adas.chic.git'
  }
];

export const PORTFOLIO_MAP: Record<string, ProjectItem> = PORTFOLIO_PROJECTS.reduce(
  (acc, proj) => {
    acc[proj.id] = proj;
    return acc;
  },
  {} as Record<string, ProjectItem>
);
