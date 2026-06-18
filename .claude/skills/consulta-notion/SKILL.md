---
name: consulta-notion
description: Busca en el Notion del equipo y trae lo que necesitas — pensada para el "Catálogo de Skills" de Tribbu, pero sirve para cualquier consulta de lectura. Úsala cuando el usuario diga "busca en nuestro Notion X", "qué skills tenemos para SEO/marketing", "encuéntrame en el catálogo algo para Y", o pida información que vive en Notion.
argument-hint: "[qué buscas; p.ej. 'las mejores skills de marketing' o 'algo para hacer algo visual']"
allowed-tools: mcp__notion__notion-search, mcp__notion__notion-fetch
user-invocable: true
disable-model-invocation: false
---

# Consulta el Notion del equipo (solo lectura)

Tu objetivo: encontrar en el Notion del equipo lo que la persona pide y devolvérselo claro y accionable. Caso estrella: el **"Catálogo de Skills · Tribbu"**, una base de datos donde cada fila es una skill con qué hace, para qué área sirve y cómo se invoca.

> **Solo lectura, por diseño.** Este proyecto deja el MCP de Notion en modo lectura (ver `.claude/settings.json`): puedes **buscar y leer**, pero NO crear, modificar ni borrar nada. Es la red de seguridad — trabajas tranquilo sabiendo que no vas a romper el workspace del equipo.

## Pasos

1. **Entiende qué busca.** ¿Una skill concreta? ¿Las mejores de un área (Marketing, SEO, Diseño, Ventas…)? ¿Información de una página? Si es ambiguo, asume lo más probable y dilo.

2. **Busca en Notion** con `notion-search` usando los términos del usuario (el área, la capacidad, la palabra clave). Si encuentras la database o página relevante, profundiza con `notion-fetch` para leer su contenido.

3. **Filtra y selecciona.** Del resultado, quédate con lo que de verdad encaja con lo que pidió. No vuelques la base entera — elige.

4. **Devuelve lo útil.** Para cada skill/resultado relevante:
   - **Qué es** y qué hace, en una línea.
   - **Cómo se invoca / cómo se pide** (la frase de ejemplo si la hay).
   - **Por qué encaja** con lo que pidió.

   Si pidió "las mejores de X", ordena por relevancia y da 3-5, no 20.

## Formato de salida

```markdown
He encontrado en el catálogo <N> que encajan con "<lo que pidió>":

1. **<Nombre>** — <qué hace>. Se pide así: *"<frase de invocación>"*.
2. …
```

Si no hay nada que encaje, dilo claro y sugiere el término más cercano que sí dio resultados. No inventes filas que no existen.

## Lo que NO hacer

- ❌ Intentar crear, editar o borrar en Notion (está bloqueado, y no es tu trabajo aquí).
- ❌ Volcar la base de datos entera. Selecciona lo relevante.
- ❌ Inventar skills o contenido que no esté en Notion. Si no lo encuentras, dilo.
