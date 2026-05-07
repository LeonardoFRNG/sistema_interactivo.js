
//pedimos el nombre al usario y lo guardamos en una variable
let nombre = prompt("Cual es tu nombre?");

//pedimos la edad al usuario y la guardamos en una variable, promt siempre devuelve un string, por lo que si queremos usar la edad como un numero, debemos convertirla a numero usando parseInt o parseFloat
let edad = Number(prompt("Cuales tu edad?"));

//isNaN es una funcion que nos permite verificar si un valor es un numero o no, devuelve true si el valor no es un numero y false si el valor es un numero, en este caso queremos verificar si la edad ingresada por el usuario es un numero valido, si no lo es, mostramos un mensaje de error en la consola.
if (isNaN(edad)) {
    console.error("Error: La edad ingresada no es un numero valido.");
    
    alert("Error: La edad ingresada no es un numero valido.");
} else {
    
    if (edad >= 18) {
        alert(`Hola ${nombre}, eres mayor de edad, ¡Prepárate para grandes oportunidades en el mundo de la programación!`)
    } else {
        alert(`Hola ${nombre}, eres menor de edad, ¡Sigue aprendiendo y disfrutando del código!`)
    }
}




