---
titulo: Reunión sintética sobre CAIs — input para el taller
uso: input del bloque "skill estrella" del taller. Se lanza /summarize-meeting sobre esta transcripción y de ahí salen brief + acciones que alimentan el bloque de vibe coding.
nota: NO es una reunión real — es un caso de demostración construido sobre patrones realistas.
---

# Reunión sintética — CAIs Tracker

> **Cómo se presenta en el taller**: "Para no usar una reunión real con datos sensibles, he preparado este caso de demostración construido sobre patrones que sí han salido en nuestras sesiones internas. La situación es realista, los participantes podrían ser estos."

> **Por qué esta reunión**: el brief que extrae aterriza naturalmente en construir un tracker de CAIs — exactamente el producto del bloque de vibe coding del taller.

---

## Metadatos de la reunión (cabecera estilo Gemini/Granola)

**Fecha**: (caso de demostración)
**Duración**: 23 minutos
**Modalidad**: presencial Tribbu HQ
**Participantes**:
- **Isma Teijón González** — lead apuesta AI Mindset
- **María Castillo** — Operaciones
- **Pedro Martín Benito** — squad IA

---

## Transcripción

### 00:00:12

**María Castillo:** Vale, vamos al lío que solo tengo veinte minutos antes de la reunión con People. Isma, lo de los CAIs.

**Isma Teijón González:** Sí, tía. Mira, llevamos como dos semanas dando vueltas y necesitamos tomar decisión hoy. El sistema de CAIs lo lanzamos con la presentación de Le Mans la semana pasada, todo el mundo lo entendió, lo vio guay. Pero ahora la peña me pregunta cosas concretas: "¿cuántos CAIs llevo?", "¿quién va por delante?", "¿en qué proyecto se ganan más?". Y nosotros no tenemos manera de contestar. Lo tengo en una hoja de Notion, súper feo, y ni la actualizamos.

**Pedro Martín Benito:** Pues sí, además le he dado vueltas y la hoja se nos queda corta. Tendríamos que poder filtrar por persona, por departamento, por apuesta, por proyecto. Y eso en una página de Notion plana es un dolor.

**Isma Teijón González:** Exacto. Entonces lo que propongo es montar una mini-app. Algo sencillo, una página, que muestre el ranking por persona y el detalle de qué proyectos tienen cada uno.

### 00:01:48

**María Castillo:** Vale. ¿Y eso lo construye quién?

**Isma Teijón González:** Esa es la pregunta. Si lo hacemos Pedro y yo, dos semanas. Si lo pedimos al squad de tecnología, va a la cola y nos lo dan en septiembre. Pero justo este es uno de los proyectos perfectos para que sea Le Mans quien lo haga. Es como demostrar el modelo.

**Pedro Martín Benito:** A mí me gusta. Es relativamente sencillo, lo pueden hacer los Ferraris en el taller y ya se quedan con algo que sirve.

**María Castillo:** ¿Algo que sirve para quién? Quiero entender bien el uso real, no que sea un ejercicio vacío.

### 00:02:34

**Isma Teijón González:** Para tres cosas. Una, motivación: la peña que está en Le Mans necesita ver que sus CAIs suben. Es como el contador de likes, vale, eso engancha. Dos, gobernanza interna: el promotor de cada proyecto tiene que saber si sigue activo o no. Si lo dejas tres semanas sin tocar, el proyecto se considera zombie y los CAIs se congelan. Esto lo dijimos pero no hay sistema. Tres, reconocimiento: a final de trimestre damos premios, viajes, lo que sea, a la persona que más CAIs ha hecho. Y eso necesita un ranking visible.

**Pedro Martín Benito:** O sea que el dashboard sirve a la persona (ver lo mío), al promotor (ver si mi proyecto sigue vivo) y al comité de premios (ranking trimestral).

**Isma Teijón González:** Exacto.

### 00:03:51

**María Castillo:** Vale, me convence. ¿Qué información tendría que mostrar?

**Isma Teijón González:** Mínimo viable. Te lo digo:

