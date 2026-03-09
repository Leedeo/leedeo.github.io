---
layout: post
title: "Godot Showcase: Buckshot Roulette y la realidad del desarrollo indie"
date: 2026-03-09
thumbnail: "/assets/img/buckshot-roulette-godot-showcase-thumbnail.webp"
excerpt: "Mike Klubnika nos cuenta su experiencia desarrollando el éxito indie de 2024 Buckshot Roulette en Godot Engine, y su nuevo proyecto s.p.l.i.t."
---

En esta nueva entrega analizando títulos del escenario indie, compartimos la reciente publicación del **Godot Showcase**, donde la fundación ha entrevistado directamente a **Mike Klubnika**, quien nos cuenta su experiencia desarrollando el masivo éxito indie de 2024 *Buckshot Roulette*, así como su proyecto más reciente, *s.p.l.i.t*.

Mike es el más reciente patrocinador Corporate Platinum del Godot Development Fund. Gracias a desarrolladores como él que devuelven a la comunidad parte de su éxito, el motor sigue creciendo para todos. Pero antes de leer su historia y cómo logró todo esto usando herramientas accesibles, si tú también quieres empezar a crear juegos y aprender a usar Godot Engine desde cero, te comparto la primera clase de mi curso gratuito:

<div class="my-12">
  <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 1rem; box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.5);">
    <iframe src="https://www.youtube.com/embed/L3pFEk1HPCQ" title="Curso Básico de Godot 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
  </div>
</div>

<div class="text-center mt-8 mb-16">
  <a href="https://www.youtube.com/playlist?list=PL5PTqiCIVoiVyA2qed1NE4uKejXEWM60e" target="_blank" rel="noopener" class="btn-action inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 text-white px-8 py-4 rounded-2xl font-bold transition-all text-lg shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-1">
    Fórmate profesionalmente con nuestro Curso de Godot 4 <i class="fas fa-external-link-alt text-sm opacity-80"></i>
  </a>
</div>

---

### ¿Cómo empezaste en el desarrollo de videojuegos? ¿Y cómo se convirtió en tu trabajo a tiempo completo?

Empecé aprendiendo a hacer arte 3D allá por 2018, es decir, unos 3 años antes de entrar en el desarrollo de juegos en solitario. Eventualmente, me empezó a interesar cada vez más el desarrollo creativo, y decidí trabajar en un juego pequeño durante 2 meses. Una vez que lo publiqué, el efecto fue básicamente como una bola de nieve, y no pude dejar de pensar en hacer juegos.

![Buckshot Roulette Gameplay](/assets/img/buckshot-roulette-gameplay-ruleta-escopeta.webp)

Para finales de 2023 ya había lanzado 16 juegos pequeños, y tenía un seguimiento decente tanto de jugadores como de creadores de contenido. Todos estos los desarrollé mientras estudiaba o tenía trabajos a tiempo completo. Mis mayores inspiraciones eran juegos oscuros con visuales, mecánicas y narrativas raras. Había mucha libertad trabajando en cosas cuando no dependía de ellas para generar ganancias o estresarme con la rentabilidad. 

Estaba ya súper agradecido por mi reducida comunidad, así que, tras vender *Buckshot Roulette* por el simbólico precio de un dólar a finales de 2023, me quedé absolutamente perplejo cuando el juego explotó y se hizo fenomenalmente viral (mainstream). Desde entonces, he podido dedicarme a hacer juegos a tiempo completo.

### Algunos estarán familiarizados con Buckshot Roulette, pero ¿puedes hablarnos de tu nuevo proyecto, s.p.l.i.t.?

*s.p.l.i.t.* es un juego que todavía no sé muy bien cómo describir. Básicamente, es un simulador de hacking con elementos estilo *Typing of The Dead* y un montón de terror existencial que se te mete en los huesos. Después de *Buckshot Roulette*, tenía muchísimas ganas de hacer algo más fuertemente centrado en la narrativa, y *s.p.l.i.t.* resultó ser el proyecto perfecto para encauzar eso.

![s.p.l.i.t. Simulator Hacking Godot](/assets/img/split-simulator-hacking-godot-engine.webp)

Por el lado de la jugabilidad, intenté que el "hackeo" fuera un poco más "realista", así que visualmente la terminal de comandos es muy básica, cruda, sin efectos visuales llamativos, y el juego utiliza comandos de consola con los que espero que los jugadores ya estén mínimamente familiarizados.

### ¿Cuáles fueron los mayores retos durante el desarrollo y cómo los superaste?

Decidí desde el inicio que el juego se controlaría exclusivamente aporreando el teclado, lo cual supuso un reto de diseño para descubrir y encajar un esquema de control mediante el que poder navegar por las distintas pantallas e interactuar con el entorno del juego. Esa mecánica tipo *Typing of The Dead* terminó resultando ideal para llevar esto a cabo: el jugador tiene sus "pensamientos de acción" visibles por ciertas partes del ambiente y debe teclearlos para ejecutar de hecho la interacción. Además de funcionalmente útil, el resultado se ve genial visualmente; fue un desafío muy divertido el encuadrar distintos pensamientos de forma muy cinemática a lo largo de las variadas escenas.

![s.p.l.i.t Terminal Horror Existencial](/assets/img/split-terminal-horror-existencial.webp)

