---
name: crear-skill
description: Convierte algo que repites en una skill propia de Claude Code. Úsala cuando el usuario diga "esto que hago siempre conviértelo en skill", "quiero automatizar este flujo", "créame una skill para X", o cuando detectes un procedimiento manual que se repite y merece guardarse.
argument-hint: "[describe qué quieres que haga la skill, o di 'esto que acabo de hacer']"
allowed-tools: Read, Write
user-invocable: true
disable-model-invocation: false
---

# Crear una skill

Tu objetivo: ayudar a la persona a convertir un procedimiento que repite en una **skill** reutilizable — un `SKILL.md` bien hecho, guardado en `.claude/skills/<nombre>/SKILL.md`, que Claude pueda usar después sin que se lo expliquen otra vez.

> **Qué es una skill**: una carpeta con un `SKILL.md` dentro. El `SKILL.md` es markdown con un frontmatter (los metadatos entre `---`) y un cuerpo (las instrucciones). Nada más. Si sabes escribir un documento, sabes escribir una skill.

## Proceso

Averigua en qué punto está la persona y avanza desde ahí. El flujo completo es:

1. **Define qué hace.** Pregunta (o deduce de lo que acaba de pasar): ¿qué tarea repetitiva quiere capturar? ¿Cuál es la entrada (un archivo, un texto, una URL) y cuál la salida (un brief, un email, un diagrama)? Resúmelo en una frase antes de escribir nada.

2. **Elige el tipo** — esto decide el frontmatter:

   | Tipo | Qué hace | `user-invocable` | `disable-model-invocation` |
   |---|---|---|---|
   | **Conocimiento** | carga contexto de un dominio (cómo usamos X) | `false` | `false` (queremos que se auto-cargue) |
   | **Workflow** | procedimiento de N pasos que produce un artefacto | `true` | `false` |
   | **Destructiva** | toca producción, borra, despliega, publica fuera | `true` | **`true`** (que nunca se auto-invoque) |

   La mayoría de skills útiles son **Workflow**. El error nº1 es equivocar el tipo, no la sintaxis.

3. **Escribe el borrador.** Estructura:
   - **Frontmatter**: `name` (kebab-case), `description` (clave: aquí van las **palabras que disparan** la skill — sé concreto con ejemplos de cómo la pedirá la persona), `allowed-tools` (solo lo que necesite), y los campos del tipo elegido.
   - **Cuerpo**: objetivo en una frase → "Cuándo invocarte" (triggers) → "Pasos" (numerados, accionables) → "Formato de salida" (si produce un artefacto) → "Lo que NO hacer".

4. **Guárdala** en `.claude/skills/<nombre>/SKILL.md` con la herramienta Write.

5. **Pruébala.** Propón 2-3 frases reales con las que se invocaría y sugiere a la persona que las pruebe en una conversación nueva. Si no se dispara, el problema casi siempre está en el `description` — afínalo con más keywords del dominio.

## Criterios de una skill bien hecha

- **El `description` predice cuándo se usa.** Si es vago ("ayuda con tareas"), Claude no sabrá cuándo cargarla. Pon ejemplos de frases reales.
- **Los pasos son accionables**, no teoría. Cada paso dice qué hacer.
- **`allowed-tools` mínimo.** Solo las herramientas que de verdad usa, para no disparar permisos en cada paso.
- **Cabe de un vistazo.** Una skill no es un manual. Si te pasas de ~60 líneas, probablemente sobra.

## Lo que NO hacer

- ❌ Meter el tipo equivocado (una destructiva sin `disable-model-invocation: true` es una bomba).
- ❌ `description` genérico — es lo único que decide si la skill se activa.
- ❌ Pedir herramientas que no usa "por si acaso".
- ❌ Escribir un tratado. Destila el procedimiento, no lo documentes entero.
