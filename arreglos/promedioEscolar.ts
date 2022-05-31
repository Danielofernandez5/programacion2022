let arrayAlumno: string[] = new Array(4);
let arrayNota1: number[] = new Array(4);
let arrayNota2: number[] = new Array(4);
let arrayNota3: number[] = new Array(4);

function obtenerPromedioAlumno(indice: number): number {
  let promedio =
    (arrayNota1[indice] +
      arrayNota1[indice] +
      arrayNota1[indice] +
      arrayNota3[indice]) /
    3;
  return promedio;
}
function cargarDatos() {
  for (let indice: number = 0; indice < 2; indice++) {
    arrayAlumno[indice] = prompt("Ingrese el alumno: ");
    arrayNota1[indice] = Number(prompt("Ingrese nota 1: "));
    arrayNota2[indice] = Number(prompt("Ingrese nota 2: "));
    arrayNota3[indice] = Number(prompt("Ingrese nota 3: "));
  }
}

function obtenerPosicion(alumno: string): number {
  let posicion: number = -1;
  for (let indice: number = 0; indice < 4; indice++) {
    if (arrayAlumno[indice] === alumno) {
      posicion = indice;
    }
  }
  return posicion;
}

let posicionAlumno: number = obtenerPosicion("B");

cargarDatos();
let alumno: string = prompt("Ingrese alumno: ");
console.log("El promedio del alumno "+alumno+ " es :" obtenerPromedioAlumno(obtenerPosicion(alumno)));
