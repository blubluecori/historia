const malla = document.getElementById("malla");
const guardarBtn = document.getElementById("guardarBtn");

const datosMalla = [
  {
    semestre: "Semestre 1",
    ramos: [
      { nombre: "Introducción a la historia", tipo: "teorico" },
      { nombre: "Mundo antiguo", tipo: "teorico" },
      { nombre: "Historia y filosofía de la educación en Chile y Latam", tipo: "teorico" },
      { nombre: "Autorregulación", tipo: "teorico" },
      { nombre: "Introducción a la geografía", tipo: "teorico" },
    ]
  },
  {
    semestre: "Semestre 2",
    ramos: [
      { nombre: "Mundo medieval", tipo: "teorico" },
      { nombre: "Sociedades indígenas de América y Chile", tipo: "teorico" },
      { nombre: "Pensamiento político y estado", tipo: "teorico" },
      { nombre: "Políticas públicas y sistema educativo chileno", tipo: "teorico" },
      { nombre: "Lenguaje y comunicación", tipo: "teorico" },
    ]
  },
  {
    semestre: "Semestre 3",
    ramos: [
      { nombre: "Mundo moderno XVI-XVIII", tipo: "teórico" },
      { nombre: "América colonial XVI-XVIII", tipo: "teórico" },
      { nombre: "Chile colonial XVII-XVIII", tipo: "teórico" },
      { nombre: "Teoría del pensamiento económico", tipo: "teórico" },
      { nombre: "Gestión en el aula", tipo: "teórico" },
      { nombre: "Ética y educación", tipo: "teórico" }
    ]
  },
  {
    semestre: "Semestre 4",
    ramos: [
      { nombre: "Mundo contemporáneo XVIII-XIX", tipo: "teórico" },
      { nombre: "América siglo XIX", tipo: "teórico" },
      { nombre: "Chile siglo XIX", tipo: "teórico" },
      { nombre: "Geografía física y problemáticas medioambientales", tipo: "teórico" },
      { nombre: "Teoría del aprendizaje en el contexto de la adolescencia y cultura juvenil", tipo: "teórico" },
      { nombre: "Práctica inicial", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 5",
    ramos: [
      { nombre: "Mundo contemporáneo XX", tipo: "teórico" },
      { nombre: "América siglo XX", tipo: "teórico" },
      { nombre: "Chile siglo XX", tipo: "teórico" },
      { nombre: "Ciudadanía, democracia y derechos humanos", tipo: "teórico" },
      { nombre: "Gestión curricular para el aprendizaje", tipo: "teórico" },
      { nombre: "Métodos de evaluación educativa", tipo: "teórico" },
      { nombre: "Taller de integración 1", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 6",
    ramos: [
      { nombre: "Historia de Estados Unidos y América Latina", tipo: "teórico" },
      { nombre: "Teoría de la historia geográfica de la población", tipo: "teórico" },
      { nombre: "Planificación curricular y evaluación", tipo: "teórico" },
      { nombre: "Didáctica de la historia", tipo: "teórico" },
      { nombre: "Taller de integración 2", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 7",
    ramos: [
      { nombre: "Metodología de la investigación", tipo: "teórico" },
      { nombre: "Historia del tiempo presente", tipo: "teórico" },
      { nombre: "Geografía de Chile y América", tipo: "teórico" },
      { nombre: "Didáctica de las ciencias sociales", tipo: "teórico" },
      { nombre: "Práctica intermedia", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 8",
    ramos: [
      { nombre: "Seminario de historia mundial", tipo: "teórico" },
      { nombre: "Seminario de historia de Chile", tipo: "teórico" },
      { nombre: "Seminario geografía regional de Valparaíso", tipo: "teórico" },
      { nombre: "Didáctica de la formación ciudadana", tipo: "teórico" },
      { nombre: "Métodos de investigación", tipo: "teórico" },
      { nombre: "Taller reflexión práctica 1", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 9",
    ramos: [
      { nombre: "Monográfico historia I", tipo: "teórico" },
      { nombre: "Seminario de grado I", tipo: "teórico" },
      { nombre: "Práctica profesional", tipo: "práctico" }
    ]
  },
  {
    semestre: "Semestre 10",
    ramos: [
      { nombre: "Monográfico historia II", tipo: "teórico" },
      { nombre: "Elaboración de proyectos educativos", tipo: "teórico" },
      { nombre: "Taller reflexión práctica 2", tipo: "práctico" },
      { nombre: "Seminario de grado II", tipo: "teórico" }
    ]
  }
];

// Cargar estado guardado
const estadoGuardado = JSON.parse(localStorage.getItem("progresoMalla")) || {};

datosMalla.forEach((semestreData, i) => {
  const contenedor = document.createElement("div");
  contenedor.classList.add("semestre");

  const titulo = document.createElement("h2");
  titulo.textContent = semestreData.semestre;
  contenedor.appendChild(titulo);

  semestreData.ramos.forEach((ramo, j) => {
    const divRamo = document.createElement("div");
    divRamo.classList.add("ramo");
    if (ramo.tipo === "practico") {
      divRamo.classList.add("practico");
    }

    const id = `${i}-${j}`;
    divRamo.dataset.id = id;
    divRamo.textContent = ramo.nombre;

    if (estadoGuardado[id]) {
      divRamo.classList.add("completado");
    }

    divRamo.addEventListener("click", () => {
      divRamo.classList.toggle("completado");
    });

    contenedor.appendChild(divRamo);
  });

  malla.appendChild(contenedor);
});

guardarBtn.addEventListener("click", () => {
  const progreso = {};
  document.querySelectorAll(".ramo").forEach(ramo => {
    progreso[ramo.dataset.id] = ramo.classList.contains("completado");
  });
  localStorage.setItem("progresoMalla", JSON.stringify(progreso));
  alert("¡Progreso guardado!");
});
