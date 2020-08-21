/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonIngresarCantindad = document.querySelector("#ingresar-cantidad");
const $containerFamiliares = document.querySelector(".container-familiares");
const $containerBotones = document.querySelector(".container-botones");
const $containerResultado = document.querySelector(".container-resultado")
const $textoEdadMaxima = document.querySelector("#mayor-edad");
const $textoEdadMinima = document.querySelector("#menor-edad");
const $textoEdadpromedio = document.querySelector("#promedio-familiar");
const $textoSalarioMinimo = document.querySelector("#menor-salario");
const $textoSalarioMaximo = document.querySelector("#mayor-salario");
const $textoSalarioPromedio = document.querySelector("#salario-promedio");
let $checkBoxSalario;
let totalEdades;
let edadFamiliar;
let $label;
let $inputSalario;
let checkSalarios;
let salarios;
let estadoSalario;
let estadoEdad;


$botonIngresarCantindad.onclick = function obtenerCantidadFamiliares(event) {
    eliminarFamiliares();
    const $numeroDeFamiliares = Number(document.querySelector("#cantidad-de-familiares").value);
    if (validarFamiliares($numeroDeFamiliares) === "") {
        crearFamiliares($numeroDeFamiliares);
        crearBotonCalcularEdad();
        crearBotonCalcularSalario();
        crearBotonReset();
        event.preventDefault();

        //return $numeroDeFamiliares;
    } else {
        alert(validarFamiliares($numeroDeFamiliares));
    }
}

function eliminarFamiliares() {
    while ($containerFamiliares.firstChild) {
        $containerFamiliares.removeChild($containerFamiliares.firstChild);
    }
    const eliminarTexto = $containerResultado.childNodes; //los p dentro de containerResultado
    eliminarTexto.forEach(function (texto) { //a cada uno les modifico el texto
        texto.textContent = "";
    });


    while ($containerBotones.firstChild) {
        $containerBotones.removeChild($containerBotones.firstChild);
    }
}

function validarFamiliares(familiares) {
    if (familiares === 0 || familiares === 1) {
        return "el campo familiares debe tener al menos dos familiares";
    }
    if (familiares < 0) {
        return "el campo familiares solo permite valores positivos"
    }
    if (familiares > 30) {
        return "no se permiten mas de 30 familiares";
    }
    if (!/^[0-9]{1,2}$/.test(familiares)) {
        return "el campo solo admite numeros"
    }
    else {
        return "";
    }
}

function crearFamiliares(cantidadFamiliares) {
    for (let i = 0; i < cantidadFamiliares; i++) {
        crearCampos(i);
    }
}
function crearCampos(index) {
    const $divRow = document.createElement("div");
    $divRow.classList = "row d-flex flex-nowrap";
    const $textoCampoEdad = document.createElement("p");
    $textoCampoEdad.classList = " mr-2"
    const $createInputEdad = document.createElement("input");
    $createInputEdad.type = "number";
    $createInputEdad.min = "0";
    $createInputEdad.max = "100";
    $createInputEdad.classList = " edad form-control input-form mr-4 ";
    $textoCampoEdad.textContent = `ingresa la edad de tu familiar # ${index + 1}`;

    $containerFamiliares.appendChild($divRow);
    const texto = $divRow.append($textoCampoEdad);
    $textoCampoEdad.insertAdjacentElement("afterend", $createInputEdad);
    consultarSiPercibeSalario(index);
    //crearInputsSalario(index);

}
function consultarSiPercibeSalario(index) {
    const $divRow = document.createElement("div");
    $divRow.classList = "row mb-4 d-flex flex-nowrap";
    $checkBoxSalario = document.createElement("input");
    $checkBoxSalario.type = "checkbox";
    $checkBoxSalario.classList = `boton-check d-block mr-3 align-self-center check${index}`;
    let consultaSalario = document.createTextNode(" tildá si querés calcular su salario");

    $containerFamiliares.appendChild($divRow);
    $divRow.appendChild($checkBoxSalario);
    $divRow.appendChild(consultaSalario);
    $checkBoxSalario.onclick = function () {
        this.nextSibling.textContent = "";
        this.className = "oculto";
        crearInputsSalario(index);
    }

}

