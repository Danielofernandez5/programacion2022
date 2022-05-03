let clave: string = prompt("ingrese clave");
let intentos: number = 0;

while (intentos < 2) {
  if (clave === "eureka") {
    console.log("clave correcta");
  } else {
    console.log("clave incorrecta");
  }
  intentos++;
  let clave: string = prompt("ingrese clave");
}
