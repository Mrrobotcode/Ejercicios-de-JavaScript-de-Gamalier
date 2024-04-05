//3- Calcular la edad de una persona tomado en cuenta el año actual y el año de nacimiento

let año_nacimiento = parseInt(prompt("ingresa tu fecha nacimiento"));

if (isNaN(año_nacimiento)) {
    console.log("Por favor, ingresa un año válido.");
} else {
    let año_actual = 2024;
    let edad_persona = año_actual - año_nacimiento;
    console.log("Tu edad es: " + edad_persona);
}