El mayor desafío fue hacer que el juego fuera al menos ligeramente accesible para esa parte del público que nunca había escrito sobre una línea de comandos. Originalmente, los puzles de la terminal estaban diseñados a muy alto nivel para que el gran objetivo final fuera claro, pero el camino pormenorizado para llegar a él sencillamente no lo era. Los jugadores terminaban quedándose atascados y desubicados, así que hacer mucho más claros los pasos intermedios ayudó de manera crítica. Los puzles terminaron encontrando su lugar en un punto medio donde el jugador tiene un esquema clarividente de lo que debe lograr, y tiene a su vez que traducir los micro-pasos para cumplirlo a base de comandos de terminal.

### ¿Cómo descubriste Godot Engine? ¿Qué te hizo elegirlo para tu proyecto?

Descubrí la existencia de Godot Engine originalmente a lo largo de 2022, pero lo descargué y abrí por primera vez ya a finales de 2023. Previo a ese momento, yo había utilizado extensamente Unity sumando más de 3 años, pero tras anunciar la famosa y controvertida política del "Runtime Fee", decidí plantearme cambiar a otros motores de juego para probar alternativas. Me agradó fuertemente el hecho incontestable de que Godot al ser *open source* y de código abierto me diera tanta libertad, y descubrí gratamente que adentrarse en sus entresijos resultaba de un aprendizaje relativamente accesible dado que el flujo de trabajo comparte grandes y sustanciales rimas y similitudes con la estructura y esquema natural al que ya me había habituado cuando venía desarrollando con el programa Unity.

![Buckshot Roulette Casino Oscuro](/assets/img/buckshot-roulette-mesa-casino-oscuro.webp)

### ¿Qué es lo que más te gusta de Godot?

La percepción al usarlo es de que todo corre realmente ligero y rápido, esto se mantiene incluso dentro de los grandes proyectos. Además, la funcionalidad de mis favoritas para usar siempre tiene que ser el Nodo *AnimationPlayer*, la manera en que se comporta es de una gran potencia e inmediata de alistar a su puesta a punto. Por mis precedentes habiendo venido de programar en el lenguaje C#, GDScript también supo seducirme gratamente en el momento en el que estuve ya adaptado a él. En lo personal, entiendo que funciona y se desenvuelve como uno de los lenguajes de código más placenteros que se hallan. Y refiriéndome a términos muy amplios entiendo también que la fricción desaparece cuando dedicas iteraciones sobre minúsculas configuraciones u optas por someter el trabajo a las fases más puramente experimentales.

### Mientras hacías el juego, ¿hubo alguna característica que echases en falta y te hubiera gustado ver en Godot?

A un nivel muy funcional y estrictamente para facilitar en enorme cuantía la visualización e interpretación al operar y testear un título, sin lugar a equivocación me encantaría poder poseer sobre el panel gráfico un visionado in-situ y totalmente sincronizado frente al inspector remoto (Remote Scene Tree). Para ubicar exactamente mi percepción me remito análogamente hacia el software Unity; al testear visualizas si quieres exactamente cada elemento que acontece, de qué manera lo cumple y qué magnitudes varían sus valores de tal forma en que si gustas a su vez tú aplicas cambios.

![Buckshot Roulette Escena Final](/assets/img/buckshot-roulette-escena-final.webp)

### ¿Qué consejo clave darías a esos desarrolladores en ciernes recién aterrizados al tablero de la industria?

Como fundamental mandato imperativo recomendaría hacer en abundancia la consecución de minúsculos juegos: un gran bloque en proyectos muy específicos con el estricto techo de que estos pudiesen resultar elaborados de forma nítida en tan solo unas cuantas semanas desde inicio hasta conclusión. Cierta obviedad se respira al plantear y desarrollar esa siempre intimidatoria primera entrega al albergar tantas variables novedosas del conjunto, si logras, en contraposición a estancarte, atravesar por dicho flujo sucesivas veces comprobarás por empírica cuenta y riesgo lo obvio: todo asume para tu comprensión en adelante dimensiones sensatas donde tú diriges el ritmo.

![Godot Showcase Horror Indie](/assets/img/buckshot-roulette-horror-indie-godot.webp)

Concluyendo hacia esa figura del programador y creativo estricto solitario, no hay medias tintas al portar en el desarrollo sombreros tan sumamente diversos para atajar facetas de pura plástica. Mi experiencia anterior curtiéndome al trabajar las destrezas vinculadas al panorama del software y el modelado 3D previos al contacto siquiera de mi conocimiento en relación a cualquier motor enfocado en videojuegos resultaron decisivos a mis espaldas y cimientos. Con la familiaridad asentada mi muro exclusivo recaía por domar la destreza al puro arte referente a las líneas formadas entre algoritmos; pura programación lógica sin otra distracción. 

Considerando lo habitual de lidiar en plazos y frustraciones la moraleja remite a sumar trabajo asimilado sobre el que siempre insistir machaconamente, mi evidencia clara a la constatación recabada referida hacia aquel aparente progreso emergió del mismo transcurso del tiempo retrospectivo a mis minúsculos aportes primitivos al desarrollo inicial tras largos meses echados entre la faena diaria de esculpir de cuantas ideas poseyese una base estable.

---

*(Entrevista original alojada y elaborada en inglés por el [blog oficial de la Fundación Godot](https://godotengine.org/article/godot-showcase-buckshot-roulette/). Adaptado expresamente para la comunidad de Leedeo Studio).*
