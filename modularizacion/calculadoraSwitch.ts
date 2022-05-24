function dibujarLinea() {
  let linea: string = "-";
  for (let index = 0; index <= 5; index++) {
    linea = linea + linea;
  }
  console.log(linea);
}

let numero1: number = Number(prompt("ingrese el primer numero"));

let numero2: number = Number(prompt("ingrese el segundo numero"));

let operacion: number = Number(
  prompt("Eliga operacion: 1-Sumar, 2-Restar, 3-Dividir, 4-Multiplicar")
);
let resultado: number = 0;

switch (operacion) {
  case 1:
    resultado = numero1 + numero2;
    dibujarLinea();
    console.log("El resultado suma es: " + resultado);
    dibujarLinea();
    break;

  case 2:
    resultado = numero1 - numero2;
    dibujarLinea();
    console.log("El resultado resta es: " + resultado);
    dibujarLinea();
    break;

  case 3:
    resultado = numero1 / numero2;
    dibujarLinea();
    console.log("El resultado division es: " + resultado);
    dibujarLinea();
    break;

  case 4:
    resultado = numero1 * numero2;
    dibujarLinea();
    console.log("El resultado de la multiplicacion es: " + resultado);
    dibujarLinea();
    break;

  default:
    dibujarLinea();
    console.log("Operacion erronea, seleccione una opcion valida");
    dibujarLinea();
    break;
}
