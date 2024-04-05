//5- Lee la edad de una persona y determina si es mayor de edad

let persona_edad = parseInt(prompt("Ingresa la edad"));

if (isNaN(persona_edad)) {
    console.log("Error valores no validos");
} else if (persona_edad  >= 18) {
    console.log("La persona es mayor");
} else {
    console.log("Persona es menor");
}