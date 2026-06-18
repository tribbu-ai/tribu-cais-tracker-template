---
name: contexto-tribbu
description: Contexto de empresa de Tribbu — qué es, el modelo CAE/CAI, vocabulario interno, niveles Le Mans, squads. Cárgalo cuando el usuario hable de Tribbu, CAEs, CAIs, carpooling, certificaciones, el programa Le Mans, o cualquier proyecto interno de Tribbu, para responder con el vocabulario y contexto correctos.
user-invocable: false
disable-model-invocation: false
owner: tribbu
---

# Contexto Tribbu — lo que la IA debe saber de la empresa

> Esta skill es **conocimiento de empresa**. No hace nada: existe para que Claude entienda el negocio de Tribbu y use el vocabulario correcto sin que tengas que explicárselo en cada proyecto. Es la "memoria de empresa" que el plugin trae a todos tus proyectos.

## Qué es Tribbu

App de **carpooling** española (trayectos cortos compartidos, alta recurrencia). Antes se llamaba **Hoop Carpool**; rebrand a **Tribbu** en septiembre 2025. Decenas de miles de usuarios y operación diaria a gran escala. Presencia en España, Portugal y varios países de LATAM (foco de expansión en México).

## El modelo CAE (el corazón del negocio hoy)

**CAE = Certificado de Ahorro Energético** (sistema MITECO). Desde verano 2025, las energéticas compran CAEs en lugar de pagar tasa. Flujo:

1. Conductor + pasajeros se identifican, check-in/check-out, se trackea la ruta.
2. Tribbu certifica los trayectos y los envía a una certificadora.
3. Si OK, se calculan los CAEs generados.
4. Una energética los compra.
5. Tribbu reparte un incentivo por km al conductor y retiene un margen.
6. El pasajero no paga (gratis para mantener volumen).

> Hay foco estratégico en expandir CAEs a otros países y en construir un marketplace real.

## CAE vs CAI — no los confundas

- **CAE** = Certificado de Ahorro Energético. Es del **negocio** (lo que se vende a las energéticas).
- **CAI** = **Crédito de IA Eficiente**. Es **interno**, un sistema de puntos paralelo a los CAEs para gamificar la adopción de IA en el equipo. Cuando alguien habla del "ranking de CAIs" se refiere a esto.

## El programa Le Mans (AI Mindset)

Tribbu clasifica a su gente en **5 niveles de IA** por scoring (cita de Isma):

**F1 → Ferrari → Mercedes → SEAT Ibiza → SEAT 600**

- **F1**: el máximo. Solo el mentor externo de momento.
- **Ferrari**: top interno. Son el público del programa Le Mans.
- **Mercedes**: suben hacia "Le Mans".
- **SEAT Ibiza / SEAT 600**: en camino.

El scoring oficial lo lleva el **coordinador de la apuesta AI Mindset** (transversal a la empresa). **No clasifiques tú a nadie** — eso lo decide el coordinador.

## Cómo entra IA en Tribbu (3 apuestas)

1. **User Success** — la más impactante hoy (gran volumen de peticiones mensuales). Primera línea automatizada con n8n.
2. **Tecnología** — IA en el equipo de desarrollo. No es el ámbito de la mentoría.
3. **AI Mindset** — transversal. **Aquí entra el mentor** del programa.

## Cómo trabaja Tribbu

Por **apuestas con squads**. El método de adopción de IA es **proyecto del mes**: cada Le Mans elige un caso real de su trabajo y lo construye con IA.

## Vocabulario rápido

| Término | Significado |
|---|---|
| **CAE** | Certificado de Ahorro Energético (negocio) |
| **CAI** | Crédito de IA Eficiente (interno, gamificación de adopción) |
| **Le Mans** | El programa de mentoría de IA / sus participantes |
| **Squad / apuesta** | Unidad de trabajo de Tribbu |
| **F1/Ferrari/Mercedes/SEAT** | Niveles de madurez en IA |
| **Tribu OS / BBoss** | Visión interna de un SO donde viven todas las apps |

## Tono

Castellano de España. Producto y contenido de cara al usuario en español; nombres de código, ramas y commits en inglés.
