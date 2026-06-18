# 🏁 Guion del taller — vibe coding con Claude Code

> Tu objetivo de hoy: partir de esta plantilla, **entenderla**, **añadirle una funcionalidad tuya**
> y dejarla **publicada en internet** con tu URL. Todo hablando con Claude Code — sin escribir código a mano.
>
> El ciclo que vas a repetir todo el día es siempre el mismo:
> **pides → Claude propone/hace → miras el resultado → ajustas.** Eso es vibe coding.

---

## Antes de empezar (1 min)

- Tienes tu copia del repo abierta en **Claude Code** (la creaste con "Use this template").
- No necesitas saber programar. Necesitas saber **explicar lo que quieres** y **mirar si ha quedado bien**.
- Regla de oro: **no aceptes a ciegas.** Cuando Claude proponga un plan o un cambio, léelo. Si no lo entiendes, pídele que te lo explique "como si tuviera 5 años".

---

## Paso 0 · La IA pide el trabajo (demo)

Antes de tocar el repo, verás en directo cómo la skill saca el trabajo de una reunión:

```
/summarize-meeting @meeting-input.md
```

De una reunión (Isma, María y Pedro hablando de los CAIs) sale un **brief** con una sección
**"🔨 Para construir"**. Ahí aparece, literalmente, el proyecto que vas a montar hoy: el **ranking de CAIs**.
La idea que te quedas: *la IA no solo escribe código, también te dice qué hay que hacer.*

---

## Paso 1 · Entender qué hay en el repo (5 min)

No empieces a pedir cambios sin saber qué tienes delante. Pídeselo a Claude:

> **«Explícame este repo: qué hace, qué archivo hace qué, y de dónde saca los datos. Soy nuevo, no asumas que sé programar.»**

Claude leerá `README.md`, `CLAUDE.md`, `app.js`, `docs/schema.md`… y te lo resumirá. Quédate con tres cosas:
- La web es **estática** (HTML + JS), sin instalar nada.
- Lee de una **Supabase compartida** (una base de datos en la nube), vía la vista `cais_por_persona`.
- La conexión **ya está hecha**; lo que falta es **pintar** y **ampliar**.

> 💡 Pregunta de control: *«¿Qué pasa si Supabase se cae?»* (Respuesta correcta: hay un fallback a `datos.json`.
> Si Claude no lo menciona, es que no ha leído bien — pídele que mire `app.js`.)

---

## Paso 2 · Calentamiento: que se vea el ranking (5 min)

El repo trae la función `pintarRanking()` **a medias** (un `// TODO`). Tu primer "hola mundo":

> **«Completa la función `pintarRanking` en `app.js` para que muestre una tabla con cada persona,
> su departamento y sus CAIs, ordenada de mayor a menor. Los 3 primeros con medalla 🥇🥈🥉.»**

Cuando lo haga, **míralo en el navegador** (ver `docs/deploy.md` para verla en local, o despliega ya en el Paso 5).
Si se ve el ranking → acabas de cerrar tu primer ciclo de vibe coding. 🎉

---

## Paso 3 · Planificar tu funcionalidad (10 min) ⭐ el corazón del taller

Aquí es donde tu web deja de ser igual que la del de al lado. Elige **una** funcionalidad
del menú (`docs/ideas.md`) o invéntate la tuya. Y antes de implementar nada, **planifica con Claude**:

> **«Quiero añadir [tu funcionalidad, p. ej. un filtro por departamento]. Antes de tocar código,
> hazme un plan: qué archivos tocarías, qué pasos, y qué podría salir mal. No lo implementes todavía.»**

Por qué planificar primero:
- Te obliga a **entender** el cambio antes de que exista.
- Pillas pegas pronto (¿hace falta un dato que la web no tiene? ¿hay que tocar Supabase?).
- Es la diferencia entre "que salga algo" y "saber lo que ha salido".

