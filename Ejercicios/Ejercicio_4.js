//4- Calcular el promedio de un estudiante y imprimi el resultado en la consola

let p1 =  parseInt(prompt("Ingresa el p1"));
let p2 =  parseInt(prompt("Ingresa el p2"));
let p3 =  parseInt(prompt("Ingresa el p3"));
let p4 =  parseInt(prompt("Ingresa el p4"));

if (isNaN(p1, p2, p3, p4)) {
    console.log("Por favor! Ingrese los valores validos");
} else {
    let promedio = (p1 + p2 + p3 + p4) / 4
    console.log("EL promedio del estudiante durante el año escolar es: " + promedio);
}