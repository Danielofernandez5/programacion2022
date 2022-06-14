function cargarProductos(arrayProducto: string[]): void {
  for (let i: number = 0; i < arrayProducto.length; i++) {
    arrayProducto[i] = prompt("Ingrese producto " + i + " en el carrito");
  }
}

function cargarPrecioProducto(arrayPrecioProductos: number[]): void {
  for (let i: number = 0; i < arrayPrecioProductos.length; i++) {
    let precio: number = Number(
      prompt("Ingrese precio de producto" + listaProductos[i])
    );
    while (precio <= 0) {
      precio = Number(prompt("Ingrese precio de producto" + listaProductos[i]));
    }

    arrayPrecioProductos[i] = precio;
  }
}

function cargarCantidadProductos(arrayCantidadProductos: number[]): void {
  for (let i: number = 0; i < arrayCantidadProductos.length; i++) {
    let cantidad: number = Number(
      prompt(
        "Ingrese cantidad de producto" + listaProductos[i] + " en el carrito"
      )
    );
    while (cantidad <= 0) {
      cantidad = Number(
        prompt(
          "Ingrese cantidad de producto" + listaProductos[i] + " en el carrito"
        )
      );
    }
    arrayCantidadProductos[i] = cantidad;
  }
}

let cantidadProductos: number = Number(
  prompt("ingrese cantidad de productos a comprar: ")
);
let listaProductos: string[] = new Array(cantidadProductos);
let precioProductos: number[] = new Array(cantidadProductos);
let stockProductos: number[] = new Array(cantidadProductos);
let precioTotal: number = 0;
let descuento: number = 0.1;

cargarProductos(listaProductos);
cargarPrecioProducto(precioProductos);
cargarCantidadProductos(stockProductos);
