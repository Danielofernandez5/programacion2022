function mostrar_nombres(longitud_arreglo: number) {
  for (let indice: number = 0; indice < longitud_arreglo; indice++) {
    console.log(arreglo_nombres[indice]);
  }
}
// ingresa una longitud del arreglo
let longitud_arreglo: number = Number(prompt("Ingrese longitud del arreglo: "));
let arreglo_nombres: string[] = new Array(longitud_arreglo);
// ingresa nombres segun longitud dada
for (let indice: number = 0; indice < longitud_arreglo; indice++) {
  arreglo_nombres[indice] = prompt("Ingrese nombre: ");
}

mostrar_nombres(longitud_arreglo);
