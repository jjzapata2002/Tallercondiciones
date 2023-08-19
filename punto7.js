precioiva = 0;
acumPrecio = 0;

for (let i = 0; i < 5; i++) {
  prompt("Ingrese el producto");

  let precioProducto = prompt("Ingrese el precio del producto");
  precioProducto = parseFloat(precioProducto);

  acumPrecio = acumPrecio + precioProducto;
  precioiva = acumPrecio * 1.19;
}

alert(
  "el subtotal sin Iva es: " +
    acumPrecio +
    " y el precio con iva es: " +
    precioiva
);
