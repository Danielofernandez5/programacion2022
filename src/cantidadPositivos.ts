let numero: number = Number(prompt("Ingrese un numero"));
let positivos: number = 0;
let suma: number = 0;
let porcentaje: number = 0;

while (numero !== 0) {
  if (numero > 0) {
    positivos++;
  }
  suma++;
  numero = Number(prompt("Ingrese otro numero"));
}
if (suma > 0) {
  porcentaje = (positivos * 100) / suma;
  console.log("El promedio de numeros positivos es: " + porcentaje + " %");
}
