let medicamento1 = parseInt(prompt("Ingrese la cantidad de existencias del MEDICAMENTO 1:"));
while (isNaN(medicamento1) || medicamento1 < 0) {
    medicamento1 = parseInt(prompt("Ingrese un número válido (mayor o igual a 0) para el MEDICAMENTO 1:"));
}

let medicamento2 = parseInt(prompt("Ingrese la cantidad de existencias del MEDICAMENTO 2:"));
while (isNaN(medicamento2) || medicamento2 < 0) {
    medicamento2 = parseInt(prompt("Ingrese un número válido (mayor o igual a 0) para el MEDICAMENTO 2:"));
}

let pacientesAtendidos= 0;
let pacientesConMedicamentos1= 0;
let pacientesConMedicamentos2= 0;

while (medicamento1 > 0 || medicamento2 >0 ){
    let sistolica = parseInt(prompt("Ingrese la presion sistolica del paciente"));
    while(isNaN(sistolica)){
        sistolica =parseInt(prompt(" Valor invalido. Ingrese un numero para la presion sistolica"))
    }
    let diastolica = parseInt(prompt("Ingrese la presion diastolica del paciente"));
    while(isNaN(diastolica)){
        diastolica =parseInt(prompt(" Valor invalido. Ingrese un numero para la presion diastolica"))
    }
    let categoria = " ";
    let tipoMedicamento =  0;
    let dosis = 0;

    if (sistolica < 69 && diastolica < 48){
        categoria = " Hipotension";
        tipoMedicamento = 2;
        dosis = 6;

    }else if (sistolica >= 69 && sistolica <=98 && diastolica >= 48 && diastolica <= 66){
        categoria = "Optima";
        tipoMedicamento = 0;
        dosis = 0;
    }else if (sistolica > 98 && sistolica <=143 && diastolica > 66 && diastolica <= 92){
    categoria = "Comun";
    tipoMedicamento = 0;
    dosis = 0;
    
    }else if (sistolica > 143 && sistolica <=177 && diastolica > 92 && diastolica <= 124){
    categoria = "Pre HTA";
    tipoMedicamento = 1;
    dosis = 6;
    }else if (sistolica > 177 && sistolica <=198 && diastolica > 124 && diastolica <= 142){
    categoria = "HTAG1";
    tipoMedicamento = 1;
    dosis = 10;
    }else if (sistolica > 198 && sistolica <=246 && diastolica > 142 && diastolica <= 169){
    categoria = "HTAG2";
    tipoMedicamento = 1;
    dosis = 18; 
    }else if (sistolica > 246 && diastolica > 169){
    categoria = "HTAG3";
    tipoMedicamento = 1;
    dosis = 35;
    }else if (sistolica > 162 && diastolica < 86){
    categoria = "HTASS";
    tipoMedicamento = 1;
    dosis = 17;
    }else{
        categoria = "Sin clasificar";
        tipoMedicamento= 0;
        dosis = 0;
    }
        
    pacientesAtendidos++;

    if (tipoMedicamento === 1 && medicamento1 >=dosis){
        medicamento1 -= dosis;
        pacientesConMedicamentos1++;

    }else if(tipoMedicamento === 2 && medicamento2 >=dosis){
        medicamento2 -= dosis;
        pacientesConMedicamentos2++;
    }else if(tipoMedicamento !== 0){
        document.write("No hay suficiente medicamento para seguir atendiendo 😔");
        break;
    }    

    let continuar= prompt("Gustaria ingresaar otro paciente? (si/no): ");
    if (continuar.toLowerCase() !== "si"){

    break;
    }
}

let porcentajeMedicamento1 = (pacientesConMedicamentos1 / pacientesAtendidos ) *100;
let porcentajeMedicamento2 = (pacientesConMedicamentos2 / pacientesAtendidos ) *100;

document.write("<h2>📋 Resumen de la Jornada Médica</h2>");
document.write("<p><strong>Total de pacientes atendidos:</strong> " + pacientesAtendidos + "</p>");
document.write("<p><strong>Pacientes con Medicamento 1:</strong> " + pacientesConMedicamentos1 + " (" + porcentajeMedicamento1.toFixed(2) + "%)</p>");
document.write("<p><strong>Pacientes con Medicamento 2:</strong> " + pacientesConMedicamentos2 + " (" + porcentajeMedicamento2.toFixed(2) + "%)</p>");

if (pacientesConMedicamentos1 === 0 && pacientesConMedicamentos2 === 0) {
    document.write("<p><strong>No se entregaron medicamentos durante la jornada.</strong></p>");
}




