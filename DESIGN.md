---
name: Sotelo Digital Design System
description: Minimalist, high-impact creative agency design system with vibrant red, deep black, and pure white
colors:
  primary: "#E50914"
  primary-hover: "#FF1A24"
  primary-dark: "#B50912"
  neutral-bg: "#FFFFFF"
  neutral-surface: "#F5F5F4"
  neutral-surface-dark: "#171717"
  neutral-border: "#E7E7E7"
  neutral-border-dark: "#282828"
  text-title: "#101010"
  text-body: "#374151"
  text-muted: "#737373"
  pure-black: "#101010"
  pure-white: "#FFFFFF"
  whatsapp-green: "#25D366"
  backdrop-overlay: "rgba(0, 0, 0, 0.75)"
typography:
  display:
    fontFamily: "'Manrope', 'Outfit', sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.065em"
  headline:
    fontFamily: "'Manrope', 'Outfit', sans-serif"
    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  title:
    fontFamily: "'Manrope', 'Outfit', sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1.25
  lead:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 500
  body:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'DM Sans', sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  xs: "6px"
  sm: "8px"
  md: "14px"
  lg: "20px"
  full: "9999px"
spacing:
  xs: "6px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-title}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-dark:
    backgroundColor: "{colors.pure-black}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  card-default:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.lg}"
    padding: "36px 30px"
---

## Overview

El sistema de diseño de **Sotelo Digital** está concebido para una agencia creativa de diseño web y soporte continuo. Su principio rector es la **autoridad visual de alto contraste y la comunicación directa**: eliminar la sobrecarga cognitiva y los clichés decorativos de inteligencia artificial, priorizando la tipografía audaz, la geometría isométrica y una paleta sobria de alto impacto (rojo vibrante `#E50914`, blanco puro y negro carbón).

* **Metáfora Central (Creative North Star):** *The High-Precision Swiss Atelier* — Precisión geométrica, rigor tipográfico, espacios en blanco respirables y acentos enérgicos de rojo industrial.
* **Modo Predominante:** **Persuade** en la superficie pública (conversión, autoridad y demostración tangible de trabajo), combinado con claridad **Operate** en el cotizador interactivo y tablas de planes de soporte.

---

## Colors

La paleta es deliberadamente austera y rigurosa. No se admiten colores secundarios ajenos a la triada corporativa (rojo, blanco, negro).

| Rol de Color | Token | Valor Hex | Uso Principal |
|---|---|---|---|
| **Primary** | `primary` | `#E50914` | Botones de acción principal (CTA), isotipo, acentos de enlace, tags destacados. |
| **Primary Hover** | `primary-hover` | `#FF1A24` | Estado hover de interactivos y botones de llamada a la acción. |
| **Primary Dark** | `primary-dark` | `#B30009` | Estado pressed/active y bordes de acento de alto contraste. |
| **Neutral Canvas** | `neutral-bg` | `#FFFFFF` | Fondo principal en modo claro, fondo de tarjetas y componentes estándar. |
| **Neutral Surface** | `neutral-surface`| `#F8F9FA` | Fondos de secciones alternas, chips de tecnología y franjas de apoyo. |
| **Deep Black** | `pure-black` | `#0A0A0A` | Textos principales, cabecera de franjas métricas, card Empresarial y footer. |
| **Text Body** | `text-body` | `#374151` | Párrafos informativos con alto ratio de contraste legible (> 7:1 WCAG AAA). |
| **Text Muted** | `text-muted` | `#6B7280` | Subtítulos secundarios, notas al pie y descripciones auxiliares. |
| **Border Neutral**| `neutral-border`| `#E9ECEF` | Delimitadores de tarjetas, contenedores e inputs sin estridencias. |

---

## Typography

Se utiliza una escala tipográfica con saltos jerárquicos de al menos 1.25× para evitar jerarquías planas y asegurar una lectura sin esfuerzo.

* **Display (`Outfit` 900):** `clamp(2.5rem, 5vw, 4.2rem)` — Exclusivo para el titular del Hero (`h1`).
* **Headline (`Outfit` 800):** `clamp(1.8rem, 3.5vw, 2.8rem)` — Títulos de sección (`h2`).
* **Title (`Outfit` 800):** `1.4rem` — Títulos de tarjetas de servicios, planes de precios y proyectos (`h3`).
* **Subtitle / Lead (`Outfit` 600):** `1.15rem` — Subtítulos explicativos debajo de títulos de sección.
* **Body Text (`Plus Jakarta Sans` 400/500):** `1.05rem` con `line-height: 1.65` — Párrafos y descripciones de servicios.
* **Label / Eyebrow (`Outfit` 700):** `0.85rem` con `letter-spacing: 0.1em` en mayúsculas — Categorías de proyecto y tags de sección.

---

## Layout

