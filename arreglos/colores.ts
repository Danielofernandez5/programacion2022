let colores: string[] = new Array("azul ", "amarillo ", "rojo ");

colores[3] = "violeta ";
console.log(colores);
//muestra todos los colores en un arreglo
let arregloEnString: string = colores.toString();

console.log(arregloEnString);
//push agrega los elementos al arreglo
colores.push("negro ", "blanco ");
console.log(colores);

//pop elimina el ultimo elemento del arreglo
colores.pop();
console.log(colores);
// .shift devuelve el primer elemento del arreglo
console.log(colores.shift();
//devuelve el arreglo invertido
console.log(colores.reverse());

// sort ordena alfabeticamente el arreglo
console.log(colores.sort());
//slice trae desde donde le indiques
console.log(colores.slice(0, 2));