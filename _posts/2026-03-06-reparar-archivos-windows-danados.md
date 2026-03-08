---
layout: post
title: "¿SFC /scannow no funciona? Guía para reparar archivos de Windows"
date: 2026-03-06
thumbnail: "/assets/img/reparar-errores-windows.webp"
excerpt: "¿Windows encontró archivos corruptos pero no pudo repararlos? Descubre el flujo correcto DISM + SFC para solucionar errores del sistema sin formatear."
---

Uno de los errores más frustrantes para cualquier usuario de Windows es ejecutar el comando de reparación y encontrarse con el temido mensaje: *"Windows Resource Protection found corrupt files but was unable to fix some of them"*. 

Cuando el **SFC /scannow falla**, el sistema entra en un bucle de inestabilidad, pantallazos azules (BSOD) y errores persistentes en **Windows Update**. En esta guía te enseñamos el flujo técnico para recuperar tu PC sin perder datos.

---

### ¿Por qué falla la reparación del sistema?
El comando `sfc /scannow` (System File Checker) funciona comparando tus archivos locales con una "copia maestra" que Windows guarda en su almacén de componentes. 

Si esa copia maestra también está corrupta, el comando no tiene una fuente limpia para realizar la sustitución. Es aquí donde la mayoría de los tutoriales básicos fallan al no explicar el **paso previo necesario**.

---

### El flujo correcto: DISM antes que SFC
Para solucionar errores de integridad de forma definitiva, debemos seguir una jerarquía técnica. Primero debemos sanear la base de datos del sistema antes de intentar reparar los archivos individuales. Ejecuta estos comandos en una consola de **CMD con privilegios de Administrador**:

1. **Saneamiento de Imagen (DISM):**
Este proceso se conecta a los servidores de Microsoft para descargar archivos sanos y reemplazar los corruptos en tu imagen local.
```batch
DISM /Online /Cleanup-Image /RestoreHealth
```

2. **Verificación de Integridad (SFC):**
Una vez que DISM confirma que la imagen está sana, SFC tendrá una fuente fiable para reparar tu instalación.

```batch
sfc /scannow
```

---

### Errores comunes en Windows Update

Muchos de los fallos de actualización (como el error **0x800f081f**) se deben a una base de datos de actualizaciones bloqueada. Si los comandos anteriores no son suficientes, suele ser necesario **reiniciar los servicios de Windows Update** manualmente.

* **Proceso:** Detener el servicio BITS, borrar la carpeta *SoftwareDistribution* y volver a registrar los archivos `.dll` del sistema para forzar una descarga limpia.

---

> ### 🚀 Optimiza tu PC con un solo clic
> 
> 
> Entendemos que navegar por la consola de comandos no es para todos. Por eso desarrollamos **Leedeo Cleaner**, un optimizador de bajo nivel que automatiza este flujo técnico:
> * ✅ **Ciclos Automáticos:** Ejecuta DISM y SFC en el orden correcto.
> * ✅ **Limpieza Profunda:** Purga cachés, logs y archivos temporales.
> * ✅ **Reparación de Windows Update:** Reinicia servicios bloqueados automáticamente.
> * ✅ **Transparente y Portable:** Código abierto, sin instalaciones.
> 
> 
> **[Descargar Leedeo Cleaner en GitHub (Open Source)](https://github.com/Leedeo/Leedeo-Cleaner)**

---

### Mantener tu sistema sano

Mantener la integridad de los archivos de sistema es vital para la seguridad y el rendimiento. No esperes a que un error menor se convierta en un problema grave; una limpieza y reparación periódica con herramientas como **Leedeo Cleaner** es la mejor prevención.
