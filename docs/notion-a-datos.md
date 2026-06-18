# Tu Notion → tu web (modo estático)

¿Tienes tus CAIs en **tu propio Notion** y quieres que tu web los muestre? Este es el camino
**fácil y sin backend**: le pides a **Claude** que lea tu Notion y reescriba `datos.json`. Tu web lee ese archivo.

> Esto es el modo **estático**: una foto de tus datos en un momento dado. No se actualiza solo.
> El modo **dinámico** (la web conectada a Notion en vivo) lo vemos después — necesita integración y un mini-backend.

---

## Antes de empezar

1. Tienes tu **base de datos de CAIs en tu Notion** (si no, duplica la plantilla que te pasamos).
2. Abres este repo en **Claude Code**.
3. Claude ya tiene acceso de **lectura** a tu Notion (el repo trae el conector configurado; te autenticas con tu cuenta).

---

## Paso 1 · Pídele a Claude que vuelque tu Notion

Cópiale este prompt tal cual:

> **«Conéctate a mi Notion, busca mi base de datos de CAIs (la de Personas) y reescribe el archivo
> `datos.json` de este repo con una fila por persona: `nombre`, `departamento` y `cais_totales`,
> ordenado de mayor a menor. Respeta el formato exacto que el archivo ya tiene.»**

Claude leerá tu Notion y sobrescribirá `datos.json`. El formato que debe respetar:

```json
[
  { "nombre": "...", "departamento": "...", "cais_totales": 4200 }
]
```

## Paso 2 · Dile a la web que use tu archivo

En `app.js`, cambia la línea de la fuente a `"json"`:

```js
const FUENTE = "json"; // antes estaba en "supabase"
```

## Paso 3 · Míralo

Recarga la web (o despliega en Vercel). Ahora muestra **tus** datos, los que tenías en tu Notion.

---

## ¿Y el modo dinámico (en vivo desde Notion)?

Eso es el siguiente nivel. La web estática **no puede** leer Notion directamente: la API de Notion
necesita un **token secreto** y **no permite llamadas desde el navegador** (al revés que Supabase).
Para hacerlo en vivo hace falta una pequeña **función serverless** que haga de puente. Lo vemos en su momento.
