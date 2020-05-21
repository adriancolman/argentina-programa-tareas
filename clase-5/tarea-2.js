let nombreUsuario = document.querySelector("#nombre-usuario");
let segundoNombre = document.querySelector("#segundo-nombre-usuario");
let apellidoUsuario = document.querySelector("#apellido-usuario");
let edadUsuario = document.querySelector("#edad");
let $ingresar = document.querySelector("#ingresar");


$ingresar.onclick = function obtenerFormulario(){
    
    nombreUsuario = nombreUsuario.value;
    segundoNombre = segundoNombre.value;
    apellidoUsuario = apellidoUsuario.value;
    edadUsuario = edadUsuario.value;

    function imprimirValores(){
        let saludo = document.createTextNode(`Bienvenido ${nombreUsuario}`);
        const info = document.createTextNode(`tu nombre es ${nombreUsuario} ${segundoNombre} ${apellidoUsuario} y tu edad es ${edadUsuario}`);
        let parrafo = document.createElement("p");
        let h1 = document.createElement("h1");
        parrafo.appendChild(info);
        h1.appendChild(saludo);
        document.querySelector(".titulo").appendChild(h1);
        document.querySelector("body").appendChild(parrafo);
    }

    imprimirValores();

}