- Una tabla con cada persona de Le Mans y sus CAIs acumulados totales.
- Ordenada de mayor a menor — el ranking sale solo.
- Por cada persona, qué proyectos tiene activos y cuántos CAIs aporta cada uno.
- Algún filtro por departamento, porque a veces queremos ver "todo Marketing".
- Un indicador de "proyecto zombie" si lleva más de tres semanas sin update.

**María Castillo:** ¿Y los datos de dónde salen?

### 00:05:02

**Isma Teijón González:** Aquí está el detalle. Hoy lo gestionamos a mano en Notion. Cada vez que se asignan CAIs a un proyecto, alguien lo mete en la tabla. Por ahora seguimos así, pero el dashboard lee directo de una base de datos. O sea: la web no es solo lectura, también queremos que el promotor pueda meter actualizaciones del proyecto desde ahí, así no tiene que ir a Notion y nos olvidamos.

**Pedro Martín Benito:** O sea que ya es una mini-aplicación, no un dashboard de solo lectura. Hay que pensar en escritura también.

**Isma Teijón González:** En la v1, solo lectura. La escritura la dejamos para la v2 — primero tener algo en producción y que la gente lo use.

**María Castillo:** Vale, eso me parece sensato.

### 00:06:14

**Pedro Martín Benito:** Tema técnico. La base de datos, ¿la montamos nosotros? Porque si la haces local, los Ferraris no la pueden leer todos. Si la haces compartida...

**Isma Teijón González:** Yo creo que para que sea real, lo más fácil: una Supabase compartida. Una sola, todos los Le Mans conectan a la misma. La montamos antes del taller, le ponemos datos de prueba — datos mock con todos los Le Mans, CAIs aleatorios, proyectos inventados — y en el taller cada uno se conecta y ve los datos. Después, si el sistema vale, lo migramos a producción.

**Pedro Martín Benito:** Vale, eso lo veo. Y deploy en Vercel, supongo.

**Isma Teijón González:** Sí. Cada Ferrari hace su fork del repo plantilla, lo deploya en su Vercel, ve su versión funcionando con la URL pública. Esa URL la pueden enseñar a sus equipos, "mira lo que he hecho en una hora". Es parte del compromiso de Le Mans, hacer un proyecto al mes — pues este es el primero, ya está hecho.

**María Castillo:** Pero entonces va a haber veintiuna versiones distintas del dashboard ahí sueltas.

**Isma Teijón González:** Sí. Y está bien. Cada uno la suya. La oficial la decidimos después de ver cuál ha quedado mejor o consolidamos lo bueno de varias.

### 00:08:01

**María Castillo:** Tema mío. La gente está preguntando cómo se pide acceso a Supabase, a Vercel, a Anthropic con tokens. Y no tenemos política clara. ¿Por qué traigo esto a esta reunión? Porque si lanzamos el dashboard y le decimos a la peña "conéctate a Supabase", a las dos horas tengo a quince personas pidiéndome cuentas y no sé qué decirles.

**Isma Teijón González:** Justo. Esto lo estamos cerrando esta semana. Necesitamos un formulario donde la gente pide, tú apruebas según unas reglas que ya definimos, y se entrega. Para Claude con tokens hasta cincuenta euros al mes, automático. Para Supabase, automático. Para herramientas que no están en el stack, me lo pasas a mí. Quiero que esa política la tengamos cerrada pronto.

**María Castillo:** ¿Y el registro de quién tiene qué?

**Isma Teijón González:** En una tabla de Notion que llevas tú. Persona, recurso, fecha de entrega, motivo, fecha de revisión. Lo revisamos cada trimestre y lo que no se usa, se revoca.

**Pedro Martín Benito:** Apunto: el formulario hay que tenerlo el viernes. Si no, el lunes la gente no sabrá cómo pedir Supabase y el martes se atascan en el taller.

**María Castillo:** Vale. Yo lo monto. Tú me pasas las reglas exactas, Isma, y yo el form en Notion en una tarde.

### 00:10:27

**Isma Teijón González:** Tema diferente, pero relacionado. Lo de la duda con los proyectos zombies. Hoy un proyecto puede estar "activo" pero llevar dos meses sin tocarse. El promotor sigue acumulando CAIs y no hay control. ¿Cómo lo metemos en el dashboard?

