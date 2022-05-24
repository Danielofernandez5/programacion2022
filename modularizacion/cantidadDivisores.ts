function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDivisores(numIngresado: number): number {
  let cantidad: number = 0;
  let contador: number;
  for (contador = 0; contador <= numIngresado; contador++) {
    if (esMultiplo(numIngresado, contador) === true) {
      cantidad++;
    }
  }
  return cantidad;
}

let numIngresado: number = Number(
  prompt("Ingrese un numero para saber cuantos divisores tiene: ")
);
console.log(
  "El numero: " +
    numIngresado +
    " tiene " +
    cantidadDivisores(numIngresado) +
    " divisores."
);
