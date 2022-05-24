function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let num1: number = Number(prompt("Ingrese numero 1"));
let num2: number = Number(prompt("Ingrese numero 2"));

let multiplo: boolean = esMultiplo(num1, num2);

if (multiplo === true) {
  console.log("El numero " + num1 + " es multiplo de: " + num2);
} else {
  console.log("El numero " + num1 + " no es multiplo de: " + num2);
}