**Pedro Martín Benito:** Bandera visual. Si el último update es de hace más de tres semanas, en el dashboard sale en rojo o amarillo. Y al promotor le llega un mensaje preguntando si sigue activo.

**María Castillo:** ¿Por qué tres semanas y no dos?

**Isma Teijón González:** Por nada concreto. Empezamos con tres. Si vemos que hay mucha falsa alarma, lo subimos a cuatro. Es ajustable.

**Pedro Martín Benito:** Y el mensaje al promotor se lo manda el bot de Slack, o un email, o una notificación de Notion... ¿qué prefieres?

**Isma Teijón González:** Slack. Que sea molesto. Que vea el ping. Si en una semana no contesta, el proyecto pasa a "congelado" y deja de generar CAIs. Eso es disciplina.

### 00:12:10

**María Castillo:** Vale. Yo me voy en cinco minutos. Resúmeme lo que tenemos.

**Isma Teijón González:** A ver: necesitamos un dashboard web. Ranking de CAIs por persona, ordenado descendente. Detalle de proyectos por persona, con CAIs por proyecto. Filtro por departamento. Indicador de proyecto zombie si lleva más de tres semanas sin actualizar. Base de datos Supabase compartida. Deploy en Vercel. Cada Ferrari hace su fork y deploya su versión en el taller. Y por otro lado, el formulario de operaciones para pedir accesos lo monta María antes de fin de semana, y la política se la pasamos Pedro y yo unos días antes.

**Pedro Martín Benito:** Y la consolidación de la versión oficial del dashboard, ¿cuándo?

**Isma Teijón González:** Lo decidimos después del taller. Vemos cuál ha quedado mejor o lo bueno de cada una y lo unificamos. Probablemente la semana siguiente.

**María Castillo:** Vale. Hablamos. Me voy.

**Isma Teijón González:** Hablamos, María.

### 00:13:48

**Pedro Martín Benito:** Una cosa, Isma. ¿La parte de notificaciones al promotor del proyecto zombie, eso entra en v1 o no?

**Isma Teijón González:** No, eso es v2. En v1 solo el indicador visual en el dashboard. La notificación la añadimos después. Que en el taller hagan lo mínimo que funciona y que enseñe algo.

**Pedro Martín Benito:** Vale. Lo apunto.

**Isma Teijón González:** Otra cosa. En la tabla de datos seed, mete a todos los de Le Mans con CAIs mockeados, los Ferraris y los Mercedes que suben, distintos pero verosímiles. Que algunos tengan muchos porque ya tienen cosas hechas. Que otros tengan unos cuantos. Que los recién entrados tengan poquitos pero no cero, para que vean que están en el sistema.

**Pedro Martín Benito:** Vale. Y los proyectos mock, ¿qué pongo?

**Isma Teijón González:** Pon tres o cuatro reales: el formulario de operaciones, el dashboard de CAIs (sí, metarreferencia), un sistema de auditoría de contexto, el agente de soporte para User Success. Y luego inventa dos o tres genéricos.

**Pedro Martín Benito:** Hecho.

### 00:15:21

**Isma Teijón González:** Última cosa antes de cortar. Si el dashboard sale bien, lo enseñamos a la founder en la weekly de la semana siguiente. Es la prueba de que Le Mans funciona como modelo. Si vemos en una hora un proyecto real desplegado por veintiuna personas, ese es el argumento para que la apuesta de AI Mindset siga ganando peso.

**Pedro Martín Benito:** ¿Y la founder va a entender los CAIs o me tienes que explicar otra vez la lógica?

**Isma Teijón González:** Lo entienden. Es la misma idea que el CAE de negocio: incentivamos comportamiento eficiente con un crédito. Lo que para el negocio es "ahorro energético", para nosotros es "uso eficiente de IA". CAIs.

**Pedro Martín Benito:** Vale, está claro.

**Isma Teijón González:** Venga, vamos a comer.

### La transcripción finalizó después de 00:16:42

*Reunión sintética generada para el taller. Caso de demostración construido sobre patrones realistas.*
