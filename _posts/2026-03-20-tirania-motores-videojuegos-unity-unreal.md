---
layout: "post"
author: "javo"
date: "2026-03-20 09:31:08"

thumbnail: "/assets/img/posts/tirania-motores-videojuegos-unity-unreal.webp"
title: "La tiranía de los motores: ¿eres desarrollador de videojuegos o usuario de una herramienta?"
description: "Depender de Unity, Unreal o cualquier motor propietario es una decisión con consecuencias reales. El Runtime Fee de Unity lo dejó claro: las reglas pueden cambiar cuando la empresa quiera."
excerpt: "¿Sabes hacer videojuegos, o sabes usar Unity? No es lo mismo. Cuando tu carrera entera depende de una herramienta que no controlas, no eres un desarrollador independiente. Eres un inquilino."

categories:
- Game Dev
video:
  id: "NWosjlLorEU"
  title: "Por qué aprender Unity o Unreal no te dará trabajo"
  description: "Análisis honesto sobre la realidad del trabajo en la industria del videojuego: costes, rentabilidad y las expectativas que nadie te cuenta."
  upload_date: "2024-11-12"
  duration: "PT9M41S"
faq:
  - question: "¿Qué fue la polémica del Runtime Fee de Unity?"
    answer: "En 2023, Unity intentó cobrar una tarifa por cada instalación de un juego. Esto reveló la fragilidad de depender de motores propietarios, ya que una empresa privada puede cambiar las reglas económicas retroactivamente en cualquier momento."
  - question: "¿Qué diferencia a los motores de código abierto como Godot o Defold?"
    answer: "No pertenecen a una empresa privada, no cobran regalías y su código es público. Esto garantiza que las condiciones de uso nunca cambiarán unilateralmente, ofreciendo una soberanía total al desarrollador sobre su trabajo."
  - question: "¿Es mejor aprender un motor específico para encontrar trabajo?"
    answer: "Más que dominar los menús de un software, la industria valora los fundamentos transferibles (programación, diseño de juegos) y un portafolio sólido de proyectos terminados. Un buen desarrollador puede cambiar de motor en semanas si entiende la base."
comments: true
---

Hay una pregunta que incomoda a mucha gente en el mundo del desarrollo de videojuegos, y precisamente por eso merece hacerse:

**¿Sabes hacer videojuegos, o sabes usar Unity?**

No es lo mismo. Nunca lo ha sido. Pero la industria, las comunidades, los canales de YouTube y los cursos online llevan años tratando ambas cosas como si fueran sinónimos. Y esa confusión tiene consecuencias reales.

Porque cuando toda tu experiencia, todo tu conocimiento y todo tu flujo de trabajo dependen de una sola herramienta que no controlas, que pertenece a una empresa privada y que puede cambiar sus condiciones cuando quiera, no eres un desarrollador independiente. Eres un inquilino. Y los inquilinos están siempre a merced del propietario.

## El día que Unity recordó quién manda

El ejemplo más conocido y más reciente es el de **Unity**.

En **septiembre de 2023**, Unity Technologies anunció lo que llamó **"Runtime Fee"**: un nuevo modelo de precios que cobraría a los desarrolladores una tarifa por cada instalación de sus juegos una vez superados ciertos umbrales de ingresos y descargas.

La reacción fue inmediata y brutal. Desarrolladores de todo el mundo se sintieron traicionados. Estudios que llevaban años construyendo sus proyectos sobre Unity descubrieron de un día para otro que las condiciones económicas de su herramienta de trabajo podían cambiar retroactivamente, afectando incluso a juegos ya publicados.

La polémica fue tan grande que Unity tuvo que dar marcha atrás parcialmente. El CEO **John Riccitiello** acabó dimitiendo semanas después. La empresa modificó el modelo propuesto, suavizó las condiciones y pidió disculpas públicamente.

Pero el daño ya estaba hecho. No por la tarifa en sí, sino por lo que el episodio reveló: **que una empresa privada podía cambiar las reglas del juego para miles de desarrolladores en cualquier momento**. Que años de trabajo construidos sobre una plataforma ajena podían verse amenazados por una decisión corporativa tomada en una sala de juntas a la que ninguno de esos desarrolladores fue invitado.

## Pero no fue la primera vez

Lo del Runtime Fee fue el escándalo más sonado, pero Unity ya tenía un historial de decisiones que erosionaban la confianza de su comunidad.

**La retirada de complementos de la Asset Store.** Unity ha eliminado o restringido complementos de terceros en varias ocasiones para, poco después, ofrecer soluciones propias que cubrían la misma funcionalidad. Un complemento creado por un desarrollador independiente gana tracción dentro del ecosistema, se convierte en una herramienta popular, y al cabo de un tiempo Unity lanza su propia versión integrada, dejando al creador original en una posición imposible.

