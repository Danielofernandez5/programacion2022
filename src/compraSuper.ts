function cargarProductos(arrayProducto: string[]): void {
  for (let i: number = 0; i < arrayProducto.length; i++) {
    arrayProducto[i] = prompt("Ingrese prodcuto " + i + " en el carrito");
  }
}

function cargarPrecioProducto(arrayPrecioProductos:number[]):void{
  for (let i: number = 0; i < arrayPrecioProductos.length; i++)
}

let cantidadProductos: number = Number(
  prsompt("ingrese cantidad de productos a comprar: ")
);
let listaProductos: string[] = new Array(cantidadProductos);
let precioProductos: number[] = new Array(cantidadProductos);
let stockProductos: number[] = new Array(cantidadProductos);
let precioTotal: number = 0;
let descuento: number = 0.1;

cargarProductos(listaProductos)