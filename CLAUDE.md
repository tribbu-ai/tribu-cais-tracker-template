# tribu-cais-tracker — Mini-web del ranking de CAIs

## Qué es
Web que muestra el **ranking de CAIs (Créditos de IA Eficiente)** por persona del programa Le Mans de Tribbu. Se construye en el taller como ejercicio de vibe coding. Cada Le Mans parte de esta plantilla y la hace suya.

## Stack (deliberadamente simple, SIN build)
- **HTML + JavaScript plano.** Sin frameworks, sin Node, sin paso de build.
- **Supabase** como base de datos, leída desde el navegador con el **cliente por CDN** (`<script>`).
- **Vercel** para publicar (sirve los archivos estáticos tal cual, cero configuración).

## Archivos
- `index.html` — la página: estructura desnuda **sin CSS** (lienzo en blanco a propósito; el diseño lo pone el alumno) + carga del cliente Supabase por CDN.
- `app.js` — **lo que se completa en el taller**: conecta a Supabase y pinta el ranking. Trae un placeholder con `// TODO`.
- `datos.json` — datos locales que la web usa cuando `FUENTE = "json"` (fallback de Supabase, o tu volcado de Notion). Formato: array de `{ "nombre": str, "departamento": str, "cais_totales": number }`, ordenado de mayor a menor.
- `.env.example` — dónde están las credenciales de la Supabase compartida (URL + publishable key).
- `meeting-input.md` — la reunión de la que sale el brief (input de la skill `/summarize-meeting`).
- `docs/flujo-vibe-coding.md` — el guion del taller paso a paso (entender → planificar → implementar → commit → deploy).
- `docs/ideas.md` — menú de funcionalidades a desarrollar, con dificultad.
- `docs/schema.md` — cómo es la base de datos.
- `docs/deploy.md` — cómo publicar en Vercel.
- `docs/notion-a-datos.md` — cómo volcar TU Notion a `datos.json` con Claude y ver tus datos (modo estático).
- `.claude/skills/` — **skills que vienen con la plantilla** (Claude las carga solo al abrir el repo; te las llevas para usarlas en tus propios proyectos):
  - `summarize-meeting` — convierte una reunión en un brief accionable. `/summarize-meeting @meeting-input.md`.
  - `planifica` — convierte una idea difusa en una mini-spec accionable antes de construir. `/planifica`.
  - `frontend-design` — diseño visual con carácter para una página o interfaz (skill oficial de Anthropic). `/frontend-design`.
  - `revisa-seguridad` — busca vulnerabilidades reales en el código antes de publicar (skill oficial de Anthropic). `/revisa-seguridad`.
  - `crear-skill` — meta-skill: convierte algo que repites en una skill propia. `/crear-skill`.
  - `consulta-notion` — busca en el Notion del equipo (p.ej. el Catálogo de Skills); solo lectura. `/consulta-notion`.
  - `contexto-tribbu` — contexto de empresa (CAE/CAI, niveles Le Mans, vocabulario). Pasiva: Claude la consulta sola cuando hablas de Tribbu (no sale en el menú `/`).
- `.mcp.json` — declara el **MCP de Notion** (conector remoto). Al abrir el repo, Claude te preguntará si confías en él; di que sí y conéctate con `/mcp` (entras con tu propia cuenta de Notion).
- `.claude/settings.json` — deja el MCP de Notion en **solo-lectura**: Claude puede leer/buscar en tu Notion, pero NO crear, modificar ni borrar nada (red de seguridad). No lo toques.

## Cómo verla en local (opcional, NO hace falta para el taller)
No hay servidor que levantar. Para verla antes de publicar:
- Ábrela con un servidor estático simple (p. ej. la extensión "Live Server" de VS Code), **no** con doble clic (el `file://` bloquea el `fetch`).
- O simplemente súbela a Vercel y mírala online.

## Lo que se construye en el taller

**Calentamiento (rápido):** completar `app.js` (función `pintarRanking`) para que:
- Lea la vista `cais_por_persona` de Supabase (ver `docs/schema.md`). La conexión ya está cableada.
- Pinte una tabla con cada persona y sus CAIs, **ordenada de mayor a menor**.

Es el "hola mundo" para coger soltura con el ciclo (pedir → ver el cambio en la web).

**El grueso del taller:** entender el repo con Claude, **planificar una funcionalidad nueva** y construirla — luego commit + deploy. Ver el guion en `docs/flujo-vibe-coding.md` y el menú de ideas en `docs/ideas.md` (filtro por departamento, podio, detalle de proyectos por persona, indicador de proyecto zombie, búsqueda, tu propio diseño…).

## Reglas para Claude
- **Las credenciales de Supabase (URL + publishable key) son públicas por diseño** — van en el código sin problema. La base de datos está protegida con RLS de solo lectura. **NUNCA** uses ni pidas la `service_role` key (esa es secreta y no pinta nada en una web).
- Si Supabase devuelve un error, **NO inventes datos** — muéstralo en pantalla con un mensaje claro.
- **Volcado Notion → estático**: si el alumno pide leer su Notion y mostrarlo en su web, lee su base de datos de CAIs (vía el MCP de Notion, solo lectura), **sobrescribe `datos.json`** con el formato `{ "nombre", "departamento", "cais_totales" }` ordenado desc, y recuérdale poner `FUENTE = "json"` en `app.js`. No montes backend ni integración para esto — es el modo estático (ver `docs/notion-a-datos.md`).
- Mantén el stack **estático**: nada de añadir Next, React, ni `npm install`. Si hace falta una librería, cárgala por CDN (`<script>`), no por npm.
- Mensajes de commit en español: `feat:`, `fix:`, `docs:`.
- No commitees secretos. La publishable key no es secreto; la service_role sí (y no se usa aquí).

## Después del taller
En la 1:1: ampliar con una funcionalidad nueva, o apuntar la web a **tus propios datos** (tus campañas, tickets, leads…). Es tu primer "proyecto del mes".
