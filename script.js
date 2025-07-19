const cursos = [
  // Ciclo 1
  ["c1", "Fundamentos para el Cálculo", 1, []],
  ["c2", "Comprensión y Producción de Lenguaje I", 1, []],
  ["c3", "Ética y Ciudadanía", 1, []],
  ["c4", "Introduction to International Business", 1, []],
  ["c5", "International Management", 1, []],

  // Ciclo 2
  ["c6", "Cálculo", 2, ["c1"]],
  ["c7", "Comprensión y Producción de Lenguaje II", 2, ["c2"]],
  ["c8", "Fundamentos de las Finanzas", 2, []],
  ["c9", "Macroeconomía", 2, ["c5", "c1"]],
  ["c10", "Inteligencia Comercial Internacional", 2, ["c4"]],
  ["c11", "Mundo empresarial y realidad socioeconómica", 2, ["c5"]],
  ["e2", "Electivo", 2, []],

  // Ciclo 3
  ["c12", "International Business", 3, ["c4"]],
  ["c13", "Introducción a la Contabilidad Financiera", 3, ["c8"]],
  ["c14", "Estadística Descriptiva", 3, ["c6"]],
  ["c15", "Fundamentos de la Investigación Académica", 3, ["c7"]],
  ["c16", "Teoría Microeconómica", 3, ["c1", "c9"]],
  ["c17", "Matemática Financiera", 3, ["c8"]],

  // Ciclo 4
  ["c18", "International Economy", 4, ["c11", "c12"]],
  ["c19", "Comercio Internacional", 4, ["c4", "c16"]],
  ["c20", "Estadística Inferencial", 4, ["c14"]],
  ["c21", "Finanzas Corporativas", 4, ["c13", "c17"]],
  ["c22", "Introducción a la Contabilidad Gerencial", 4, ["c13"]],
  ["c23", "Marketing", 4, ["c16"]],
  ["e4", "Electivo", 4, []],

  // Ciclo 5
  ["c24", "Aduanas", 5, ["c19"]],
  ["c25", "Plan Comercial Internacional", 5, ["c19", "c10", "c23"]],
  ["c26", "Métodos Cuantitativos", 5, ["c14"]],
  ["c27", "Diseño Organizacional y Procesos", 5, ["c4"]],
  ["c28", "Gestión del Capital Humano Global", 5, ["c5"]],
  ["e5", "Electivo", 5, []],

  // Ciclo 6
  ["c29", "Derecho Empresarial y de Comercio Internacional", 6, ["c24"]],
  ["c30", "Costos y Cotizaciones Internacionales", 6, ["c19", "c25"]],
  ["c31", "Análisis e interpretación de EE.FF.", 6, ["c22"]],
  ["c32", "Grandes Ideas de Gerencia", 6, ["c28", "c23"]],
  ["c33", "Administración de Operaciones", 6, ["c26"]],
  ["e6", "Electivo", 6, []],

  // Ciclo 7
  ["c34", "E-Commerce", 7, ["c25"]],
  ["c35", "Comunicación para el liderazgo", 7, ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "e2"]],
  ["c36", "Evaluación de Proyectos de Inversión Privada", 7, ["c21"]],
  ["c37", "Comportamiento Organizacional", 7, ["c28"]],
  ["c38", "Investigación de Mercado Aplicada a los Negocios", 7, ["c23", "c20"]],
  ["e7", "Electivo", 7, []],

  // Ciclo 8
  ["c39", "Transporte Global", 8, ["c19", "c25"]],
  ["c40", "Operaciones Financieras Internacionales", 8, ["c30", "c21"]],
  ["c41", "Integración Económica Internacional", 8, ["c29"]],
  ["c42", "Sistemas de Información de Entornos Digitales", 8, ["c33"]],
  ["c43", "Gestión de proyectos", 8, ["c33"]],
  ["e8", "Electivo", 8, []],

  // Ciclo 9
  ["c44", "International Supply Chain Management", 9, ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","e2","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","e4","c24","c25","c26","c27","c28","e5","c29","c30","c31","c32","c33","e6","c34","c35","c36","c37","c38","e7"]],
  ["c45", "Gerencia Comercial Multinacional", 9, ["c30", "c41", "c25"]],
  ["c46", "Desarrollo de Proyectos Internacionales", 9, ["c30", "c34", "c36", "c38", "c39"]],
  ["c47", "Metodología de la Investigación", 9, ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","e2","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","e4","c24","c25","c26","c27","c28","e5","c29","c30","c31","c32","c33","e6","c34","c35","c36","c37","c38","e7"]],
  ["c48", "Gerencia Estratégica en Organizaciones Conscientes", 9, ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","e2","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","e4","c24","c25","c26","c27","c28","e5","c29","c30","c31","c32","c33","e6","c34","c35","c36","c37","c38","e7"]],
  ["e9", "Electivo", 9, []],
  ["e9b", "Electivo", 9, []],

  // Ciclo 10
  ["c49", "Coyuntura Internacional", 10, ["c39"]],
  ["c50", "Dirección Multinacional", 10, ["c39"]],
  ["c51", "Ética y Responsabilidad Social Empresarial", 10, ["c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","e2","c12","c13","c14","c15","c16","c17","c18","c19","c20","c21","c22","c23","e4","c24","c25","c26","c27","c28","e5","c29","c30","c31","c32","c33","e6","c34","c35","c36","c37","c38","e7"]],
  ["c52", "Seminario de Tesis", 10, ["c47"]],
  ["e10", "Electivo", 10, []],
  ["e10b", "Electivo", 10, []],
];

const estadoCursos = {};

function crearCursoHtml(id, nombre, ciclo) {
  const div = document.createElement("div");
  div.className = "curso bloqueado";
  div.dataset.id = id;
  div.innerText = nombre;
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

function agruparPorCiclo(cursos) {
  const ciclos = {};
  cursos.forEach(curso => {
    const ciclo = curso[2];
    if (!ciclos[ciclo]) ciclos[ciclo] = [];
    ciclos[ciclo].push(curso);
  });
  return ciclos;
}

function init() {
  const mallaDiv = document.getElementById("malla");
  const cursosPorCiclo = agruparPorCiclo(cursos);

  Object.keys(cursosPorCiclo).sort((a, b) => a - b).forEach(cicloNum => {
    const columna = document.createElement("div");
    columna.className = "ciclo";
    const titulo = document.createElement("h2");
    titulo.textContent = `Ciclo ${cicloNum}`;
    columna.appendChild(titulo);

    cursosPorCiclo[cicloNum].forEach(([id, nombre, ciclo, _]) => {
      estadoCursos[id] = false;
      const cursoDiv = crearCursoHtml(id, nombre, ciclo);
      columna.appendChild(cursoDiv);
    });

    mallaDiv.appendChild(columna);
  });

  actualizarCursos();
}

window.onload = init;
