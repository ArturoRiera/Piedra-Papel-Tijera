function random(max,min){
    resul = Math.floor(Math.random()*(max - min + 1) + min)
    return resul
}

function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra 🥌"
    }else if(jugada == 2){
        resultado = "Papel 🗞"
    }else if(jugada == 3){
        resultado == "Tijera ✂"
    }else{
        resultado = "Mal elegido"
    }
    return resultado
}

// 1 sera piedra 2 papel y 3 tijeras
let jugador = 0
let pc = random(3,1)
let triunfos = 0
let perdidas = 0
//jugador = prompt("Elige : 1 Piedra, 2 Papel, 3 Tijera")

while(triunfos < 3 && perdidas < 3){
    pc = random(3,1)
    jugador = prompt("Elige: 1 Piedra, 2 Papel, 3 Tijeras")
    alert("PC elige :"+eleccion(pc))
alert("Tu eliges: "+eleccion(jugador))
//alert ("Elige jugador"+jugador)
if(jugador ==1){
    alert("Elegiste piedra")
}else if(jugador == 2){
    alert("Elegiste papel")
}else if(jugador == 3){
    alert("Elegiste tijeras")
}else{
    alert("Elegiste perder")
}
//combate
if(pc == jugador){
    alert("Empate")
}else if(jugador == 1 && pc == 3){
    alert("Ganaste")
    triunfos += 1
}else if(jugador == 2 && pc == 1){
    alert("Ganaste")
    triunfos += 1
}else if(jugador == 3 && pc == 2){
    alert("Ganaste")
    triunfos += 1
}else{
    alert("Perdiste")
    perdidas += 1
}
alert("Ganaste "+triunfos+" veces. Perdiste "+perdidas+" veces.")
}


