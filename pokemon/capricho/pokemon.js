let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

    function iniciarJuego(){
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener('click', reinciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display='none'
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'

    let inputAquacaca = document.getElementById('Aquacaca')
    let inputMierditierra = document.getElementById('Mierditierra')
    let inputFuegorila = document.getElementById('Fuegorila')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputAquacaca.checked){
        spanMascotaJugador.innerHTML = 'Aquacaca'
    } else if (inputMierditierra.checked){
        spanMascotaJugador.innerHTML = 'Mierditierra'
    } else if (inputFuegorila.checked){
        spanMascotaJugador.innerHTML = 'Fuegorila'
    } else {
        alert('Elegi una burro conchadetumadre')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Aquacaca'
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Mierditierra'
    } else {
        spanMascotaEnemigo.innerHTML = 'Fuegorila'
    }
}

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatEnemigo()
}
function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatEnemigo()
}
function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatEnemigo()
}

function ataqueAleatEnemigo(){
    let ataqueAleatorio = aleatorio(1, 3)
    
        if(ataqueAleatorio == 1){
            ataqueEnemigo = 'FUEGO'
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = 'AGUA'
        } else {
            ataqueEnemigo = 'TIERRA'
    }


    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste :)")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, perdiste :(')
    }
}

    function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('resultado')
    let ataqueDelJugador = document.getElementById('ataque-del-jugador')
    let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo')

 
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    
   sectionMensajes.innerHTML = resultado
   nuevoAtaqueDelJugador.innerHTML = ataqueJugador
   nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
   
    /* let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + '- ' + resultado */
    
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reinciarJuego(){
    location.reload()
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) +  min)
}

window.addEventListener('load', iniciarJuego)
