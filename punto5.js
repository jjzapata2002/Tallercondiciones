let cantidadEstudiantes = prompt("ingrese la cantidad de estudiantes")
cantidadEstudiantes = parseInt(cantidadEstudiantes)

alert(cantidadEstudiantes);

acumEdadesMayores = 0;
acumEdadesMenores = 0;
promedioMayores=0;
promedioMEnores=0;
contadormayor=0;
contadormenor=0;
promedioTotalMayores=0;
promedioTotalMenores=0;

for (let i = 0; i < cantidadEstudiantes; i++) {
    let edades = prompt("Ingrese su edad")
    edades = parseInt(edades)

    if(edades >= 21){
        acumEdadesMayores = acumEdadesMayores+edades
        contadormayor= contadormayor+1
        promedioTotalMayores = acumEdadesMayores/contadormayor

    }else {
        acumEdadesMenores = acumEdadesMenores+edades
        contadormenor = contadormenor+1
        promedioTotalMenores = acumEdadesMenores/contadormenor
    } 
}
alert("El promedio de mayores a 21 es: " + promedioTotalMayores + " y el promedio menores a 21 es: " + promedioTotalMenores);


