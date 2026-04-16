document.addEventListener('DOMContentLoaded', () => {
  let selectedFee = 0.30;

  // Evitar errores si no estamos en la página correcta
  if (!document.getElementById('precio')) return;

  // Platform selection
  document.querySelectorAll('.tag-platform').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tag-platform').forEach(b => b.classList.remove('selected'));
      const target = e.currentTarget;
      target.classList.add('selected');
      selectedFee = parseFloat(target.dataset.fee);
    });
  });

  // Sync inputs Step 2
  const tarifaRange = document.getElementById('tarifa-range');
  const tarifaInput = document.getElementById('tarifa');
  const horasInput = document.getElementById('horas');
  
  if (tarifaRange) {
    tarifaRange.addEventListener('input', (e) => {
      if(tarifaInput) tarifaInput.value = e.target.value;
      updateTimeCost();
    });
  }
  if (tarifaInput) {
    tarifaInput.addEventListener('input', (e) => {
      if(tarifaRange) tarifaRange.value = Math.min(e.target.value, 100);
      updateTimeCost();
    });
  }

  if (horasInput) {
    horasInput.addEventListener('input', updateTimeCost);
  }

  function updateTimeCost() {
    if (!horasInput || !tarifaInput) return;
    const h = parseFloat(horasInput.value) || 0;
    const t = parseFloat(tarifaInput.value) || 0;
    const total = h * t;
    const dpTotal = document.getElementById('coste-tiempo-display');
    const dpH = document.getElementById('horas-display');
    const dpT = document.getElementById('tarifa-display');
    if (dpTotal) dpTotal.textContent = fmt(total);
    if (dpH) dpH.textContent = h;
    if (dpT) dpT.textContent = t;
  }

  // Sync inputs Step 4
  const impuestoRange = document.getElementById('impuesto-range');
  const impuestoInput = document.getElementById('impuestos');
  if (impuestoRange) {
    impuestoRange.addEventListener('input', (e) => {
      if (impuestoInput) impuestoInput.value = e.target.value;
    });
  }
  if (impuestoInput) {
    impuestoInput.addEventListener('input', (e) => {
      if (impuestoRange) impuestoRange.value = Math.min(e.target.value, 50);
    });
  }

  // Navigation steps
  document.querySelectorAll('[data-step]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const step = parseInt(e.currentTarget.dataset.step);
      goToStep(step);
    });
  });

  function goToStep(n) {
    for (let i = 1; i <= 5; i++) {
        const stepEl = document.getElementById('step-' + i);
        if (stepEl) stepEl.classList.remove('active');
        
        const dot = document.getElementById('dot-' + i);
        if (dot) {
          if (i < n) { dot.className = 'step-indicator-dot done'; }
          else if (i === n) { dot.className = 'step-indicator-dot current'; }
          else { dot.className = 'step-indicator-dot'; }
        }
    }
    const targetStep = document.getElementById('step-' + n);
    if (targetStep) targetStep.classList.add('active');
    
    // Scroll
    const card = document.querySelector('.static-glass-card');
    if (card) {
        window.scrollTo({ top: card.offsetTop - 100, behavior: 'smooth' });
    }
  }

  // Calculo
  const btnCalcular = document.getElementById('btn-calcular');
  if (btnCalcular) {
    btnCalcular.addEventListener('click', calcular);
  }

  // Reset
  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      goToStep(1);
      resetCalc();
    });
  }

  function resetCalc() {
    document.getElementById('precio').value = '14.99';
    document.getElementById('horas').value = '500';
    document.getElementById('tarifa').value = '20';
    if(document.getElementById('tarifa-range')) document.getElementById('tarifa-range').value = '20';
    document.getElementById('assets').value = '0';
    document.getElementById('freelancers').value = '0';
    document.getElementById('software').value = '0';
    document.getElementById('marketing').value = '0';
    document.getElementById('impuestos').value = '21';
    if(document.getElementById('impuesto-range')) document.getElementById('impuesto-range').value = '21';
    document.getElementById('copias-estimadas').value = '500';
    
    const steamD = document.getElementById('steam-direct');
    if(steamD) steamD.checked = true;
    
    selectedFee = 0.30;
    document.querySelectorAll('.tag-platform').forEach((b,i) => b.classList.toggle('selected', i===0));
    updateTimeCost();
  }

  function fmt(n) {
    return '$' + new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(n) + ' USD';
  }

  function calcular() {
    const precio          = parseFloat(document.getElementById('precio').value) || 0;
    const platformFee     = selectedFee;
    const steamDirect     = (document.getElementById('steam-direct') && document.getElementById('steam-direct').checked) ? 100 : 0;
    const horas           = parseFloat(document.getElementById('horas').value) || 0;
    const tarifa          = parseFloat(document.getElementById('tarifa').value) || 0;
    const assets          = parseFloat(document.getElementById('assets').value) || 0;
    const freelancers     = parseFloat(document.getElementById('freelancers').value) || 0;
    const software        = parseFloat(document.getElementById('software').value) || 0;
    const marketing       = parseFloat(document.getElementById('marketing').value) || 0;
    const taxRate         = (parseFloat(document.getElementById('impuestos').value) || 0) / 100;
    const refundRate      = 0.03;
    const copias          = parseInt(document.getElementById('copias-estimadas').value) || 0;

    const costeTiempo   = horas * tarifa;
    const gastosExt     = assets + freelancers + software + marketing + steamDirect;
    const inversion     = costeTiempo + gastosExt;

    const bruto         = precio;
    const despTienda    = bruto * (1 - platformFee);
    const despReembolso = despTienda * (1 - refundRate);
    const despImpuestos = despReembolso * (1 - taxRate);
    const netoCopia     = despImpuestos;

    const breakEven     = netoCopia > 0 ? Math.ceil(inversion / netoCopia) : Infinity;

    const ingresosEst   = copias * netoCopia;
    const resultadoNeto = ingresosEst - inversion;

    let pct = breakEven > 0 && isFinite(breakEven) ? Math.min((copias / breakEven) * 100, 100) : 0;

    document.getElementById('be-copias').textContent = isFinite(breakEven) ? breakEven.toLocaleString('es-ES') : '∞';
    document.getElementById('be-copias-2').textContent = copias.toLocaleString('es-ES');
    document.getElementById('progress-bar').style.width = pct + '%';
    document.getElementById('progress-label').textContent = copias.toLocaleString('es-ES') + ' copias estimadas';
    document.getElementById('ingreso-copia').textContent = fmt(netoCopia);
    document.getElementById('inversion-total-display').textContent = fmt(inversion);

    const rows = [
      { name: 'Precio de venta (x' + copias + ' copias)', val: fmt(precio * copias), cls: '' },
      { name: 'Comisión tienda (' + Math.round(platformFee*100) + '%)', val: '-' + fmt(precio * platformFee * copias), cls: 'neg' },
      { name: 'Reserva reembolsos (3%)', val: '-' + fmt(precio * (1-platformFee) * refundRate * copias), cls: 'neg' },
      { name: 'Impuestos (' + Math.round(taxRate*100) + '%)', val: '-' + fmt(precio * (1-platformFee) * (1-refundRate) * taxRate * copias), cls: 'neg' },
      { name: 'Ingresos netos', val: fmt(ingresosEst), cls: 'pos' },
      { name: 'Tu tiempo', val: '-' + fmt(costeTiempo), cls: 'neg' },
      { name: 'Gastos externos', val: '-' + fmt(gastosExt), cls: 'neg' },
    ];
    
    document.getElementById('breakdown-rows').innerHTML = rows.map(r =>
      r.name.includes('───') ? `<div class="py-1"><div class="h-px w-full" style="background:rgba(255,255,255,0.05)"></div></div>` :
      `<div class="breakdown-row"><span class="name">${r.name}</span><span class="val ${r.cls}">${r.val}</span></div>`
    ).join('');

    const netoEl = document.getElementById('resultado-neto-val');
    netoEl.textContent = fmt(resultadoNeto);
    netoEl.className = 'text-xl font-black ' + (resultadoNeto >= 0 ? 'text-green-400' : 'text-red-400');

    const vbox = document.getElementById('verdict-box');
    vbox.className = 'verdict-box mb-8';
    
    if (!isFinite(breakEven)) {
      vbox.classList.add('red');
      document.getElementById('verdict-emoji').textContent = '⚠️';
      document.getElementById('verdict-title').textContent = 'El precio es demasiado bajo';
      document.getElementById('verdict-desc').textContent = 'Con este precio y comisión, nunca hay ganancias. Sube el precio.';
    } else if (resultadoNeto >= 0) {
      vbox.classList.add('green');
      document.getElementById('verdict-emoji').textContent = '✅';
      document.getElementById('verdict-title').textContent = 'Viable con tu estimación';
      document.getElementById('verdict-desc').textContent = 'Con ' + copias.toLocaleString('es-ES') + ' copias ganas ' + fmt(resultadoNeto) + '. El break-even: ' + breakEven.toLocaleString('es-ES') + ' copias.';
    } else if (copias >= breakEven * 0.5) {
      vbox.classList.add('yellow');
      document.getElementById('verdict-emoji').textContent = '⚡';
      document.getElementById('verdict-title').textContent = 'Viable, faltan ventas';
      document.getElementById('verdict-desc').textContent = 'Con ' + copias.toLocaleString('es-ES') + ' copias alcanzas el ' + Math.round(pct) + '% del break-even (' + breakEven.toLocaleString('es-ES') + ').';
    } else {
      vbox.classList.add('red');
      document.getElementById('verdict-emoji').textContent = '🔴';
      document.getElementById('verdict-title').textContent = 'Difícil bajo esta estimación';
      document.getElementById('verdict-desc').textContent = 'Necesitas ' + breakEven.toLocaleString('es-ES') + ' copias para no perder dinero. Estás en ' + Math.round(pct) + '%.';
    }

    const edu = [];
    if (platformFee === 0.30) {
      edu.push('<p><strong class="text-slate-300">Steam/Tienda (30%):</strong> Ésta es la cuota estándar mayoritaria en el mercado.</p>');
    }
    if (taxRate > 0) {
      edu.push('<p><strong class="text-slate-300">Impuestos (IRPF/Sociedades):</strong> Estimación para evitar sustos de tesorería.</p>');
    }
    edu.push('<p><strong class="text-slate-300">Reembolsos (3%):</strong> Un colchón de seguridad de las ventas brutas devueltas.</p>');
    document.getElementById('educational-text').innerHTML = edu.join('');

    goToStep(5);
  }

  // Init start
  updateTimeCost();
});
