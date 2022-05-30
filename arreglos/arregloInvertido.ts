let v1: number = [5, 3, 6, 7, 8, 7, 1, 2];

function invertido(v1): void {
  for (let indice: number = v1.length - 1; indice >= 0; indice--) {
    console.log("Los numeros invertidos son: " + v1[indice]);
  }
}

invertido(v1);
