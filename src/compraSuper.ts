//Funcion que ingresa los productos
function cargarProductos(arrayProducto: string[]): void {
  for (let i: number = 0; i < arrayProducto.length; i++) {
    arrayProducto[i] = prompt("Ingrese producto " + i + " en el carrito");
  }
}
//Funcion que carga los precios de los productos a llevar
function cargarPrecioProducto(arrayPrecioProductos: number[]): void {
  for (let i: number = 0; i < arrayPrecioProductos.length; i++) {
    let precio: number = Number(
      prompt("Ingrese precio del producto " + listaProductos[i])
    );
    while (precio <= 0) {
      precio = Number(
        prompt("Ingrese precio del producto " + listaProductos[i])
      );
    }

    arrayPrecioProductos[i] = precio;
  }
}
//Funcion que carga la cantidad del producto a llevar
function cargarCantidadProductos(arrayCantidadProductos: number[]): void {
  for (let i: number = 0; i < arrayCantidadProductos.length; i++) {
    let cantidad: number = Number(
      prompt(
        "Ingrese cantidad del producto " + listaProductos[i] + " en el carrito"
      )
    );
    while (cantidad <= 0) {
      cantidad = Number(
        prompt(
          "Ingrese cantidad del producto " +
            listaProductos[i] +
            " en el carrito"
        )
      );
    }
    arrayCantidadProductos[i] = cantidad;
  }
}
//Funcion que calcula el precio de todos los productos del carrito
function calcularPrecioTotal(
  arregloPrecios: number[],
  arregloStock: number[]
): number {
  let total: number = 0;
  for (let i: number = 0; i < arregloPrecios.length; i++) {
    total = total + Number(arregloPrecios[i]) * Number(arregloStock[i]);
  }
  return total;
}
//Funcion que imprime el ticket de compra
function imprimirCompra(): void {
  console.log("El detalle de su compra es: ");
  for (let i: number = 0; i < cantidadProductos; i++) {
    console.log(
      stockProductos[i] +
        " unidades de " +
        listaProductos[i] +
        " a un precio unitario de " +
        precioProductos[i] +
        " = $" +
        stockProductos[i] * precioProductos[i]
    );
  }
}

let cantidadProductos: number = Number(
  prsompt("ingrese cantidad de productos a comprar: ")
);
let listaProductos: string[] = new Array(cantidadProductos);
let precioProductos: number[] = new Array(cantidadProductos);
let stockProductos: number[] = new Array(cantidadProductos);
let precioTotal: number = 0;

cargarProductos(listaProductos);
cargarPrecioProducto(precioProductos);
cargarCantidadProductos(stockProductos);
precioTotal = calcularPrecioTotal(precioProductos, stockProductos);

//Calcula si participa por algo e imprime el precio total de la compra
if (precioTotal < 1000) {
  imprimirCompra();
  console.log(
    "El valor total de su compra es de $ " +
      precioTotal +
      " Segui participando en tu proxima compra "
  );
} else if (precioTotal > 3000) {
  imprimirCompra();
  console.log(
    "El valor total de su compra es de $ " +
      precioTotal +
      " Participa por un 0 KM"
  );
} else if (precioTotal > 2000) {
  imprimirCompra();
  console.log(
    "El valor total de su compra es de $ " +
      precioTotal +
      " Participa por una moto 0 KM "
  );
} else if (precioTotal > 1000) {
  imprimirCompra();
  console.log(
    "El valor total de su compra es de $ " +
      precioTotal +
      " Participa por un TV LED "
  );
}
