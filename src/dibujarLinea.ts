function dibujarLinea(numero: number): string {
  let linea: string = "";

  for (let indice: number = 0; indice < numero; indice++) {
    linea = linea + "-";
  }

  return linea;
}
for (let indice: number = 1; indice <= 10; indice++) {
  let linea: string = dibujarLinea(indice);
  console.log(linea);
}
