let arreglo_nombres: string[] = new Array(2);
let arreglo_numeros: number[] = new Array(3);

for (let indice: number = 0; indice < 2; indice++) {
  arreglo_nombres[indice] = prompt("Ingrese nombre: ");
}
for (let indice: number = 0; indice < 3; indice++) {
  arreglo_numeros[indice] = Number(prompt("Ingrese numero: "));
}
console.log(arreglo_nombres);
console.log(arreglo_numeros);
