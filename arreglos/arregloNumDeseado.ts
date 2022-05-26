function ingresarNumeros() {
  for (let indice: number = 0; indice < 5; indice++) {
    arregloNumeros[indice] = Number(prompt("Ingrese un numero: "));
  }
}

let arregloNumeros: number[] = new Array(5);

function mostrarNumeros() {
  for (let indice: number = 0; indice < 5; indice++) {
    console.log(arregloNumeros[indice]);
  }
}

ingresarNumeros();
mostrarNumeros();
