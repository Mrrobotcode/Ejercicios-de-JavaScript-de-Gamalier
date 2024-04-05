//1- Calcular el area de un cuadrado tomado en cuenta la base*altura

let base_cuadrado = parseInt(prompt("Ingresa la base de cuadrado"));
let altura_cuadrado = parseInt(prompt("Ingresar la altura de cuadrado"));

if (isNaN(base_cuadrado, altura_cuadrado)) {
    console.log("Por favor! Ingrese valores validos");
} else {
    let area_cuadrado = base_cuadrado * altura_cuadrado;
    console.log("El area de el cuadrado es: " + area_cuadrado);
}