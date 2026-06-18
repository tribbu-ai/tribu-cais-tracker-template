---
name: summarize-meeting
description: Convierte la transcripción de una reunión en un brief accionable — TL;DR, decisiones, acciones con dueño, y los proyectos que la reunión pide construir. Usar cuando el usuario pasa una transcripción/notas de reunión o dice "resúmeme esta reunión", "saca las acciones", "qué hay que hacer de esto".
argument-hint: "[@archivo-transcripción] (o pega el texto de la reunión)"
allowed-tools: Read
user-invocable: true
disable-model-invocation: false
owner: tribbu
---

# Resumir una reunión → brief accionable

Tu objetivo: leer la transcripción de una reunión y devolver un **brief que se entienda de un vistazo y se pueda accionar hoy** — no un acta larga. El lector típico es alguien ocupado que no estuvo en la reunión (o estuvo y no tomó notas) y necesita saber en 30 segundos qué se decidió, qué tiene que hacer él, y qué hay que construir.

> **Filosofía**: un buen brief responde tres preguntas — *¿qué se decidió?*, *¿qué tengo que hacer yo?*, *¿qué hay que construir?* Si una sección no ayuda a responder una de esas tres, sobra.

## Cuándo invocarte

- El usuario pasa un archivo con `@` (p.ej. `/summarize-meeting @meeting-input.md`).
- El usuario pega el texto de una reunión y pide resumen, acciones o "qué hay que hacer".
- Llegan notas de Granola/Gemini/Plaud y hay que convertirlas en algo accionable.

## Pasos

1. **Lee la transcripción** (del archivo en `$ARGUMENTS` o del texto pegado). Si no hay transcripción clara, pídela antes de inventar nada.

2. **Identifica la cabecera** a partir del contenido: fecha, participantes (nombres reales si aparecen), duración aproximada, y de qué iba en una frase. Si un dato no está, escribe "(no consta)" — **no lo inventes**.

3. **Destila, no transcribas.** Lee toda la reunión y quédate con la señal. Agrupa lo que se dijo en los bloques del formato de abajo. Une lo disperso (si un tema se tocó en tres momentos, va junto).

4. **Para las acciones, asigna dueño y, si se dijo, fecha.** Si la reunión no dice quién, marca **(a asignar)** — nunca pongas un dueño inventado. Cada acción empieza con un verbo ("Montar…", "Hablar con…", "Decidir…").

5. **Detecta lo que la reunión pide CONSTRUIR.** Esto es lo más valioso del brief: muchas reuniones terminan pidiendo, explícita o implícitamente, una herramienta/web/automatización. Sácalo a su propia sección "🔨 Para construir" con una frase de qué es y para quién. Si la reunión describe el qué con detalle (datos, vistas, dónde vive), recógelo — es el punto de partida para construirlo con IA acto seguido.

6. **Devuelve el brief en el formato de abajo.** Markdown limpio, emojis como anclas visuales (con mesura), nada de relleno.

## Formato del brief

```markdown
# 📋 Brief — <tema en una frase>

**Fecha**: <fecha o (no consta)> · **Duración**: <~min> · **Participantes**: <nombres>

## TL;DR
<2-3 frases. Lo que cualquiera necesita saber sin leer el resto.>

## ✅ Decisiones
- **<Decisión>** — <por qué / contexto en media línea>
- …

## 📌 Acciones
| Qué | Quién | Para cuándo |
|---|---|---|
| <verbo + objeto> | <nombre o (a asignar)> | <fecha o —> |

## 🔨 Para construir
> Lo que esta reunión pide que exista. El punto de partida para hacerlo con IA.
- **<Nombre del artefacto>** — <qué es + para quién>. <Detalle si lo hay: qué datos, qué vistas, dónde vive.>

## 💡 Insights / pendientes
- <Lo que sorprendió, lo que quedó abierto, lo que hay que decidir aún.>
```

## Criterios de "hecho" (un brief chulo)

- **El TL;DR se entiende sin leer nada más.** Si hay que leer el resto para entenderlo, reescríbelo.
- **Cada acción tiene dueño** (real o "(a asignar)") y empieza por un verbo.
- **La sección "🔨 Para construir" existe y es concreta** siempre que la reunión pida algo construible. Es el puente hacia "ahora lo montamos".
- **Cero invención.** Datos que no constan → "(no consta)". Dueños que no se dijeron → "(a asignar)".
- **Cabe en una pantalla.** Si te pasas, has transcrito en vez de destilar.

## Lo que NO hacer

- ❌ Transcribir la reunión entera o parafrasear turno por turno. Es un brief, no un acta.
- ❌ Inventar fechas, dueños o decisiones que no se dijeron.
- ❌ Omitir la sección "🔨 Para construir" cuando la reunión claramente pide una herramienta.
- ❌ Rellenar con secciones vacías ("No hubo insights relevantes"). Si una sección no aplica, quítala.
- ❌ Añadir tu opinión como si fuera de la reunión. Tus observaciones, si las hay, van en "💡 Insights" y marcadas como tuyas.

## Nota para el taller

Esta skill se demuestra en directo sobre `meeting-input.md` (la reunión sintética sobre CAIs). El brief que sale **debe aterrizar en la sección "🔨 Para construir"** con algo como *"Tribu CAIs Tracker — web que muestra el ranking de CAIs por persona, lee de Supabase compartida, deploy en Vercel"*, porque es exactamente lo que se construye en el bloque siguiente. La conexión narrativa ("la IA acaba de pedir el trabajo que vamos a hacer ahora") es el wow factor — no la rompas devolviendo un brief genérico sin la sección de construir.