* **Contenedor Máximo:** `1240px` centrado con padding horizontal de `24px` (`32px` en pantallas grandes).
* **Grid de Servicios & Portafolio:** CSS Grid responsivo `repeat(auto-fit, minmax(280px, 1fr))` para adaptación fluida sin saltos bruscos.
* **Grid de Planes de Suscripción:** 3 columnas en desktop, colapsable a 1 columna en pantallas menores a `1024px`.
* **Densidad:** Amplios espaciados verticales (`110px` a `120px` entre secciones principales) para permitir que el contenido respire y proyecte estatus premium.

---

## Elevation & Depth

El sistema evita halos cromáticos irreales y sombras con resplandor falso (*fake glowing halos*). Emplea elevación natural basada en física:

* **Sombra Base (`shadow-sm`):** `0 2px 8px rgba(0, 0, 0, 0.04)` — Elementos estáticos sutiles (badges, inputs).
* **Sombra de Superficie (`shadow-md`):** `0 10px 30px rgba(0, 0, 0, 0.06)` — Tarjetas en reposo y cotizador.
* **Sombra Elevada (`shadow-lg`):** `0 20px 45px rgba(0, 0, 0, 0.1)` — Tarjetas en estado hover y modales emergentes.
* **Sombra de Acción Primaria (`shadow-red`):** `0 10px 24px rgba(229, 9, 20, 0.25)` — Botones CTA principales para destacar sobre fondo blanco o negro.

---

## Shapes

* **Forma Base:** Bordes rectos y limpios con radios controlados:
  * `rounded-sm` (`8px`): Botones, inputs de formulario y chips de tecnología.
  * `rounded-md` (`14px`): Cajas de formulario, banners y tarjetas secundarias.
  * `rounded-lg` (`20px`): Tarjetas principales de servicios, portafolio y modales.
  * `rounded-full` (`9999px`): Badges, pastillas de categoría y botón flotante de WhatsApp.
* **Geometría Isométrica:** Cubos y hexágonos en alambre tricolor con ángulo de proyección de 30° como seña de identidad gráfica de la marca.

---

## Components

### Botón Primario (`.btn-primary`)
* Fondo rojo `#E50914`, texto blanco puro, radio `8px`, tipografía `Outfit 700`.
* Transición de elevación: `transform: translateY(-2px)` con sombra acentuada al hover.

### Tarjeta de Servicio (`.service-card`)
* Borde neutral `1px solid #E9ECEF` con línea superior indicadora en reposo. Al hover, elevación de `8px` y acento superior en rojo primario.

### Tarjeta de Precios (`.pricing-card`)
* Estructura vertical clara: Título del Plan, Horas/Mes, Precio numérico grande (`2.8rem`), checklist con checks vectoriales y botón inferior.
* **Plan Profesional:** Borde destacado en rojo corporativo `#E50914` y badge superior *"⭐ Más Recomendado"*.
* **Plan Empresarial:** Tarjeta negra sólida `#0A0A0A` con acentos en blanco y rojo para diferenciar el nivel VIP.

### Cotizador Exprés
* Opciones interactivas con estados activos claramente identificados por borde rojo y fondo suave `rgba(229, 9, 20, 0.08)`.
* Generación instantánea de mensaje a WhatsApp sin campos superfluos.

---

## Do's and Don'ts

### ✅ Do's (Prácticas Obligatorias)
* **Usar textos en color sólido de alto contraste:** Mantener los títulos en `#0A0A0A` (en fondos claros) o `#FFFFFF` (en fondos oscuros) con acentos de palabras clave en `#E50914`.
* **Mantener la jerarquía de encabezados intacta:** Todo documento debe seguir `h1` &rarr; `h2` &rarr; `h3` sin saltarse niveles para respetar la accesibilidad.
* **Preservar el isotipo tricolor:** Mantener siempre la fidelidad de trazo del cubo isométrico vectorizado.
* **Probar contrastes WCAG:** Todo texto debe superar holgadamente la relación 4.5:1 (AA) y 7:1 (AAA) sobre su fondo respectivo.

### ❌ Don'ts (Prácticas Prohibidas)
* **No usar gradientes de texto de IA:** Prohibido el uso de `background-clip: text` con gradientes arcoíris o púrpuras.
* **No usar bordes laterales gruesos en tarjetas:** Evitar el cliché de `border-left: 6px solid` en tarjetas que delata plantillas baratas.
* **No usar halos de luz cromáticos o neón irreal:** Las sombras deben ser de oclusión neutra o sombras directas de botón, nunca halos dispersos de 40px desenfocados.
* **No simular estados con luces intermitentes falsas:** Evitar puntos pulsantes infinitos en contenido que no es una transmisión en vivo real.
* **No anidar tarjetas dentro de otras tarjetas:** Usar espaciado, divisores y tipografía para jerarquizar información sin multiplicar capas de contenedores.
