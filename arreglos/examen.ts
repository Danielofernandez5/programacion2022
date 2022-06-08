let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let vendedores: string[] = ["Camila", "Franco", "Sofia", "Matias", "Agustina"];
let meses: string[] = ["enero", "febrero", "marzo"];

function ventaMax(arrayVendedor: number[]) {
  let ventaMaxima: number = 0;
  for (let i: number = 0; i < arrayVendedor.length; i++) {
    if (ventaMaxima < arrayVendedor[i])
      ventaMaxima = Math.max(arrayVendedor[i]);
  }
  console.log("la venta maxima es: $"+ ventaMaxima);
}
function ventaMin(arrayVendedor: number[]) {
  let ventaMinima: number = 0;
  for (let i: number = 0; i < arrayVendedor.length; i++) {
    if (ventaMinima  arrayVendedor[i])
      ventaMinima = Math.min(arrayVendedor[i]);
  }
  console.log("la venta minima es: $"+ ventaMinima);
}

ventaMax(vendedor2);
ventaMin(vendedor1);
function mostrarNombre(arrayNombreVendedor: string[]){
  for (let i: number = 0; i < arrayNombreVendedor.length; i++){
    let nombre= arrayNombreVendedor[i]
    
  }
console.log(nombre)
}
mostrarNombre(vendedores)



function mostrarTodo(vendedor:number, vendedores:string){
ventaMax(v);
ventaMin(v);

}
