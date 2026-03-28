---
layout: "post"
author: "javo"
date: "2026-03-06 07:27:19 +0100"

thumbnail: "/assets/img/posts/reparar-errores-windows.webp"
title: "¿SFC /scannow no funciona? Guía completa para reparar archivos de Windows"
description: "¿Windows encontró archivos corruptos pero no pudo repararlos? Aprende el orden correcto DISM + SFC para reparar el sistema sin formatear, paso a paso."
excerpt: "¿Windows encontró archivos corruptos pero no pudo repararlos? Descubre el flujo correcto DISM + SFC para solucionar errores del sistema sin formatear."

categories:
- Herramientas

redirect_from:
  - "/reparar-archivos-windows-danados/"
  - "/2026/03/06/reparar-archivos-windows-danados/"

faq:
  - question: "¿Qué hacer si SFC /scannow no funciona?"
    answer: "Si SFC falla, generalmente es porque la imagen maestra del sistema está dañada. Primero debes ejecutar el comando DISM con la opción /RestoreHealth para reparar el almacén de componentes y luego reintentar SFC."
  - question: "¿Cuál es la diferencia entre SFC y DISM?"
    answer: "SFC repara archivos individuales del sistema comparándolos con una copia local sana, mientras que DISM repara la imagen completa del sistema y su almacén maestro de archivos."
  - question: "¿Cómo solucionar el error 0x800f081f en DISM?"
    answer: "Este error ocurre cuando DISM no puede descargar archivos de Windows Update. Se soluciona montando una imagen ISO de Windows y usando el parámetro /Source para indicar la ruta de los archivos locales."
---
Uno de los errores más frustrantes para cualquier usuario de Windows es ejecutar el comando de reparación y encontrarse con el temido mensaje:

> *"Windows Resource Protection found corrupt files but was unable to fix some of them"*

Muchos tutoriales en internet se quedan en la superficie, mostrando solo cómo ejecutar `sfc /scannow` sin explicar **por qué falla** y, lo más importante, qué hacer cuando falla. Esta guía cubre el proceso técnico completo, paso a paso y en el orden correcto.

---

### Entendiendo el problema: la jerarquía de las herramientas de reparación

Windows tiene dos herramientas nativas de reparación que trabajan en niveles distintos:

*   **SFC (System File Checker):** Opera a nivel de **archivos individuales del sistema**. Compara cada archivo del SO con una copia "sana" almacenada en el almacén de componentes de Windows (`WinSxS`). Si detecta diferencias, reemplaza el archivo corrupto por la copia sana.

*   **DISM (Deployment Image Servicing and Management):** Opera a nivel de **imagen del sistema operativo completa**. Es la herramienta que gestiona y repara el propio almacén de componentes desde el que SFC necesita beber.

⚠️ **El error que comete casi todo el mundo:** Ejecutar `sfc /scannow` cuando la propia copia maestra del almacén está corrompida. Es como intentar hacer una fotocopia de un documento cuando la copia original también está borrosa: el resultado no va a ser correcto. En ese escenario, SFC "fallará" aunque el proceso termine sin errores aparentes.

**La solución es respetar el orden jerárquico:** primero reparas la imagen (DISM), y solo después reparas los archivos individuales (SFC).

---

### Flujo de reparación correcto (en CMD como Administrador)

Abre el Símbolo del sistema (`CMD`) con privilegios de administrador. Puedes hacerlo buscando "cmd" en el menú de inicio, haciendo clic derecho y seleccionando *"Ejecutar como administrador"*.

**Paso 1: Verificar el estado de la imagen**

```batch
DISM /Online /Cleanup-Image /CheckHealth
```

Este comando solo comprueba si hay marcas de corrupción ya detectadas, no lanza un análisis completo. Es instantáneo y te da un estado rápido del sistema.

**Paso 2: Escaneo completo de la imagen**

```batch
DISM /Online /Cleanup-Image /ScanHealth
```

Este proceso puede tardar varios minutos. Realiza un análisis profundo del almacén de componentes para detectar inconsistencias aunque no hayan sido marcadas.

**Paso 3: Reparación de la imagen (el paso clave)**

```batch
DISM /Online /Cleanup-Image /RestoreHealth
```

Aquí DISM se conecta a los servidores de Windows Update para descargar las versiones correctas de los componentes dañados y restaurarlos. **Necesitas conexión a internet activa.** Este proceso puede tardar entre 10 y 40 minutos dependiendo de tu conexión y el estado del sistema. No lo interrumpas.

**Paso 4: Ahora sí, ejecutar SFC**

```batch
sfc /scannow
```

Con la imagen ya sana, SFC tiene una fuente fiable desde la que restaurar cualquier archivo dañado. Este proceso también puede tardar varios minutos.

---

### Caso especial: Error 0x800f081f en DISM

Este error aparece cuando DISM no puede conectarse a los servidores de Windows Update o cuando hay un problema de conectividad con el servicio. La solución es proporcionar manualmente una fuente local de archivos:

1.  Monta la imagen `.iso` de tu versión de Windows (descargable desde la web de Microsoft sin coste).
2.  Ejecuta DISM apuntando a la carpeta `sources\install.wim` de la imagen montada:

```batch
DISM /Online /Cleanup-Image /RestoreHealth /Source:D:\sources\install.wim /LimitAccess
```

Cambia `D:` por la letra de unidad donde hayas montado la imagen ISO.

---

### ¿Y si el error persiste en Windows Update tras la reparación?

Algunos errores de actualización (como **0x80070057** o **0x800f0922**) persisten incluso después de que SFC y DISM completan sin incidencias. En esos casos, el problema suele estar en los archivos de la caché de Windows Update:

1.  Para el servicio de Windows Update con: `net stop wuauserv`
2.  Elimina el contenido de la carpeta `C:\Windows\SoftwareDistribution\Download`
3.  Reinicia el servicio: `net start wuauserv`
4.  Vuelve a buscar actualizaciones.

---

### Automatiza este proceso con Leedeo Cleaner

Si este flujo te parece largo o buscas una forma de ejecutarlo en múltiples máquinas sin ir paso a paso, [Leedeo Cleaner]({{ '/projects/leedeo-cleaner/' | relative_url }}) automatiza todo este proceso en el orden correcto: primero DISM, luego SFC, con manejo de errores y logs de lo que ocurrió. Es código abierto, portable (no requiere instalación) y lo puedes auditar línea a línea.

[Saber más sobre Leedeo Cleaner <i class="fas fa-arrow-right"></i>]({{ '/projects/leedeo-cleaner/' | relative_url }}){: .btn-primary }

---

### ¿Cuándo es inevitable el formateo?

La reparación mediante DISM y SFC resuelve la gran mayoría de corrupciones de software. Sin embargo, hay situaciones donde el formateo es la única salida realista:

*   Daño físico en el disco duro (sectores defectuosos que afectan a archivos del sistema).
*   Infecciones por ransomware que han cifrado o reemplazado archivos clave del kernel.
*   Actualizaciones de Windows que han fallado a medias y dejado el sistema en un estado inconsistente irrecuperable con las herramientas anteriores.

Si llegas a ese punto, recuerda **crear una imagen completa del disco con Macrium Reflect** (gratuito) antes de formatear. Te permitirá recuperar datos específicos incluso si algo sale mal después.
