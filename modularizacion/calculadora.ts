function dibujarLinea() {
  let linea: string = "-";
  for (let index = 0; index <= 5; index++) {
    linea = linea + linea;
  }
  console.log(linea);
}

let numero1: number = Number(prompt("Ingrese el primer numero"));
let numero2: number = Number(prompt("Ingrese el segundo numero"));
let operacion: number = Number(
  prompt("Ingrese 1 para sumar los numeros, 2 para restar los numeros")
);
let resultado: number = 0;
if (operacion === 1) {
  resultado = numero1 + numero2;
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
} else if (operacion === 2) {
  resultado = numero1 - numero2;
  dibujarLinea();
  console.log(resultado);
  dibujarLinea();
}
