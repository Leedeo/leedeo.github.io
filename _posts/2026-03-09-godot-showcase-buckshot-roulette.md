---
layout: post
categories: [Godot]
tags: [godot, gamedev, indie, steam]
title: "Godot Showcase: Buckshot Roulette y la realidad del desarrollo indie"
date: 2026-03-09 07:34:17 +0100
thumbnail: "/assets/img/posts/buckshot-roulette-godot-showcase-thumbnail.webp"
excerpt: "Mike Klubnika nos cuenta su experiencia desarrollando el éxito indie de 2024 Buckshot Roulette en Godot Engine, y su nuevo proyecto s.p.l.i.t."
video:
  id: "L3pFEk1HPCQ"
  title: "Curso Godot 4 desde Cero [01] - Instalar, Configurar y Renderizadores"
  description: "Primer capítulo del curso de introducción a Godot 4. Aprende a descargar, instalar y configurar el motor desde cero."
  upload_date: "2023-03-06"
  duration: "PT6M27S" # Formato ISO 8601
---

En esta nueva entrega analizando títulos del escenario indie, compartimos la reciente publicación del **Godot Showcase**, donde la fundación ha entrevistado directamente a **Mike Klubnika**, quien nos cuenta su experiencia desarrollando el masivo éxito indie de 2024 *Buckshot Roulette*, así como su proyecto más reciente, *s.p.l.i.t*.

Mike es el más reciente patrocinador Corporate Platinum del Godot Development Fund. Gracias a desarrolladores como él que devuelven a la comunidad parte de su éxito, el motor sigue creciendo para todos. Pero antes de leer su historia y cómo logró todo esto usando herramientas accesibles, si tú también quieres empezar a crear juegos y aprender a usar Godot Engine desde cero, te comparto la primera clase de mi curso gratuito:

<div class="my-12">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.5);">
    <iframe src="https://www.youtube.com/embed/L3pFEk1HPCQ?rel=0" title="Curso Básico de Godot 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
  </div>
</div>

<div class="text-center mt-8 mb-16">
  <a href="https://www.youtube.com/playlist?list=PL5PTqiCIVoiVyA2qed1NE4uKejXEWM60e" target="_blank" rel="noopener" class="btn-primary inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-2xl font-bold transition-all text-lg shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105">
    Fórmate profesionalmente con mi Curso de Godot 4 <i class="fas fa-external-link-alt text-sm opacity-80"></i>
  </a>
</div>

---

### ¿Cómo empezaste en el desarrollo de videojuegos? ¿Y cómo se convirtió en tu trabajo a tiempo completo?

Empecé aprendiendo a hacer arte 3D allá por 2018, es decir, unos 3 años antes de meterme en el desarrollo de juegos en solitario. Eventualmente, me empezó a interesar cada vez más el desarrollo en sí, y decidí trabajar en un juego pequeño durante 2 meses. Una vez que lo publiqué, el efecto fue como una bola de nieve y ya no pude dejar de pensar en hacer juegos.

![Buckshot Roulette Gameplay](/assets/img/posts/buckshot-roulette-gameplay-ruleta-escopeta.webp)

Para finales de 2023 ya había lanzado 16 juegos cortos, y tenía una comunidad decente tanto de jugadores como de creadores de contenido. Todos estos proyectos los desarrollé mientras estudiaba o trabajaba a tiempo completo. Mis mayores inspiraciones eran juegos oscuros con mecánicas, narrativas y apartados visuales extraños; tenía mucha libertad trabajando en mis cosas al no depender de ellas para generar ingresos. 

Ya estaba súper agradecido por mi pequeña comunidad, así que, tras vender *Buckshot Roulette* por un dólar a finales de 2023, me quedé sin palabras cuando el juego se hizo viral y llegó al público masivo. Desde entonces, he podido dedicarme a hacer juegos a tiempo completo.

### Algunos estarán familiarizados con Buckshot Roulette, pero ¿puedes hablarnos de tu nuevo proyecto, s.p.l.i.t.?

*s.p.l.i.t.* es un juego que todavía no sé muy bien cómo describir. Básicamente, es un simulador de hacking con elementos estilo *Typing of The Dead* y una buena dosis de terror existencial. Después de *Buckshot Roulette*, tenía muchas ganas de hacer algo con un mayor peso narrativo, y *s.p.l.i.t.* terminó siendo el proyecto perfecto para eso.

![s.p.l.i.t. Simulator Hacking Godot](/assets/img/posts/split-simulator-hacking-godot-engine.webp)