function crearInputsSalario(index) {
    const scrollOption = {
        left: '0',
        top: '700',
        behavior: 'smooth'
    }
    window.scrollTo(
        scrollOption
    );
    $label = document.createElement("label");
    $label.className = "label-salario"
    $label.textContent = "Indicar cantidad que percibe familiar # " + (index + 1);
    $label.style.display = "flex";
    $inputSalario = document.createElement("input");
    $inputSalario.className = "input-salario form-control"
    $inputSalario.type = "number";
    $inputSalario.min = "0";
    $inputSalario.placeholder = "$";
    $inputSalario.style.display = "flex";

    $containerFamiliares.appendChild($label);
    $containerFamiliares.appendChild($inputSalario);


}

function crearBotonCalcularEdad() {
    window.scrollTo(0, 300);
    const $BotonCalcular = document.createElement("button");
    $BotonCalcular.textContent = "calcular edad";
    $BotonCalcular.id = "boton-calcular";
    $BotonCalcular.classList = "btn btn-primary boton-calcular"
    const $divRow = document.createElement("div");
    $divRow.classList = "row mt-4  justify-content-center";
    $divRow.appendChild($BotonCalcular);
    $containerFamiliares.appendChild($divRow);

    $BotonCalcular.onclick = function (e) {
        e.preventDefault();

        const scrollOption = {
            left: '0',
            top: '5000',
            behavior: 'smooth'
        }
        window.scrollTo(
            scrollOption
        );
        obtenerEdades();
        validarObtenerEdades(edadFamiliar);
        if(estadoEdad) {
            calcularEdadMaxima(edadFamiliar);
            calcularEdadMinima(edadFamiliar);
            calcularPromedioEdad(edadFamiliar);
            mostrarResultadosEdades();

        }

    }
}


function crearBotonReset() {
    const $botonReset = document.createElement("button");
    $botonReset.textContent = "resetear";
    $botonReset.classList = "boton-reset form-control btn btn-warning";
    $botonReset.type = "reset";
    $containerBotones.appendChild($botonReset);

    $botonReset.onclick = function () {

        while ($containerFamiliares.firstChild) {
            $containerFamiliares.removeChild($containerFamiliares.firstChild);
        }
        const eliminarTexto = $containerResultado.childNodes; //los p dentro de containerResultado
        eliminarTexto.forEach(function (texto) { //a cada uno les modifico el texto
            texto.textContent = "";
        });

        while ($containerBotones.firstChild) {
            $containerBotones.removeChild($containerBotones.firstChild);
        }
    }
}
function crearBotonCalcularSalario() {
    let $botonCalcularSalario = document.createElement("button");
    $botonCalcularSalario.textContent = "calcular salarios";
    $botonCalcularSalario.classList = "boton-salario  btn btn-light";
    $containerBotones.appendChild($botonCalcularSalario);

    $botonCalcularSalario.onclick = function (e) {
        const scrollOption = {
            left: '0',
            top: '900',
            behavior: 'smooth'
        }
        window.scrollTo(
            scrollOption
        );
        obtenerSalarios();
        if (salarios.length < 1) {
            e.preventDefault();
        }
        else {
            e.preventDefault();
            salarios.forEach(function (salario, index) {
                if (validarSalario(salario) === `el salario no puede ser menor a $1000`) {
                    alert(`el salario de familiar  # ${index + 1} no puede ser menor a $1000`);
                    estadoSalario = false;
                    return estadoSalario;
                }
                if (validarSalario(salario) === "salario correcto") {
                    estadoSalario = true;
                }

            });

            if (estadoSalario) {
                calcularSalarioMaximo(salarios);
                calcularSalarioMinimo(salarios);
                calcularSalarioPromedio(salarios);
                mostrarResultadosSalarios();
            }


            if (validarSalario === `el salario no puede ser menor a $1000`) {
                alert(`el salario no puede ser menor a $1000`);
            }
            else if (validarSalario === "el campo salario solo admite numeros") {
                alert("el campo salario solo admite numeros");
            }


        }

        //obtenerAsalariados();

    }
}



