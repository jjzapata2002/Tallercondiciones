let cantidadpersonas = prompt("ingrese la cantidad de personas del grupo")
cantidadpersonas = parseInt(cantidadpersonas)

contadorConHijos=0;
contadorSinHijos=0;
cantidad =0;
while (cantidad < cantidadpersonas) {
    cantidad++;
    let tienenHijos = prompt("tiene hijos ?")

    if(tienenHijos === "si"){
        contadorConHijos = contadorConHijos+1
    }else if(tienenHijos === "no"){
        contadorSinHijos = contadorSinHijos+1
    }else{
        alert("ingresa un caracter valido ejemplo: si o no")
    }
}

alert("Grupo de personas con hijos es: "+ contadorConHijos + " Y el grupo de personas sin hijos es: "+ contadorSinHijos);
alert("EL promedio del grupo con hijos es:" + cantidadpersonas/contadorConHijos)