Por el lado del gameplay, intenté conseguir un estilo de hacking algo "realista", así que la terminal es muy básica, sin efectos visuales llamativos, y el juego utiliza comandos de consola con los que espero que los jugadores ya estén familiarizados.

### ¿Cuáles fueron los mayores retos durante el desarrollo y cómo los superaste?

Decidí desde el principio que el juego se controlaría únicamente con el teclado, lo cual trajo algunos problemas a la hora de idear un esquema de control para navegar por distintas pantallas e interactuar con el entorno. Esa mecánica estilo *Typing of The Dead* acabó funcionando muy bien para esto: el jugador ve sus "pensamientos de acción" en ciertas partes del escenario y tiene que teclearlos para ejecutar la interacción. Además, se veía genial; fue muy divertido enmarcar distintos pensamientos de forma cinematográfica a través de las escenas.

![s.p.l.i.t Terminal Horror Existencial](/assets/img/posts/split-terminal-horror-existencial.webp)

El mayor desafío fue lograr que el juego fuera mínimamente accesible para personas que nunca antes habían tocado una línea de comandos. Originalmente, los puzles de la terminal estaban diseñados de forma que el objetivo final estaba claro, pero el camino para llegar a él no. Los jugadores acababan perdidos, así que hacer más claros los pasos hacia el objetivo ayudó muchísimo. Al final, los puzles quedaron en un punto en el que el jugador tiene una idea bastante clara de su objetivo, y debe traducir los pasos necesarios para cumplirlo en comandos de terminal.

### ¿Cómo descubriste Godot Engine? ¿Qué te hizo elegirlo para tu proyecto?

Descubrí Godot originalmente hacia 2022, pero lo abrí por primera vez a finales de 2023. Antes de eso, había usado Unity durante unos 3 años, pero cuando anunciaron su tarifa por instalación (Runtime Fee), decidí probar a cambiar de motor. Me gustó mucho el hecho de que Godot fuera de código abierto y descubrí que era bastante fácil acostumbrarse a él, ya que comparte muchas similitudes con el flujo de trabajo que yo tenía en Unity.

![Buckshot Roulette Casino Oscuro](/assets/img/posts/buckshot-roulette-mesa-casino-oscuro.webp)

### ¿Qué es lo que más te gusta de Godot?

Es muy rápido, incluso en proyectos grandes. Mi característica favorita tiene que ser el `AnimationPlayer`, que es potentísimo y muy rápido de configurar. Al venir de C#, también me gustó mucho GDScript una vez que me acostumbré; creo que es un lenguaje de programación muy bueno. En general, siento que es súper rápido iterar en diferentes características: apenas hay fricción a la hora de experimentar o ajustar pequeños detalles.

### Durante el desarrollo de tu juego, ¿hubo alguna función que te hubiera gustado ver en Godot?

Estaría genial poder ver una visualización en tiempo real del árbol de escenas remoto directamente en el editor. Algo parecido a Unity, donde si ejecutas el juego, puedes verlo funcionando dentro del propio editor, navegar por él y ajustar variables de los objetos en tiempo real.

![Buckshot Roulette Escena Final](/assets/img/posts/buckshot-roulette-escena-final.webp)

### ¿Qué consejo le darías a los aspirantes a desarrolladores de videojuegos que acaban de empezar en la industria?

Recomendaría encarecidamente hacer un montón de juegos pequeños, cosas que puedas terminar en un par de semanas. El primer juego siempre es el más difícil porque estás haciendo todo por primera vez, pero una vez que pasas por el proceso varias veces, todo empieza a tener mucho más sentido.

En el desarrollo en solitario hay que ponerse muchos sombreros distintos. Lo que realmente me ayudó a entrar en el desarrollo de videojuegos fueron los años que pasé aprendiendo software 3D antes de tocar un motor gráfico. Gracias a eso, ya estaba familiarizado con bastantes cosas dentro de un motor, y lo único que tuve que aprender desde cero fue a programar.

Pero, por lo general, todo es cuestión de tiempo; lo mejor es seguir dándole duro. En mi caso personal, solo empecé a notar mi progreso cuando miré hacia atrás y vi mis primeros juegos, después de apenas un par de meses haciendo proyectos.

---

*(Entrevista original publicada en inglés por el [blog oficial de la Fundación Godot](https://godotengine.org/article/godot-showcase-buckshot-roulette/). Adaptación técnica para la comunidad de Leedeo Studio).*


