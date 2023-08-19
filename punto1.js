let mes = prompt("Introduce el número del mes (1 al 12):");
mes = parseInt(mes);
if (mes >= 1 && mes <= 12) {
    if (mes === 2) {
        alert("Febrero tiene 28 o 29 días.");
    } else if (mes === 4 || mes === 6 || mes === 8 || mes === 11) {
        alert("Este mes tiene 30 días.");
    } else {
        alert("Este mes tiene 31 días.");
    }
}