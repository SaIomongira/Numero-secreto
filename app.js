let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;




function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    

    console.log(intentos);
    

    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p",`Has acertado en ${intentos} ${(intentos == 1) ? "vez" : "veces"}` );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if(numeroSecreto > numeroUsuario){
            asignarTextoElemento("p","El número secreto es mayor");
        }else if(numeroSecreto < numeroUsuario){
            asignarTextoElemento("p","El número secreto es menor");

        }
        intentos++;
        limpiarCampo();
    }

    return;
}

function limpiarCampo(){
    let valorCaja = document.querySelector("#valorUsuario").value = "";
}


function generarNumeroSecreto(){
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    } else{
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Que comience el desafio!");
    asignarTextoElemento("p",`Elige un número del 1 al ${numeroMaximo}!`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCampo();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
    

}

condicionesIniciales();

