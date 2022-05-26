let v1: number[] = new Array(6);
let v2: number[] = new Array(6);
let vSuma: number[] = new Array(6);

for (let indice: number = 0; indice < 6; indice++) {
  v1[indice] = Number(prompt("Ingrese un numero: "));
}

for (let indice: number = 0; indice < 6; indice++) {
  v2[indice] = Number(prompt("Ingrese un numero: "));
}

for (let indice: number = 0; indice < 6; indice++) {
  vSuma[indice] = v1[indice] + v2[indice];
}
for (let indice: number = 0; indice < 6; indice++) {
  console.log(vSuma[indice]);
}
