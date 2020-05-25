    // Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..." -->



/*obtenerNumerosLista();

let hola = [1,2,3,4,5,6,7];
let resultados = hola[0];
for(let i =0; i<hola.length; i++){
 resultados = hola[0];

    if(hola [i] > resultados ){
        resultados = hola[i];
    }
   
    
}
document.write(resultados);*/
let resultado = 0;
const numerosLista =document.querySelectorAll("#item-promedio");
const divisor = numerosLista.length;
let promedio = 0;
let numeros;
let min =  Number(numerosLista[0].innerHTML); //debí haber usado textContent
let max =  Number(numerosLista[0].innerHTML); //debí haber usado textContent
let iguales;
    for(let i=0; i<numerosLista.length; i++){
        numeros = Number(numerosLista[i].innerHTML); //debí haber usado textContent
        resultado += numeros;
        if(numeros<min){
            min = numeros;
        }
        if(numeros>max){
            max=numeros;
        }
        
        //console.log(min);
        //console.log(max);
    }

    promedio = resultado / divisor;
    //console.log(resultado);

    let textoMin = `El minimo de la lista es ${min}`;
    let textoMax = `El numero maximo de la lista es ${max}`;    
    let texto = document.createTextNode(`El promedio es ${promedio}. ${textoMin}. ${textoMax}`) ;
    let em = document.createElement("em");
    em.appendChild(texto);
    document.querySelector("body").appendChild(em);





