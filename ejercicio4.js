const calificacion1 = parseFloat("10")  
const calificacion2 = parseFloat("10") 
const calificacion3 = parseFloat("10") 
const promedio = (calificacion1 + calificacion2 + calificacion3) / 3
if(promedio < 6){
    console.log("te van a castigar")
} else{
    if(promedio >= 8.5){
        console.log("te ganaste un premio")
    }else{
        console.log("te salvaste pero no obtuviste un premio")
    }
}