let cantidad = prompt("ingrese la cantidad de huevos que desea comprar");
const huevo = 250;

if (cantidad <= 100) {
  descuento = 3 / 100;
  precioHuevos = huevo * cantidad;
  resultado = descuento * precioHuevos;
  let total = precioHuevos - resultado;
  alert(
    "cantidad a pagar es: " +
      precioHuevos +
      "cantidad a pagar con descuento con el 3% " +
      total
  );
} else if (cantidad >= 101 && cantidad <= 200) {
  descuento = 5 / 100;
  precioHuevos = huevo * cantidad;
  resultado = descuento * precioHuevos;
  let total = precioHuevos - resultado;
  alert(
    "cantidad a pagar es: " +
      precioHuevos +
      "cantidad a pagar con descuento con el 5% " +
      total
  );
} else if (cantidad >= 201 && cantidad <= 300) {
  descuento = 8 / 100;
  precioHuevos = huevo * cantidad;
  resultado = descuento * precioHuevos;
  let total = precioHuevos - resultado;
  alert(
    "cantidad a pagar es: " +
      precioHuevos +
      "cantidad a pagar con descuento con el 8% " +
      total
  );
} else if (cantidad >= 301) {
  descuento = 10 / 100;
  precioHuevos = huevo * cantidad;
  resultado = descuento * precioHuevos;
  let total = precioHuevos - resultado;
  alert(
    "cantidad a pagar es: " +
      precioHuevos +
      "cantidad a pagar con descuento con el 10% " +
      total
  );
}
