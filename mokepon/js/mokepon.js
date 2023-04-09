function iniciarJuego(){

    let botonMascotaJugador = document.getElementById('boton-mascotas')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

}
function aleatorio(min,max){
    return Math.floor(Math.random()* (max-min+1) + min)

}



function seleccionarMascotaJugador(){
    let esHipodoge=document.getElementById("Hipodoge").checked
    let esCapipepo=document.getElementById("Capipepo").checked
    let esRatigueya=document.getElementById("Ratigueya").checked
    let esLangostelvis=document.getElementById("Langostelvis").checked
    let esTucapalma=document.getElementById("Tucapalma").checked
    let esPydos=document.getElementById("Pydos").checked
    let spanMascotaJugador=document.getElementById('mascotajugador')

    if(esHipodoge==true){
        spanMascotaJugador.innerHTML='Hipodoge'
    }

    else if(esCapipepo==true){
        spanMascotaJugador.innerHTML='Capipepo'
    }

    else if(esRatigueya==true){
        spanMascotaJugador.innerHTML='Ratigueya'
    }

    else if(esLangostelvis==true){
        spanMascotaJugador.innerHTML='Langostelvis'
    }

    else if(esTucapalma==true){
        spanMascotaJugador.innerHTML='Tucapalma'
    }

    else if(esPydos==true){
        spanMascotaJugador.innerHTML='Pydos'
    }

    else{
        alert('Tienes que selecionar un mokepon')
    }

    seleccionmascotaenemigo()
}

function seleccionmascotaenemigo(){

    let mostroAleatorio=aleatorio(1,6)
    let spanMascotaEnemigo=document.getElementById('mascotaenemigo')
    

    if(mostroAleatorio==1){
        spanMascotaEnemigo.innerHTML='Hipodoge'
    }

    else if(mostroAleatorio==2){
        spanMascotaEnemigo.innerHTML='Capipepo'
    }

    else if(mostroAleatorio==3){
        spanMascotaEnemigo.innerHTML='Ratigueya'
    }

    else if(mostroAleatorio==4){
        spanMascotaEnemigo.innerHTML='Langostelvis'
    }

    else if(mostroAleatorio==5){
        spanMascotaEnemigo.innerHTML='Tucapalma'
    }

    else {
        spanMascotaEnemigo.innerHTML='Pydos'
    }
    
    
}



window.addEventListener('load',iniciarJuego)