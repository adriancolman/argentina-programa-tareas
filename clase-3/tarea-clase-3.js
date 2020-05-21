// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const nombreUsuario = (prompt("Cual es tu nombre?") || "").toLocaleLowerCase();
/* lowercase todo a minuscula y el OR ""  lo usamos para que si el usuario apreta esc que devuelve un NULL nombreUsuario no tome ese NULL y elija ser un string vacio*/

if(nombreUsuario.trim() === "adrian"){
    console.log(`Hola tocayo! yo tambien me llamo ${nombreUsuario}`)
}
else if(nombreUsuario.trim() === "hammer"){
console.log(`hola ${nombreUsuario} te llamas como mi perro`)
}
else if(nombreUsuario.length===0){
    console.log("No ingresaste ningun nombre");
}
else{
    console.log(`Hola ${nombreUsuario}`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt(`Cual es tu edad ${nombreUsuario} ?`));

if (edadUsuario===34){
    console.log("Tenemos la misma edad");
}
else if(edadUsuario < 34){
    console.log("sos mas joven que yo");
}
else{
    console.log("Sos mas viejo que yo");
}

let dni = true;
usuarioDni = prompt("tenes DNI?").toLocaleLowerCase();

if(usuarioDni==="si"){
    if(edadUsuario >= 18){
        console.log("Podes entrar al bar");
    }
    else{
        console.log("No podes entrar al bar")
    }

}
else if(usuarioDni==="no"){
    console.log("no podes entrar al bar");
}

else{
    console.log("No entendimos la respuesta");
}



//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