**Los cambios en los términos de servicio.** En 2023, durante la controversia del Runtime Fee, se descubrió que Unity había eliminado silenciosamente de su repositorio de GitHub una cláusula que permitía a los desarrolladores acogerse a los términos vigentes en el momento en que adoptaron una versión específica del motor. La eliminación de esa cláusula se interpretó como un intento de cerrar la puerta a quienes pudieran argumentar que las nuevas condiciones no les aplicaban. Unity restauró después esa posibilidad bajo presión pública, pero el hecho de que intentara eliminarla discretamente fue, para muchos, más revelador que la propia polémica.

## Unreal Engine: gratis hasta que no lo es

**[Unreal Engine](https://www.unrealengine.com/)** de Epic Games tiene un modelo diferente al de Unity, pero la dependencia es igual de real.

Unreal es gratuito hasta que el juego supera **un millón de dólares en ingresos brutos**. A partir de esa cifra, Epic cobra un **5% de regalías** sobre cada dólar adicional. Un juego que genere 10 millones le debe a Epic 450.000 dólares. Un juego que genere 50 millones, más de 2 millones.

Y las condiciones, como ocurre con cualquier empresa privada, pueden cambiar. Epic tiene todo el derecho legal de modificar su modelo de precios en el futuro. Probablemente no lo haga de forma tan torpe como Unity (aprendieron del error ajeno), pero la posibilidad existe. Cada desarrollador que construye sobre Unreal lo hace asumiendo que las condiciones actuales se mantendrán, sin ninguna garantía contractual de que así sea indefinidamente.

## CryEngine: la historia que pocos recuerdan

**CryEngine**, el motor creado por Crytek, es un ejemplo menos conocido pero igualmente ilustrativo.

Crytek fue en su momento una de las empresas tecnológicas más impresionantes de la industria. Su motor estaba detrás de títulos visualmente revolucionarios como **Crysis** (2007). Pero Crytek tuvo **graves problemas financieros** durante los años 2010. Hubo reportes de empleados que dejaron de recibir sus salarios durante meses. Estudios de la compañía cerraron. La empresa estuvo al borde de la quiebra.

Los desarrolladores que habían construido sus proyectos sobre CryEngine se encontraron ante una pregunta incómoda: ¿qué pasa si la empresa que mantiene tu motor desaparece? ¿Quién da soporte? ¿Quién corrige los errores? Crytek sobrevivió, pero la lección estaba ahí para quien quisiera verla: **una herramienta propietaria es tan fiable como la empresa que la mantiene**, y las empresas pueden tener problemas, cambiar de estrategia, ser adquiridas o simplemente dejar de existir.

## La alternativa del código abierto

Frente a los motores propietarios, existen motores cuyo código fuente es completamente abierto y que no pertenecen a ninguna empresa que pueda cambiar las condiciones unilateralmente. Los dos más relevantes ahora mismo son **[Godot Engine](https://godotengine.org/)** y **[Defold](https://defold.com/)**.

Ambos son gratuitos. Ninguno cobra regalías. Ambos están gestionados por fundaciones sin ánimo de lucro. Y ambos tienen su código fuente disponible públicamente, lo que significa que cualquier persona con los conocimientos técnicos puede modificar el motor sin pedir permiso a nadie ni pagar nada.

No los convierte automáticamente en la mejor opción para todos los proyectos. Godot tiene limitaciones en 3D comparado con Unreal. Defold tiene un ecosistema más pequeño. Ninguno de los dos tiene el respaldo de una empresa multimillonaria financiando desarrollo a gran escala.

Pero lo que sí ofrecen es algo que ningún motor propietario puede garantizar: **la certeza de que las reglas no van a cambiar**. No hay un CEO que pueda decidir cobrar regalías retroactivamente. No hay una junta directiva que pueda retirar funcionalidades para vender su propia alternativa. No hay una empresa que pueda quebrar y llevarse el motor con ella.

## Los fans del motor: cuando la herramienta se convierte en identidad

Hay un fenómeno que cualquiera que pase tiempo en comunidades de desarrollo reconocerá al instante: **la devoción ciega hacia un motor concreto**.

Creadores de contenido que llevan años usando un motor específico y que, cuando alguien les pregunta cuál es el mejor, responden invariablemente que el suyo. No porque hayan evaluado las alternativas de forma objetiva, sino porque han invertido tanto tiempo en aprender esa herramienta que admitir que podría no ser la mejor opción se siente como admitir que esos años fueron un desperdicio.

No lo son, por cierto. Pero la resistencia a explorar alternativas no viene de un análisis técnico: viene del **miedo a la pérdida**. La respuesta es sencilla: esos años enseñaron a crear videojuegos. Los conceptos de diseño, la lógica de programación, la estructura de un proyecto... todo eso es **transferible**. Un desarrollador que entiende los fundamentos puede cambiar de motor en semanas. Uno que solo ha memorizado dónde están los botones de un motor concreto necesita empezar casi desde cero.

Y ahí está la distinción clave: **aprender a hacer videojuegos** versus **aprender a usar una herramienta**. Lo primero sirve para siempre, con cualquier motor, con cualquier tecnología. Lo segundo sirve hasta que esa herramienta cambia, desaparece o deja de ser relevante.

## La falacia del empleo

Hay un argumento que se repite constantemente: *\"Si quieres trabajar en la industria, tienes que aprender Unity\"* (o Unreal, dependiendo de quién lo diga).

Este argumento tiene algo de verdad y mucho de mito. Y es importante entenderlo antes de dedicar años a dominar una herramienta por razones equivocadas:

{% include youtube-embed.html id="NWosjlLorEU" title="Por qué aprender Unity o Unreal no te dará trabajo" %}

La realidad del empleo en la industria del videojuego en 2025-2026 es bastante más cruda de lo que ese argumento sugiere. La industria está atravesando una **crisis de empleo sin precedentes en su historia reciente**:

- **2023**: Más de **10.500 personas** despedidas en la industria del videojuego.
- **2024**: La cifra empeoró. Más de **14.000 despidos** documentados. Microsoft, Sony, EA, Ubisoft, Riot Games, Epic Games, Bungie, Unity Technologies... prácticamente todas las grandes empresas realizaron recortes significativos.
- **2025**: La tendencia no se ha detenido.

En este contexto, decirle a alguien que aprenda un motor específico para \"conseguir trabajo\" es, siendo generosos, una simplificación excesiva. Lo que los estudios buscan cuando contratan no es alguien que sepa dónde están los menús de Unity. Buscan **experiencia demostrable**: proyectos terminados, problemas resueltos, capacidad para adaptarse a herramientas y flujos de trabajo que varían de un estudio a otro.

Un desarrollador con un portafolio sólido de proyectos terminados va a ser un candidato más fuerte que alguien cuyo único argumento es \"sé usar Unity\", independientemente de lo que diga la oferta de trabajo.

## Lo que Flash enseñó y nadie quiso aprender

**Flash** fue durante años la herramienta dominante para crear juegos de navegador. Generaciones enteras de jugadores crecieron en portales como Newgrounds y Miniclip. Cuando Adobe anunció el fin de Flash en 2017 (efectivo en 2020), muchos de esos desarrolladores tuvieron que reinventarse por completo.

Los que entendían los fundamentos de la programación y el diseño de juegos pudieron migrar a otras tecnologías. Los que solo sabían usar Flash se encontraron con que su única habilidad había dejado de tener mercado.

**GameMaker**, considerado durante años el motor ideal para juegos 2D indie, fue adquirido en 2022 por **Opera** (sí, la empresa del navegador), generando incertidumbre sobre su futuro. GameMaker sigue existiendo, pero el recordatorio de que una adquisición corporativa puede cambiar el rumbo de una herramienta de la noche a la mañana quedó claro para su comunidad.

La tecnología cambia. Las empresas cambian. Los modelos de negocio cambian. Lo único que no cambia es la capacidad de un desarrollador para adaptarse, y esa capacidad depende de entender los fundamentos, no de dominar los menús de un programa concreto.

## Lo que sí se puede controlar

- **Aprender los fundamentos.** Programación, diseño de juegos, lógica de software, estructuras de datos. Estas habilidades son transferibles a cualquier motor, cualquier lenguaje y cualquier tecnología. Son la base que hace que cambiar de herramienta sea una cuestión de semanas, no de años.
- **No casarse con un motor.** Usar uno, dominarlo, disfrutarlo, pero ser consciente de que es una herramienta, no una identidad. Tener curiosidad por las alternativas, experimentar con otros motores, entender sus filosofías distintas.
- **Construir un portafolio de proyectos terminados.** Un juego terminado vale más que mil horas de tutoriales. Demuestra capacidad de ejecución, de toma de decisiones, de resolución de problemas. Y lo demuestra independientemente del motor utilizado, porque lo que importa es el resultado y el proceso, no la marca del software.
- **Evaluar los riesgos de cada herramienta.** Antes de empezar un proyecto que va a durar meses o años, pensar qué pasaría si el motor elegido cambia sus condiciones, si la empresa detrás tiene problemas, si aparece una alternativa mejor a mitad de desarrollo.

## La herramienta no es la habilidad

Todo este debate se reduce a una idea que debería ser obvia pero que se pierde constantemente en el ruido de las comunidades online:

**La herramienta no es la habilidad.**

Un carpintero no es bueno porque usa una marca concreta de sierra. Es bueno porque entiende la madera, las uniones, las proporciones y las técnicas. Ponle cualquier sierra funcional en las manos y va a hacer un buen trabajo.

Un desarrollador de videojuegos no es bueno porque use Unity, Unreal, Godot o Defold. Es bueno porque entiende cómo funcionan los juegos, cómo se estructuran los sistemas, cómo se diseñan las experiencias y cómo se resuelven los problemas. Ponle cualquier motor funcional delante y va a producir un buen trabajo.

Quien solo sabe usar una sierra concreta y no entiende la carpintería, tiene un problema el día que esa sierra deja de fabricarse. Quien entiende la carpintería, simplemente cambia de sierra.

La industria del videojuego necesita desarrolladores, no usuarios de software. Y la diferencia entre ambos no la determina el motor que aparece en su perfil de LinkedIn, sino lo que son capaces de hacer cuando ese motor no está disponible.
