//2- Calcular el area de un triangulo tomado en cuenta como se hacer

let base_triangulo = parseInt(prompt("Ingresar la base del triangulo"));
let altura_triangulo = parseInt(prompt("Ingresa la altura del triangulo"));

if (isNaN(base_triangulo, altura_triangulo)) {
    console.log("Por favor! Ingrese valores validos");
} else {
    let area_triangulo = base_triangulo * altura_triangulo;
    console.log("El area de el triangulo es: " + area_triangulo);
}