function obtenerEdades() {
    totalEdades = document.querySelectorAll(".edad");
    edadFamiliar = new Array;
    for (let i = 0; i < totalEdades.length; i++) {
        edadFamiliar.push(Number(totalEdades[i].value));
    }
    return edadFamiliar;
}
function validarObtenerEdades(edades) {
    edades.forEach(function (edad, index) {
        if (edad === 0) {
            alert(`familiar #${index + 1} la edad debe ser mayor a cero`);
            estadoEdad = false;
            return false;
        }
        else if (edad > 120) {
            alert(`familiar #${index + 1} la edad debe ser menor a 120`);
            estadoEdad = false;
            return false;
        }
        else if(!/^[0-9]?/.test(edad)){
        alert("el campo edad solo admite numeros");
        }
        else {
            estadoEdad = true;
        }
    });
}

function obtenerSalarios() {
    let totalAsalariados = document.querySelectorAll(".input-salario");
    salarios = new Array;
    for (let i = 0; i < totalAsalariados.length; i++) {
        salarios.push(Number(totalAsalariados[i].value));
    } return salarios;
}

function validarSalario(salario) {
    if (salario < 1000) {
        return `el salario no puede ser menor a $1000`;
    }
    else if (/[^0-9]+/.test(salario)) {
        return "el campo salario solo admite numeros";
    }
    else { return "salario correcto"; }

}

function calcularEdadMaxima(a) {
    let edadMaxima = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > edadMaxima) {
            edadMaxima = a[i];
        }
    }
    return edadMaxima;
}

function calcularSalarioMaximo(a) {
    let salarioMaximo = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > salarioMaximo) {
            salarioMaximo = a[i];
        }
    }
    return salarioMaximo;
}

function calcularEdadMinima(a) {
    let edadMinima = a[0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] < edadMinima) {
            edadMinima = a[i];
        }
    }
    return edadMinima;
}

function calcularSalarioMinimo(a) {
    let salarioMinimo = a[0];
    for (i = 0; i < a.length; i++) {
        if (a[i] < salarioMinimo) {
            salarioMinimo = a[i];
        }
    }
    return salarioMinimo;
}

function calcularPromedioEdad(a) {
    let total = 0;
    let divisor = a.length;
    let edadPromedio;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
        edadPromedio = total / divisor;
    }
    return edadPromedio;
}

function calcularSalarioPromedio(a) {
    let total = 0;
    let divisor = a.length;
    let salarioPromedio;
    for (i = 0; i < a.length; i++) {
        total += a[i];
        salarioPromedio = total / divisor;
    }
    return salarioPromedio;
}


function mostrarResultadosEdades() {
    $textoEdadMinima.textContent = `la menor edad de un familiar es ${calcularEdadMinima(edadFamiliar)}`;
    $textoEdadMaxima.textContent = `la mayor edad de un familiar es ${calcularEdadMaxima(edadFamiliar)}`;
    $textoEdadpromedio.textContent = `la edad promedio familiar es ${calcularPromedioEdad(edadFamiliar)}`;
}

function mostrarResultadosSalarios() {
    $textoSalarioMinimo.textContent = `el menor salario de un familiar es $ ${calcularSalarioMinimo(salarios)}`;
    $textoSalarioMaximo.textContent = `el mayor salario de un familiar es $ ${calcularSalarioMaximo(salarios)}`;
    $textoSalarioPromedio.textContent = `el salario promedio familiar es $ ${calcularSalarioPromedio(salarios)}`;
}


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
