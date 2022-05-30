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

for (let indice: number = 0; indice < 2; indice++) {
  arrayAlumno[indice] = prompt("Ingrese alumno: ");
  arrayNota1[indice] = Number(prompt("Ingrese nota 1: "));
  arrayNota2[indice] = Number(prompt("Ingrese nota 2: "));
  arrayNota3[indice] = Number(prompt("Ingrese nota 3: "));
}

obtenerPromedioAlumno(1);
