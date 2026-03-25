// assets/js/init.js
// Script ligero síncrono cargado en el <head> para prevenir el parpadeo de contenido (FOUC).
// Se necesita en un archivo externo para cumplir con la estricta Content Security Policy del proyecto.
document.documentElement.classList.add('js-loaded');
