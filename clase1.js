/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {

    // saludamos al usuario
    alert("Bienvenido al piedra papel o tijera de Frontend II.");
    // guardamos en una variable en nombre ingresado
    let nombre = ""

    do {
        nombre = prompt("Ingrese su nombre por favor:")
        if(!isValidInput(nombre)){
            alert("Ingrese un nombre que sea solo letras y sea mayor a 3 caractéres");
        }
    } while (!isValidInput(nombre));
    nombre=nombre.toUpperCase();

    alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");

    // mostramos los datos por consola
    console.log("----------------------------");
    console.log("El jugador es:")
    console.log(nombre);
    console.log("----------------------------");

    return nombre;
}

function isValidInput(input) {
    // Check if the input is a string and has at least 3 characters
    if (typeof input !== "string" || input.length < 3) {
        return false;
    }

    // Check if the input contains any numbers
    const hasNumber = /[0-9]/.test(input);
    return !hasNumber;
}

// creamos una variable a nivel global para guardar el nombre del jugador que nos devuelve la función
const nombreJugador = iniciarJuego();

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.
