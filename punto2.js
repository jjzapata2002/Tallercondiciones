let respuesta = prompt("ingrese el producto que desea comprar");

if (respuesta == "moto" || respuesta == "carro") {
  alert("su descuento sera del 15%");
} else if (respuesta == "bicicleta" || respuesta == "patineta") {
  alert("su descuento sera del 10%");
} else if (respuesta == "scooter electrico") {
  alert("su descuento sera del 5%");
} else {
  alert("ingrese el producto de nuevo");
}
