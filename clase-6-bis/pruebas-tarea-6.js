function probarValidarFamiliares() {
    console.assert(
        validarFamiliares(0)==="el campo familiares debe tener al menos dos familiares",
        "validar familiares no validó que haya por lo menos un familiar",
    );
    console.assert(
        validarFamiliares(-2)==="el campo familiares solo permite valores positivos",
        "validar familiares no validó que el campo familiares no reciba numeros negativos",
    );
    console.assert(
        validarFamiliares(31)==="no se permiten mas de 30 familiares",
        "validar familiares no validó que no haya mas de 30 familiares",
    );
    console.assert(
        validarFamiliares("jfg54")==="el campo solo admite numeros",
        "validar familiares no validó que solo admita numeros como valor",
    );
}

function probarValidarSalarios(){
    console.assert(
        validarSalario(999)===`el salario no puede ser menor a $1000`,
        "validarSalarios no validó que el salario sea mayor a $1000",
    );
    console.assert(
        validarSalario("ferw43")==="el campo salario solo admite numeros",
        "validarSalarios no validó que el campo salario solo reciba numeros",   
        );
    console.assert(
        validarSalario(5454)==="salario correcto",
        "validarSalarios no validó que el valor esté correcto",
    );
}

function probarValidarEdades(){
    console.assert(
        validarObtenerEdades(0)===`familiar #${index + 1} la edad debe ser mayor a cero`,
        "la funcion no validó que la edad sea mayor a 0",
    );
    console.assert(
        validarObtenerEdades(234)===`familiar #${index + 1} la edad debe ser menor a 120`,
        'la funcion validó que la edad sea menor a 120'
    );
    console.assert(
        validarObtenerEdades("hola")==="el campo edad solo admite numeros",
        'la funcion no validó que solo reciban numeros como edad',
    );
    console.assert(
        validarObtenerEdades(45)==="",
        "la funcion no validó que el valor edad sea correcto"
    );
}

probarValidarFamiliares();
probarValidarSalarios();