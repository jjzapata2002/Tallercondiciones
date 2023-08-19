contadormayor = 0;
contadormenor = 0;
for (let i = 0; i < 10; i++) {
  let edad = prompt("ingresa tu edad");
  edad = parseInt(edad);

  if (edad >= 18) {
    contadormayor = contadormayor + 1;
  } else {
    contadormenor = contadormenor + 1;
  }
}
alert("El promedio de mayores a 18 es: " + contadormayor + " y el promedio menores a 18 es: " + contadormenor)
