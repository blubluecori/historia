const ramos = [
  // Semestre 1
  { nombre: 'Introducción a la historia', semestre: 1, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Mundo antiguo', semestre: 1, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Historia y filosofía de la educación en chile y latam', semestre: 1, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Autorregulación', semestre: 1, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Introducción a la geografía', semestre: 1, tipo: 'teórico', prerrequisitos: [] },

  // Semestre 2
  { nombre: 'Mundo medieval', semestre: 2, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Sociedades indígenas de américa y chile', semestre: 2, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Pensamiento político y estado', semestre: 2, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Políticas públicas y sistema educativo chileno', semestre: 2, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Lenguaje y comunicación', semestre: 2, tipo: 'teórico', prerrequisitos: [] },

  // Semestre 3
  { nombre: 'Mundo moderno XVI-XVIII', semestre: 3, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'América colonial XVI-XVIII', semestre: 3, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Chile colonial XVII-XVIII', semestre: 3, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Teoría del pensamiento económico', semestre: 3, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Gestión en el aula', semestre: 3, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Ética y educación', semestre: 3, tipo: 'teórico', prerrequisitos: [] },

  // Semestre 4
  { nombre: 'Mundo contemporáneo XVIII-XIX', semestre: 4, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'América siglo XIX', semestre: 4, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Chile siglo XIX', semestre: 4, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Geografía física y problemáticas medioambientales', semestre: 4, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Teoría del aprendizaje en el contexto de la adolescencia y cultura juvenil', semestre: 4, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Práctica inicial', semestre: 4, tipo: 'práctico', prerrequisitos: ['Historia y filosofía de la educación en chile y latam', 'Políticas públicas y sistema educativo chileno'] },

  // Semestre 5
  { nombre: 'Mundo contemporáneo XX', semestre: 5, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'América siglo XX', semestre: 5, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Chile siglo XX', semestre: 5, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Ciudadanía, democracia y derechos humanos', semestre: 5, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Gestión curricular para el aprendizaje', semestre: 5, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Métodos de evaluación educativa', semestre: 5, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Taller de integración 1', semestre: 5, tipo: 'práctico', prerrequisitos: [] },

  // Semestre 6
  { nombre: 'Historia de estados unidos y américa latina', semestre: 6, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Teoría de la historia geográfica de la población y de los asentamientos humanos', semestre: 6, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Planificación curricular y evaluación para la historia y ciencias sociales', semestre: 6, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Didáctica de la historia', semestre: 6, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Taller de integración 2', semestre: 6, tipo: 'práctico', prerrequisitos: ['Taller de integración 1'] },

  // Semestre 7
  { nombre: 'Metodología de la investigación en ciencias sociales', semestre: 7, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Historia del tiempo presente', semestre: 7, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Geografía de chile y américa', semestre: 7, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Didáctica de las ciencias sociales', semestre: 7, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Práctica intermedia', semestre: 7, tipo: 'práctico', prerrequisitos: ['Práctica inicial'] },

  // Semestre 8
  { nombre: 'Seminario de historia mundial', semestre: 8, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Seminario de historia de chile', semestre: 8, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Seminario de geografía regional de Valparaíso', semestre: 8, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Didáctica de la formación ciudadana', semestre: 8, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Métodos de investigación', semestre: 8, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Taller de reflexión sobre la práctica 1', semestre: 8, tipo: 'teórico', prerrequisitos: ['Práctica inicial', 'Práctica intermedia'] },

  // Semestre 9
  { nombre: 'Monográfico historia I', semestre: 9, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Seminario de grado I', semestre: 9, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Práctica profesional', semestre: 9, tipo: 'práctico', prerrequisitos: ['Práctica inicial', 'Práctica intermedia', 'Taller de reflexión sobre la práctica 1'] },

  // Semestre 10
  { nombre: 'Monográfico historia II', semestre: 10, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Elaboración de proyectos educativos en formación ciudadana', semestre: 10, tipo: 'teórico', prerrequisitos: [] },
  { nombre: 'Taller de reflexión sobre la práctica 2', semestre: 10, tipo: 'teórico', prerrequisitos: ['Taller de reflexión sobre la práctica 1', 'Práctica profesional'] },
  { nombre: 'Seminario de grado II', semestre: 10, tipo: 'teórico', prerrequisitos: [] }
];

let completados = JSON.parse(localStorage.getItem('ramosCompletados') || '[]');

function guardar() {
  localStorage.setItem('ramosCompletados', JSON.stringify(completados));
}

function toggleRamo(nombre) {
  const ramo = ramos.find(r => r.nombre === nombre);
  const faltan = ramo.prerrequisitos.filter(p => !completados.includes(p));

  if (completados.includes(nombre)) {
    completados = completados.filter(n => n !== nombre);
  } else if (faltan.length === 0) {
    completados.push(nombre);
  } else {
    alert(`No puedes completar "${nombre}" porque te faltan: ${faltan.join(', ')}`);
  }

  guardar();
  renderMalla();
}

function reiniciar() {
  if (confirm("¿Deseas reiniciar todo el progreso?")) {
    completados = [];
    guardar();
    renderMalla();
  }
}

function renderMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  ramos.forEach(ramo => {
    const completado = completados.includes(ramo.nombre);
    const disponible = ramo.prerrequisitos.every(p => completados.includes(p));
    const bloqueado = !disponible && !completado;

    const div = document.createElement('div');
    div.className = 'ramo';
    if (ramo.tipo === 'práctico') div.classList.add('practico');
    if (completado) div.classList.add('completado');
    if (bloqueado) div.classList.add('bloqueado');

    div.textContent = ramo.nombre;
    if (!bloqueado) {
      div.onclick = () => toggleRamo(ramo.nombre);
    }

    contenedor.appendChild(div);
  });
}

renderMalla();
