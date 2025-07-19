const cursos = [
  // Formato: [ID, Nombre, Ciclo, [Requisitos (ID)]]
  ["c1", "Fundamentos para el Cálculo", 1, []],
  ["c2", "Comprensión y Producción de Lenguaje I", 1, []],
  ["c3", "Ética y Ciudadanía", 1, []],
  ["c4", "Introduction to International Business", 1, []],
  ["c5", "International Management", 1, []],

  ["c6", "Cálculo", 2, ["c1"]],
  ["c7", "Comprensión y Producción de Lenguaje II", 2, ["c2"]],
  ["c8", "Fundamentos de las Finanzas", 2, []],
  ["c9", "Macroeconomía", 2, ["c5", "c1"]],
  ["c10", "Inteligencia Comercial Internacional", 2, ["c4"]],
  ["c11", "Mundo empresarial y realidad socioeconómica", 2, ["c5"]],
  ["e2", "Electivo 2", 2, []],

  ["c12", "International Business", 3, ["c4"]],
  ["c13", "Introducción a la Contabilidad Financiera", 3, ["c8"]],
  ["c14", "Estadística Descriptiva", 3, ["c6"]],
  ["c15", "Fundamentos de la Investigación Académica", 3, ["c7"]],
  ["c16", "Teoría Microeconómica", 3, ["c1", "c9"]],
  ["c17", "Matemática Financiera", 3, ["c8"]],

  ["c18", "International Economy", 4, ["c11", "c12"]],
  ["c19", "Comercio Internacional", 4, ["c4", "c16"]],
  ["c20", "Estadística Inferencial", 4, ["c14"]],
  ["c21", "Finanzas Corporativas", 4, ["c13", "c17"]],
  ["c22", "Introducción a la Contabilidad Gerencial", 4, ["c13"]],
  ["c23", "Marketing", 4, ["c16"]],
  ["e4", "Electivo 4", 4, []],

  // Puedes continuar el patrón para ciclos 5 al 10 si lo deseas
];

const estadoCursos = {};

function crearCursoHtml(id, nombre, ciclo) {
  const div = document.createElement("div");
  div.className = "curso bloqueado";
  div.dataset.id = id;
  div.innerText = `${nombre}\n(Ciclo ${ciclo})`;
  div.onclick = () => alternarCurso(id);
  return div;
}

function alternarCurso(id) {
  const div = document.querySelector(`.curso[data-id="${id}"]`);
  if (!div || div.classList.contains("bloqueado")) return;

  div.classList.toggle("aprobado");
  estadoCursos[id] = div.classList.contains("aprobado");
  actualizarCursos();
}

function actualizarCursos() {
  cursos.forEach(([id, _, __, requisitos]) => {
    const div = document.querySelector(`.curso[data-id="${id}"]`);
    if (!div) return;
    const aprobados = requisitos.every(req => estadoCursos[req]);
    if (!estadoCursos[id]) {
      div.classList.toggle("bloqueado", !aprobados);
    }
  });
}

function init() {
  const mallaDiv = document.getElementById("malla");
  cursos.forEach(([id, nombre, ciclo, _]) => {
    estadoCursos[id] = false;
    const cursoDiv = crearCursoHtml(id, nombre, ciclo);
    mallaDiv.appendChild(cursoDiv);
  });
  actualizarCursos();
}

window.onload = init;
