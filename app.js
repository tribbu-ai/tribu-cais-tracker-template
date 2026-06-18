// =============================================================
// Tribu CAIs Tracker — app.js
// 👉 En el taller le pides a Claude que COMPLETE la función pintarRanking().
//    La conexión a Supabase ya está cableada; lo que falta es PINTAR.
// =============================================================

// =============================================================
// 👇 DE DÓNDE LEE LA WEB. Cambia esta línea según lo que hagas:
//   "supabase" → la BD compartida del taller (datos de todos).
//   "json"     → tu datos.json local. Úsalo si has volcado TU Notion
//                a datos.json con Claude (ver docs/notion-a-datos.md).
// =============================================================
const FUENTE = "supabase"; // "supabase" | "json"

// --- Credenciales de la Supabase compartida del taller ---
// La publishable key es PÚBLICA por diseño (la BD está protegida con RLS de solo lectura).
// Cópialas de .env.example. NUNCA pongas aquí la service_role key.
const SUPABASE_URL = "https://iqhlzynhykgwguebntcr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_gLrMiu3JJPYe4AWREnWvkg_wDCH735c";

// Lee los datos del ranking. Esto YA funciona — no hace falta tocarlo.
async function cargarDatos() {
  if (FUENTE === "supabase") {
    // El CDN expone el global `supabase`; al cliente lo llamamos `db` para no pisarlo.
    const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const { data, error } = await db
      .from("cais_por_persona")
      .select("nombre, departamento, cais_totales")
      .order("cais_totales", { ascending: false });
    if (error) throw error;
    return data;
  }
  const res = await fetch("./datos.json");
  if (!res.ok) throw new Error("No se pudo leer datos.json (" + res.status + ")");
  return await res.json();
}

// =============================================================
// 👇 ESTO ES LO QUE SE CONSTRUYE EN EL TALLER 👇
//
// `filas` es una lista; cada elemento tiene: nombre, departamento, cais_totales.
//
// Pídele a Claude:
//   "Completa pintarRanking para que muestre una tabla con cada persona
//    y sus CAIs, ordenada de mayor a menor."
//
// (La tabla vive en <tbody id="ranking"> dentro de index.html.)
// =============================================================
function pintarRanking(filas) {
  const tbody = document.getElementById("ranking");

  // TODO: recorrer `filas` y pintar una <tr> por persona
  //       (posición, nombre, departamento, CAIs).
  tbody.innerHTML = `<tr><td colspan="4" class="estado">
    Aquí irá el ranking. Pídele a Claude que lo construya. ✨
  </td></tr>`;
}

// Arranque (ya funciona — no hace falta tocarlo).
async function init() {
  try {
    const filas = await cargarDatos();
    pintarRanking(filas);
  } catch (e) {
    console.error(e);
    document.getElementById("ranking").innerHTML =
      `<tr><td colspan="4" class="estado err">Error al leer datos: ${e.message}</td></tr>`;
  }
}

init();
