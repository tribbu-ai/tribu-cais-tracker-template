# 🏁 Tribu CAIs Tracker — tu plantilla del taller

Tu mini-web del **ranking de CAIs** (Créditos de IA Eficiente) del programa Le Mans.
Web estática (HTML + JS) que lee de una Supabase compartida. **Sin Node, sin instalar nada.**

> Esta es la plantilla de partida del taller. La copias a tu cuenta,
> y en el taller le pides a Claude que **construya el ranking** y la hagas tuya.

---

## Antes del taller

1. **Cópiala a tu cuenta**: pulsa **"Use this template" → "Create a new repository"** (arriba en GitHub).
   Te crea una copia en tu cuenta. No necesitas Git ni terminal.
2. Abre la carpeta del proyecto en **Claude Code**.

Eso es todo. Lo demás lo hacemos juntos en el taller.

## En el taller

- Verás cómo la skill `/summarize-meeting` saca un brief de la reunión `meeting-input.md`. De ese brief sale **qué hay que construir**.
- **Calentamiento (5 min):** le pedirás a **Claude** que complete `app.js` para pintar el ranking (lee de Supabase, ya cableado). Es el "hola mundo" del taller.
- **El grueso:** entenderás el repo con Claude, **planificarás una funcionalidad nueva** (filtro, podio, detalle por proyecto, indicador de proyecto zombie…) y la **implementarás**.
- Harás **commit a GitHub** y la **publicarás** en Vercel → tu URL pública.
- La harás **tuya**: el `index.html` viene **sin estilos a propósito** (un lienzo en blanco). Dale el diseño que quieras con Claude — prueba la skill `/frontend-design`. Que no se parezca a la del de al lado.

> Sigue el guion paso a paso en `docs/flujo-vibe-coding.md`.

## Qué hay en este repo

| Archivo | Qué es |
|---|---|
| `index.html` | La página: estructura desnuda (**sin CSS**) + tabla vacía. El diseño lo pones tú. |
| `app.js` | **El calentamiento**: completar `pintarRanking()` con Claude. La conexión a Supabase ya está. |
| `datos.json` | Copia local de los datos (fallback si Supabase falla). |
| `.env.example` | Las credenciales de la Supabase compartida (públicas por diseño). |
| `meeting-input.md` | La reunión de la que sale el brief (input de `/summarize-meeting`). |
| `docs/flujo-vibe-coding.md` | **El guion del taller**: entender → planificar → implementar → commit → deploy. |
| `docs/ideas.md` | Menú de funcionalidades que puedes desarrollar (con dificultad). |
| `docs/schema.md` | Cómo es la base de datos. |
| `docs/deploy.md` | Cómo publicar en Vercel (paso a paso). |
| `CLAUDE.md` | Contexto del proyecto para Claude (lo lee él solo). |

## Después del taller

En tu 1:1 de seguimiento: amplías tu web o la apuntas a **tus propios datos** (campañas, tickets, leads…).
Es tu primer "proyecto del mes". Ya está empezado.
