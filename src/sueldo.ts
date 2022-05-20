let sueldoActual: number = Number(prompt("Ingrese sueldo actual: "));
let sueldoConAumento: number = 0;
if (sueldoActual > 0 && sueldoActual <= 15000) {
  sueldoConAumento = sueldoActual + sueldoActual * 0.2;
  console.log("El precio final con descuento es : $" + sueldoConAumento);
} else if (sueldoActual > 15000 && sueldoActual <= 20000) {
  sueldoConAumento = sueldoActual + sueldoActual * 0.1;
  console.log("El precio final con descuento es : $" + sueldoConAumento);
} else if (sueldoActual > 20000 && sueldoActual <= 25000) {
  sueldoConAumento = sueldoActual + sueldoActual * 0.1;
  console.log("El precio final con descuento es : $" + sueldoConAumento);
} else if (sueldoActual > 25000) {
  console.log("No hay aumento");
}
