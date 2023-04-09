function aleatorio(min,max){

    return Math.floor(Math.random()* (max-min+1)+min)
}
function eleccion (jugada){
    let resultado =""
            if(jugada==1){
            resultado = "Piedra 🥌"
        }
        else if(jugada==2){
            resultado = "Papel 📃"
        }
        else if (jugada==3){
            resultado = "Tijera ✂"
        }else {
            resultado = "Null"
        }
    return resultado
}
//1 piedra 2 papel 3 tijera
let jugador = 0
let min=1
let max=3
let pc=0
let ganadas=0
let perdidas=0
let empates=0
while (ganadas<3 && perdidas<3){


pc=aleatorio(1,3)
jugador = prompt ("elije 1 piedra 2 papel 3 tigera")
//
alert("PC eligio"+ eleccion(pc))
alert("Jugador eligio"+ eleccion(jugador))
//Combate
    if(pc==jugador){
        alert("Empate")
        empates++
    }else if ((jugador == 1 && pc==3 )|| (jugador ==2 && pc==1) || (jugador ==3 && pc==2 )){
        alert("Ganaste")
        ganadas++
    }
    else{
        alert("Perdiste")
        perdidas++
    }
}
alert("Ganastes"+ ganadas + "veces. Perdistes"+ perdidas + "veces. empatastes" + empates + "veces")