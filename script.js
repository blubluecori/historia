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
  // Puedes seguir agregando los semestres 3 a 10 aquí...
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
