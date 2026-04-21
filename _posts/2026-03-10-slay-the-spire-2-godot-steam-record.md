---
layout: "post"
author: "javo"
date: "2026-03-10 08:25:11"

thumbnail: "/assets/img/posts/slay-the-spire-2-key-art.webp"
title: "Slay the Spire 2 arrasa en Steam con casi 575.000 jugadores simultáneos, y lo ha hecho con Godot"
description: "Slay the Spire 2 roza los 575.000 jugadores simultáneos en Steam tras migrar de Unity a Godot. El caso más visible de que el motor open source ya sostiene proyectos de primer nivel."
excerpt: "Slay the Spire 2 entra en Early Access batiendo récords y demostrando que la migración de Unity a Godot Engine ha sido un éxito técnico y comercial masivo."

categories:
- Godot
- Gaming
video:
  id: "L3pFEk1HPCQ"
  title: "Curso Godot 4 desde Cero [01] Instalar y Configurar"
  description: "Primer capítulo del curso de introducción a Godot 4. Aprende a descargar, instalar y configurar el motor desde cero."
  upload_date: "2023-03-06"
  duration: "PT6M27S"
faq:
  - question: "¿Qué motor utiliza Slay the Spire 2?"
    answer: "Mega Crit desarrolló Slay the Spire 2 utilizando Godot Engine 4, tras decidir abandonar Unity en 2023 debido a los cambios en las políticas de precios que pretendían cobrar por instalación."
  - question: "¿Cuántos jugadores simultáneos alcanzó Slay the Spire 2 en Steam?"
    answer: "El juego batió récords para el estudio alcanzando un pico de 574.638 jugadores simultáneos en su primera semana de Early Access, demostrando la solidez de Godot para proyectos de alto perfil."
  - question: "¿Por qué Mega Crit migró de Unity a Godot a mitad del desarrollo?"
    answer: "Por una cuestión de soberanía tecnológica; Godot, al ser de código abierto y licencia MIT, garantiza que las condiciones de uso no cambiarán retroactivamente, ofreciendo seguridad a largo plazo."
comments: true
---

Slay the Spire 2 entró en Early Access el 5 de marzo en Steam y en menos de una semana ya acumula cifras que normalmente solo se ven en lanzamientos de franquicias con presupuestos de decenas de millones. Según SteamDB, el juego alcanzó un pico de 574.638 jugadores simultáneos el domingo, quedándose a poco más de 12.000 del récord de 587.150 que estableció Hollow Knight: Silksong en 2025. Según estimaciones de Video Game Insights, ya ha vendido alrededor de 2,8 millones de unidades y ha generado unos 55 millones de dólares en ingresos, y todavía tiene 2,4 millones de wishlists pendientes en Steam.

Para poner esos números en contexto: el Slay the Spire original tardó desde su lanzamiento en Early Access en 2017 hasta marzo de 2019, es decir, casi dos años, en superar el millón y medio de unidades vendidas en Steam. La secuela ha igualado prácticamente esa cifra en días, aunque es cierto que el primero ya estableció una base de jugadores enorme que la secuela hereda directamente.

Lo que también se ha mantenido constante es la distribución geográfica de los jugadores. Alrededor del 43% de los compradores están en China, con Asia representando en total más de la mitad del mercado, un 51%. Norteamérica supone aproximadamente un 25% y Europa un 19%. El patrón, casi idéntico al del primer juego, sugiere que la franquicia tiene una fidelidad geográfica sólida y que el mercado chino indie sigue siendo mucho más relevante de lo que a veces se asume.

## El cambio a Godot, y por qué importa

Detrás de estos números hay una historia de desarrollo que vale la pena contar, porque no es habitual.

Mega Crit llevaba más de dos años desarrollando Slay the Spire 2 en Unity cuando en septiembre de 2023 Unity anunció su nueva política de Runtime Fee, que básicamente planteaba cobrar a los desarrolladores una pequeña cantidad cada vez que alguien instalara su juego. El modelo era suficientemente controvertido como para que muchos estudios reaccionaran con dureza, pero Mega Crit fue especialmente directa al respecto. En una carta abierta dirigida a Unity escribieron algo que no tiene mucha traducción elegante: \"We have never made a public statement before. This is how badly you fucked up.\" No es exactamente el lenguaje de una empresa que está considerando sus opciones.

Unity terminó dando marcha atrás en la política, y la situación también acabó con la dimisión del CEO John Riccitiello. Pero Mega Crit mantuvo su decisión: el desarrollo de Slay the Spire 2 migró a Godot. Y eso supuso tirar a la basura dos años de trabajo y empezar de cero en un motor diferente.

{% include youtube-embed.html id="L3pFEk1HPCQ" title="Curso Godot 4 desde cero [01] Cómo Instalar y Configurar" %}

<div class="text-center mt-8 mb-16">
  <a href="https://www.youtube.com/playlist?list=PL5PTqiCIVoiVyA2qed1NE4uKejXEWM60e" target="_blank" rel="noopener" class="btn-primary text-lg px-10 py-4">
    Curso Completo de Godot 4 en Español <i class="fas fa-external-link-alt text-sm opacity-80"></i>
  </a>
</div>

Godot es un motor de código abierto, gratuito y con licencia MIT, lo que significa que los desarrolladores pueden usarlo para cualquier propósito sin pagar ni un euro, y sin miedo a que las condiciones cambien en el futuro porque las decisiones sobre su desarrollo las toma una fundación sin ánimo de lucro, no una empresa con inversores. Esa característica es precisamente lo que lo convierte en una alternativa estructuralmente más segura para estudios independientes que no pueden permitir que su motor de desarrollo cambie las reglas a mitad de un proyecto.

El problema histórico de Godot era que, aunque era perfectamente válido para juegos pequeños o de escala media, había dudas razonables sobre si podía aguantar proyectos más ambiciosos o con necesidades técnicas específicas. La migración de Mega Crit fue una apuesta que muchos en la industria observaron con interés, precisamente porque el resultado respondería esa pregunta de manera bastante definitiva. Y el lanzamiento de Slay the Spire 2 parece una respuesta bastante clara: un juego de esa escala, con cobertura global, 575.000 jugadores simultáneos y un rendimiento técnico sólido, funciona bien en Godot.

No es un caso aislado. Road to Vostok, un shooter de supervivencia en primera persona, también migró a Godot. Re-Logic, los desarrolladores de Terraria, son uno de los patrocinadores principales de la Godot Foundation junto con el propio Mega Crit. El ecosistema alrededor del motor está creciendo de forma sostenida, y el director ejecutivo de la Godot Foundation, Emilio Coppola, reconoció el año pasado que el episodio de Unity generó un aumento considerable en la adopción del motor.

s. Slay the Spire 2 es probablemente el caso más visible hasta ahora de que esa redistribución está produciendo resultados.


