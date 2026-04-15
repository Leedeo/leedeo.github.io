(function () {
  var marqueeInner = document.getElementById('marquee-inner');
  if (!marqueeInner) {
    return;
  }
  var testimonials = [
    { user: "@Ferchulandia", msg: "Tutorial rápido y más informativo que cualquier otro video que vi, la verdad te felicito y gracias sos un crack", link: "https://youtu.be/b7xs_ngdjx0", type: "yt", color: "from-violet-500 to-indigo-600" },
    { user: "@Jorfajard", msg: "Bro soy nuevo y me haz simplificado el tema de las colisiones como deseaba muchas gracias 🫂", link: "https://youtu.be/akovXcLp1qE", type: "yt", color: "from-fuchsia-500 to-pink-600" },
    { user: "@davidgonzalez2651", msg: "Por culpa de tus videos estoy empezando a hacer mi primer proyecto oficial en Godot 😂", link: "https://youtu.be/3UMHrrYW6p4", type: "yt", color: "from-blue-500 to-cyan-600" },
    { user: "@gabrielsoto6329", msg: "estos videos son una joya, y los juegos que mostras de fondo son tremenda inspiracion jaja", link: "https://youtu.be/k7-jL0Q1QlA", type: "yt", color: "from-emerald-500 to-teal-600" },
    { user: "@F-NiRaya", msg: "Gracias por los videos !!! ❤❤❤ Muy buena introduccion a las herramientas de godot 🤩", link: "https://youtu.be/pXK-CotnVIM", type: "super", color: "from-amber-400 to-amber-600", tag: "Super Gracias 15€" },
    { user: "@johang-artista", msg: "¡Oye, me encanta! Muchas gracias por el video; aquí tienes tu like. ¡Y quiero decirte que me encanta tu canal y también Godot!", link: "https://youtu.be/3UMHrrYW6p4", type: "yt", color: "from-rose-500 to-orange-500" },
    { user: "@ByDrago11", msg: "Genial, el tener un guión tan grande y así de bien estructurado para que no pase lo de lo demás tutoriales de Godot será grandioso. 💯", link: "https://www.youtube.com/post/UgkxZ5EWzQHDZ7GXGGxBipAmAM58xeMbR_Nd", type: "member", color: "from-green-500 to-emerald-700", tag: "Miembro del Canal" },
    { user: "@insecureup", msg: "Un canal genial, que suerte descubrirlo", link: "https://youtu.be/FORvIiwBXEg", type: "yt", color: "from-indigo-500 to-purple-600" },
    { user: "@cgm1227", msg: "Es genial el contenido que brindas... Gracias por todo tu esfuerzo para hacer esta joya 💎💎💎💎", link: "https://youtu.be/akovXcLp1qE", type: "yt", color: "from-cyan-500 to-blue-600" },
    { user: "@futublock", msg: "genial el tutorial, bien hecho en condiciones y recomendando a antiguos tutoriales para recordar y aprender, me encanta", link: "https://youtu.be/FORvIiwBXEg", type: "yt", color: "from-slate-500 to-slate-700" }
  ];
  // Escapa texto dinámico antes de insertarlo en las tarjetas renderizadas por JS.
  function escapeHtml(str) {
    /* Prevención XSS: escapa caracteres HTML peligrosos */
    if (!str) {
      return '';
    }
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // Duplica el carrusel para mantener el efecto continuo sin saltos visibles.
  /* Técnica de marquee duplication: duplicar contenido para efecto scroll infinito */
  function createCard(t, isDuplicate) {
    var isSuper = t.type === 'super';
    return '<div class="testimonial-card glass-card rounded-3xl p-8 flex flex-col justify-between ' + (isSuper ? 'border-amber-500/30 ring-1 ring-amber-500/10' : '') + '" ' + (isDuplicate ? 'aria-hidden="true"' : '') + '>' +
      '<div>' +
      '<div class="flex items-center justify-between mb-6">' +
      '<div class="flex items-center gap-3">' +
      '<div class="w-10 h-10 bg-gradient-to-br ' + t.color + ' rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">' + t.user.charAt(1) + '</div>' +
      '<span class="font-bold text-slate-200 text-sm tracking-tight">' + escapeHtml(t.user) + '</span>' +
      '</div>' +
      (t.tag ? '<span class="px-2.5 py-1 ' + (isSuper ? 'bg-amber-500/10 text-amber-500' : 'bg-green-500/10 text-green-500') + ' border border-current/20 rounded-full text-[9px] font-black uppercase tracking-widest">' + t.tag + '</span>' : '') +
      '</div>' +
      '<p class="text-slate-300 italic text-[15px] leading-relaxed">"' + escapeHtml(t.msg) + '"</p>' +
      '</div>' +
      '<div class="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">' +
      '<span class="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em]">' + (t.type === 'member' ? 'Comunidad' : 'YouTube') + '</span>' +
      '<a href="' + t.link + '" target="_blank" class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-violet-400 hover:bg-violet-600 hover:text-white transition-all" aria-label="Ver testimonio original de ' + escapeHtml(t.user) + ' en YouTube" rel="noopener" ' + (isDuplicate ? 'tabindex="-1"' : '') + '><i class="fas fa-external-link-alt text-[10px]"></i></a>' +
      '</div>' +
      '</div>';
  }
  var content = testimonials.map(function (t) { return createCard(t, false); }).join('');
  var duplicate = testimonials.map(function (t) { return createCard(t, true); }).join('');
  /* Marquee duplication technique: contenido original + duplicado para scroll infinito */
  marqueeInner.innerHTML = content + duplicate;
})();
