/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonIngresarCantindad = document.querySelector("#ingresar-cantidad");
const $containerFamiliares = document.querySelector(".container-familiares");
const $textoEdadMaxima = document.querySelector("#mayor-edad");
const $textoEdadMinima = document.querySelector("#menor-edad");
const $textoEdadpromedio = document.querySelector("#promedio-familiar");
let totalEdades;
let edadFamiliar;

$botonIngresarCantindad.onclick = function obtenerCantidadFamiliares(event){
    event.preventDefault();
    const $numeroDeFamiliares = Number(document.querySelector("#cantidad-de-familiares").value);
    crearFamiliares($numeroDeFamiliares);
    crearBotonCalcular();
    crearBotonReset();
}

function crearFamiliares(cantidadFamiliares){
    for(let i=0; i<cantidadFamiliares; i++){
        crearCampos(i);
    }
}
function crearCampos(){
    const $textoCampoEdad = document.createElement("p");
    const $createInputEdad = document.createElement("input");
    $createInputEdad.type = "number";
    $createInputEdad.min= "0";
    $createInputEdad.className= "edad";
    $textoCampoEdad.textContent = "ingresa la edad de tu familiar";
    
    $containerFamiliares.appendChild($textoCampoEdad);
    $containerFamiliares.appendChild($createInputEdad);
}

function crearBotonCalcular(){
    const $BotonCalcular = document.createElement("button");
    $BotonCalcular.textContent = "calcular";
    $BotonCalcular.id= "boton-calcular";
    $containerFamiliares.appendChild($BotonCalcular);

    $BotonCalcular.onclick = function(e){
        obtenerEdades();
        calcularEdadMaxima(edadFamiliar);
        calcularEdadMinima(edadFamiliar);
        calcularPromedio(edadFamiliar);
        mostrarResultados();
        e.preventDefault();}
}
function crearBotonReset(){
    const $botonReset = document.createElement("button");
    $botonReset.textContent = "resetear";
    $botonReset.type= "reset";
    $containerFamiliares.appendChild($botonReset);

    $botonReset.onclick = function(){
        
        while($containerFamiliares.firstChild){
            $containerFamiliares.removeChild($containerFamiliares.firstChild);
        }
        while($textoEdadMinima.firstChild){
            $textoEdadMinima.removeChild($textoEdadMinima.firstChild);
        }
        while($textoEdadMaxima.firstChild){
            $textoEdadMaxima.removeChild($textoEdadMaxima.firstChild);
        }
        while($textoEdadpromedio.firstChild){
            $textoEdadpromedio.removeChild($textoEdadpromedio.firstChild);
        }
    }
}



        

        function obtenerEdades() {
    totalEdades = document.querySelectorAll(".edad");
    edadFamiliar= new Array;
    for (let i=0; i<totalEdades.length; i++){
    edadFamiliar.push(Number(totalEdades[i].value));}
    return edadFamiliar;
};

function calcularEdadMaxima(a){
    let edadMaxima = a[0];
     for(let i=0; i<a.length; i++){
         if(a[i]>edadMaxima){
             edadMaxima= a[i];
         }
     }
    return edadMaxima;
}
function calcularEdadMinima(a){
    let edadMinima = a[0];
    for(let i=0; i<a.length; i++){
        if(a[i]<edadMinima){
            edadMinima = a[i];
        }
    }
    return edadMinima;
}

function calcularPromedio(a){
    let total=0;
    let divisor = a.length;
    let promedio;
    for(let i =0; i<a.length; i++){
        total += a[i];
        promedio = total / divisor;
    }
    return promedio;
}

function mostrarResultados(){
    $textoEdadMinima.textContent = `la menor edad de un familiar es ${calcularEdadMinima(edadFamiliar)}`;
    $textoEdadMaxima.textContent =`la mayor edad de un familiar es ${calcularEdadMaxima(edadFamiliar)}`;
    $textoEdadpromedio.textContent =`la edad promedio familiar es ${calcularPromedio(edadFamiliar)}`;
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
