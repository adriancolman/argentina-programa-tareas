

let $ingreso = document.querySelector("#ingresar");
let displayTotal = document.querySelector("#duracion-total");
let strong = document.querySelector("#texto-strong");

let totalHoras = 0;
let totalMinutos = 0;
let totalSegundos = 0;




$ingreso.onclick =  function calcularTiempoTotal(){
    let hora = Number(document.querySelector("#hora").value);
let minutos = Number(document.querySelector("#minutos").value);
let segundos = Number(document.querySelector("#segundos").value);


    /* if(totalSegundos && totalMinutos && totalHoras !== undefined){
      totalSegundos = totalSegundos + segundos ;
      totalMinutos = totalMinutos + minutos ;
      totalHoras = totalHoras + hora;}
     else{
          totalSegundos = segundos;
          totalMinutos = minutos;
          totalHoras = hora;
     }
     totalMinutos += Math.trunc(totalSegundos/60);
     totalSegundos = totalSegundos%60;
     totalHoras += Math.trunc(totalMinutos/60); 
     totalMinutos = Math.trunc(totalMinutos%60);
     Math.trunc(totalHoras);
     console.log(`horas ${totalHoras} , minutos ${totalSegundos}, segundos ${totalSegundos}`);*/

     totalHoras += hora;
     totalMinutos += minutos;
     totalSegundos +=segundos; 
     
      
         
       if(totalSegundos>59){
        totalMinutos = totalMinutos + (Math.round(totalSegundos/60));
        totalSegundos = totalSegundos%60;
       }
       if(totalMinutos > 59){
        
        totalHoras = totalHoras + (Math.round(totalMinutos/60));
        totalMinutos = totalMinutos%60;}
     let texto =  `${totalHoras}:${totalMinutos}:${totalSegundos}`;


                if(strong){
                    strong.innerHTML= texto
                }
                
                else{

                    strong = document.createElement("b");
                    strong.setAttribute("id", "texto-strong");



                    strong.innerHTML = texto;
                     const resultado = displayTotal.appendChild(strong);}}
                    
                    
               


