// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.


// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.


// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

let calcularPromedio = [10,5,4,2,8];
let resultado = 0;
for(i=0; i<calcularPromedio.length; i++){
     resultado=calcularPromedio[i] + resultado;
    
}
promedio = resultado / calcularPromedio.length;
console.log(promedio);


// -----------------------------------operador ternario y funcion con parametro predefinido
function verificarEdad(edad=18){  
    edad >= 18 ? console.log("Bienvenido al bar") : console.log("Sos menor de edad y no podes ingresar"); 
    //con operador ternario y un parametro predefinido que se puede cambiar cuando se llama a la funcion

}
verificarEdad();

// es lo mismo que hacer esto

function verificarEdad1(edad=18){
    if(edad>=18){
        console.log("Podes ingresar al bar");
    }
    else{
        console.log("No se puede ingresar al bar")
    }
}

verificarEdad1(14);


