# La base de datos (Supabase)

La web lee de una Supabase compartida. No tienes que crear nada — ya está montada con datos de ejemplo.

## Lo que necesitas saber para la web

La web lee de una **vista** llamada `cais_por_persona`, que devuelve una fila por persona con:

| Columna | Qué es |
|---|---|
| `nombre` | Nombre de la persona |
| `departamento` | Su área (Tech, Marketing, People, Ops, …) |
| `cais_totales` | Total de CAIs acumulados |
| `clasificacion` | Ferrari / Mercedes / … (por si quieres usarlo) |
| `proyectos_activos` | Nº de proyectos en los que tiene CAIs |

Para el ranking básico te basta con `nombre`, `departamento` y `cais_totales`.

## Las tablas por debajo (por si quieres profundizar)

- `personas` — quién es cada uno (nombre, email, departamento, clasificación, si está en Le Mans).
- `proyectos` — proyectos con sus CAIs totales y estado (activo / congelado / cerrado).
- `cais` — cada asignación de CAIs (qué persona, qué proyecto, cuántos, qué rol).

La vista `cais_por_persona` ya suma los CAIs de cada persona y los ordena. Si quieres ampliar
(p. ej. ver proyectos por persona), pídeselo a Claude y él consulta las tablas.

## Seguridad

La base de datos tiene **RLS (Row Level Security) de solo lectura**: la web puede LEER, pero
nadie puede escribir ni borrar con la publishable key. Por eso es seguro que esa key vaya en el código.
