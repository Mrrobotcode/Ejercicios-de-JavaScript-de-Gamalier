//6- Leer el genero y la edad de una persona si es mujer entra gratis al bar y es hombre entra pagado pero si ambos son menores no entra

let genero = prompt("Ingresa el género. F para Femenina or M para Masculino");
let edad = parseInt(prompt("Ingresa la edad"));

if (genero === "F" && edad >= 18) {
    console.log("Puedes entrar gratis");
} else if (genero === "M" && edad >= 18) {
    console.log("Puede entrar pero tiene que pagar");
} else {
    console.log("Usted es menor de edad. No puede entrar");
}