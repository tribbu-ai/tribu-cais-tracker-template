# 💡 Menú de ideas — qué construir en tu CAIs Tracker

> Elige **una** para el taller (luego en tu 1:1 amplías). No hace falta hacer la más difícil:
> hecho y publicado vale más que ambicioso y a medias. Cada idea trae un **prompt de arranque**
> que puedes copiar tal cual a Claude.
>
> 🟢 fácil (10-15 min) · 🟡 media (20-30 min) · 🔴 reto (para los que vuelan)

Casi todas estas ideas **ya tienen los datos disponibles** — la vista `cais_por_persona` devuelve
`nombre`, `departamento`, `cais_totales`, `clasificacion` y `proyectos_activos`, y la tabla
`proyectos` tiene `estado` y `ultimo_update` (ver `docs/schema.md`).

---

## 🟢 Fáciles — para soltarte

### 1. Podio destacado arriba
Una tarjeta grande para el top 3 (oro/plata/bronce) antes de la tabla.
> *«Añade un podio visual con los 3 primeros del ranking como tarjetas destacadas encima de la tabla, con sus medallas y sus CAIs. Reusa los colores que ya hay en el CSS.»*

### 2. Buscador por nombre
Una cajita de texto que filtra la tabla según escribes.
> *«Añade un buscador encima de la tabla que filtre las filas por nombre a medida que escribo, sin recargar.»*

### 3. Contador / cabecera con totales
"21 personas · 48.300 CAIs repartidos". Un resumen arriba del todo.
> *«Añade una línea de resumen bajo el título con el nº total de personas y la suma de todos los CAIs, formateada con separador de miles.»*

### 4. Tu propio diseño
Cámbiale la cara: colores de tu equipo, tipografía, modo claro, tu logo.
> *«Quiero rediseñar la web con [describe: colores, estilo más limpio, modo claro…]. Mantén la tabla funcional, solo cambia el aspecto.»*

---

## 🟡 Medias — las que pidió la reunión

### 5. Filtro por departamento ⭐ (lo pidió Isma en la reunión)
Un desplegable para ver solo Tech, solo Marketing, etc.
> *«Añade un desplegable de departamentos encima de la tabla. Al elegir uno, la tabla muestra solo a esa gente; "Todos" la muestra entera. Saca los departamentos de los propios datos, no los escribas a mano.»*

### 6. Filtro / etiqueta por clasificación
Distinguir Ferrari vs Mercedes-en-LeMans con un badge de color, y poder filtrar.
> *«Cada persona tiene un campo `clasificacion` (Ferrari, Mercedes-en-LeMans…). Muéstralo como una etiqueta de color en cada fila y añade un filtro para ver solo una clasificación.»*

### 7. Gráfico de barras del ranking
El top 10 como barras horizontales, además de (o en vez de) la tabla.
> *«Añade un gráfico de barras horizontales con el top 10 de CAIs. Usa una librería ligera por CDN (p. ej. Chart.js con `<script>`), nada de npm. La tabla puede quedarse debajo.»*

### 8. Ordenar por columnas
Pinchar en una cabecera para ordenar por nombre, departamento o CAIs.
> *«Haz que se pueda ordenar la tabla pinchando en las cabeceras (nombre, departamento, CAIs), alternando ascendente/descendente.»*

---

## 🔴 Retos — para los que vuelan

### 9. Detalle de proyectos por persona (lo pidió la reunión)
Al pinchar en una persona, ver en qué proyectos tiene CAIs.
> *«Quiero que al pinchar en una persona se despliegue el detalle de sus proyectos y cuántos CAIs aporta cada uno. Los datos están en las tablas `proyectos` y `cais` (ver `docs/schema.md`). Planifícalo antes de implementarlo: dime qué consulta a Supabase hace falta.»*

### 10. Indicador de "proyecto zombie" (lo pidió la reunión)
Vista de proyectos marcando en rojo los que llevan +3 semanas sin update.
> *«Añade una segunda vista (o sección) que liste los proyectos desde la tabla `proyectos`, y marque en rojo los "zombie": estado distinto de cerrado y `ultimo_update` de hace más de 3 semanas. Planifícalo primero.»*

### 11. Vista por departamento (agregada)
Ranking de departamentos: qué área suma más CAIs en total.
> *«Añade una vista que agrupe los CAIs por departamento y los muestre como ranking de áreas, no de personas. Piensa si lo calculas en el navegador a partir de los datos que ya cargo.»*

### 12. Tu idea propia
¿Se te ocurre algo que no está aquí? Mejor aún. Cuéntaselo a Claude y **planificadlo juntos** antes de implementar.

---

## Cómo elegir (en 30 segundos)

- **Primera web de tu vida** → empieza por una 🟢 (podio o buscador). Publícala. Luego amplía.
- **Tienes algo de soltura** → ve a por una 🟡, idealmente el **filtro por departamento** (es lo que pidió la reunión: cierra el círculo).
- **Esto se te queda corto** → 🔴 detalle por proyecto o zombies, que tocan más de una tabla y te hacen planificar de verdad.

> Recuerda el guion: para cualquier idea **media o reto**, primero **planifica con Claude** (Paso 3 de `flujo-vibe-coding.md`), no te lances a implementar a ciegas.
