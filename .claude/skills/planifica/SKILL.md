---
name: planifica
description: Convierte una idea difusa en un plan claro antes de tocar código. Te entrevista para sacar lo que falta y devuelve una mini-spec accionable. Úsala cuando el usuario diga "quiero construir X", "ayúdame a planificar", "no sé por dónde empezar", o tenga una idea poco definida que merece estructurarse antes de implementar.
argument-hint: "[describe la idea o la funcionalidad que quieres construir]"
allowed-tools: Read
user-invocable: true
disable-model-invocation: false
---

# Planifica antes de construir

Tu objetivo: coger una idea a medio cocer y convertirla en una **spec corta y accionable** que cualquiera pueda empezar a construir hoy. El valor está en hacer las preguntas que la persona no se hizo, no en escribir un documento largo.

> **Filosofía**: planificar mal cuesta más que no planificar. Una buena spec responde tres cosas — *qué se construye*, *para quién*, y *cómo sé que está hecho*. Si una sección no ayuda a responder eso, sobra.

## Pasos

1. **Entrevista primero, no asumas.** Antes de escribir la spec, haz las preguntas mínimas que falten para no construir lo equivocado. Típicamente:
   - ¿Quién lo va a usar y qué problema concreto le resuelve?
   - ¿Cuál es el resultado mínimo que ya sería útil (el MVP)?
   - ¿De dónde salen los datos / con qué se conecta?
   - ¿Qué está **fuera** de alcance ahora?

   Haz pocas preguntas y buenas. Si la persona ya dio un dato, no lo repreguntes. Si algo se puede asumir con sentido común, asúmelo y dilo.

2. **Destila en la spec.** Con las respuestas, rellena el formato de abajo. Sé concreto: nombres reales, datos reales, vistas reales.

3. **Marca lo abierto.** Lo que siga sin decidirse va en "Decisiones pendientes" — no lo inventes.

4. **Cierra con el primer paso.** Termina diciendo cuál es la primera tarea concreta para empezar a construir. El puente a "ahora lo montamos".

## Formato de la spec

```markdown
# 📐 Spec — <qué es, en una frase>

## Problema
<Qué duele hoy y a quién. 2-3 frases.>

## Qué construimos (MVP)
<La versión mínima que ya aporta valor. Qué hace, no cómo.>

## Usuarios y casos de uso
- <Quién> hace <qué> para <para qué>.

## Datos / integraciones
- <De dónde salen los datos, con qué sistemas habla.>

## Criterios de "hecho"
- [ ] <Cómo sabemos que funciona. Observable, no vago.>

## Fuera de alcance (por ahora)
- <Lo que NO hacemos en esta versión, para no dispersarnos.>

## Decisiones pendientes
- <Lo que falta por decidir antes o durante la construcción.>

## Primer paso
<La primera tarea concreta para arrancar.>
```

## Lo que NO hacer

- ❌ Saltar la entrevista y escribir la spec con suposiciones. Pregunta lo que falte primero.
- ❌ Diseñar la arquitectura entera. Es una spec para arrancar, no un documento técnico cerrado.
- ❌ Inventar requisitos, usuarios o datos que no se han mencionado.
- ❌ Meter en el MVP todo lo que se podría hacer. El MVP es lo mínimo que ya sirve.
