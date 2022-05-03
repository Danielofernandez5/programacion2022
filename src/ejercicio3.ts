let numeroUno: number = Number(prompt("ingrese un numero"));
let numeroDos: number = Number(prompt("ingrese otro numero"));

let suma: number = 0;

if (numeroUno > numeroDos) {
  let numeroMayor: number = numeroUno;
  let numeroMenor: number = numeroDos;

  for (let indice: number = numeroMenor; indice <= numeroMayor; indice++) {
    suma = suma + indice;
  }
  console.log(suma);
} else {
  let numeroMayor: number = numeroDos;
  let numeroMenor: number = numeroUno;

  for (let indice: number = numeroMenor; indice <= numeroMayor; indice++) {
    suma = suma + indice;
  }
  console.log(suma);
}