> 🧠 Truco pro: si la funcionalidad es grande, pídele que use **plan mode** (`Shift+Tab` en Claude Code).
> Claude piensa el plan entero y te lo enseña **antes** de tocar nada. Tú lo apruebas o lo corriges.

Cuando el plan te convenza, **entonces** dices: *«Vale, impleméntalo.»*

---

## Paso 4 · Implementar y revisar (15-20 min)

Claude hace los cambios. Tu trabajo ahora:

1. **Mira el resultado en la web.** ¿Hace lo que pediste? ¿Se ve bien?
2. **Si algo falla**, no te frustres: copia el error o describe qué ves mal y pásaselo:
   > *«Sale [esto]. No es lo que esperaba: yo quería [aquello]. ¿Por qué pasa y cómo lo arreglamos?»*
3. **Itera.** "Ahora el filtro, que sea un desplegable." "Pon el departamento en color más suave." Pequeños ciclos.

> ⚠️ Reglas que Claude ya conoce (están en `CLAUDE.md`), pero por si acaso:
> - Stack **estático**: nada de `npm install`, ni React, ni Next. Si hace falta una librería, por CDN.
> - **Nunca** la `service_role` key de Supabase. La que se usa (publishable) es pública por diseño.
> - Si Supabase da error, **mostrarlo en pantalla** — nunca inventar datos.

---

## Paso 5 · Commit a GitHub (2 min)

Cuando tengas algo que te guste, guárdalo en GitHub. Díselo a Claude:

> **«Haz commit de estos cambios con un mensaje claro en español y súbelo a GitHub.»**

Claude hará `git add`, `git commit` y `git push`. El mensaje, en español y en imperativo
(`feat: añadir filtro por departamento`). Si te pide permiso para ejecutar git, dáselo.

> Si es la primera vez y te pide login de GitHub, sigue lo que te diga Claude o pide ayuda al facilitador.

---

## Paso 6 · Publicar en Vercel (3 min)

Tu URL pública, paso a paso, en **`docs/deploy.md`**. Resumen:
1. [vercel.com](https://vercel.com) → entra con GitHub.
2. **Add New → Project** → elige tu repo → **Deploy** (todo por defecto, no hay build).
3. En ~1 min: tu URL `algo.vercel.app`.

A partir de ahí, **cada `git push` republica solo**. Cambias algo con Claude → push → 1 min → recargas tu URL.

---

## Paso 7 · Enséñala 🎉

Pega tu URL en `#general-academy`. Esa web la has montado tú en una hora, con una funcionalidad
que no tiene nadie más. Es tu **primer proyecto del mes** de Le Mans — ya está empezado.

En tu 1:1 de seguimiento la amplías, o la apuntas a **tus propios datos** (tus campañas, tickets, leads…).

---

## Chuleta de prompts (cópialos tal cual)

| Quiero… | Díselo así |
|---|---|
| Entender el repo | «Explícame este repo como si fuera nuevo, sin asumir que sé programar.» |
| Ver el ranking | «Completa `pintarRanking` para mostrar la tabla ordenada de mayor a menor, con medallas.» |
| Planificar antes de hacer | «Hazme un plan para añadir [X]. No lo implementes aún; dime qué tocarías y qué puede fallar.» |
| Arreglar un error | «Sale [esto], esperaba [aquello]. ¿Por qué y cómo lo arreglamos?» |
| Guardar y subir | «Commit en español y push a GitHub.» |
| Entender un cambio | «Explícame qué acabas de cambiar y por qué, en cristiano.» |

---

## Si te atascas

1. **Pregúntale a Claude primero.** "Estoy atascado con X, ¿qué opciones tengo?"
2. **Vuelve a un estado que funcionaba.** "Esto se ha roto, ¿puedes deshacer el último cambio?"
3. **Pide ayuda al facilitador.** Para eso está. Mejor preguntar que pelear 20 min contra una pantalla roja.
