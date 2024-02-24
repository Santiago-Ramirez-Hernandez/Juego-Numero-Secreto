let numeroSecreto; 
let intentos=0; 
let listaNumerosSorteados=[]; 
let numeroMaximo=10; 


function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value); // obtengo ek valor de la input
    console.log(intentos); 
    console.log(numeroSecreto); 
    /*console.log(typeof(numeroSecreto)); 
    console.log(numeroDeUsuario); 
    console.log(typeof(numeroDeUsuario)); 
    console.log(numeroSecreto === numeroDeUsuario); */
    if(numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)?'vez': 'veces'}`); // operador ternario
        document.getElementById('reiniciar').removeAttribute('disabled'); //me ayuda a buscar por medio de id y habilitar el boton
    } else{
        if(numeroSecreto>numeroDeUsuario){
            asignarTextoElemento('p','El número secreto es mayor');
        } else{
            asignarTextoElemento('p','El número secreto es menor');
        }
        intentos++; 
        limpiarCaja(); 
    }
    return; 
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario'); 
    valorCaja.value=''; 
}

function asignarTextoElemento(elemento, texto) {
    let elementoHtml=document.querySelector(elemento); 
    elementoHtml.innerHTML=texto; 
    return; 
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1; 
    console.log(numeroGenerado); 
    console.log(listaNumerosSorteados); 
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Se han sorteado todos los números posibles'); 
    }else{
        // si el número generado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) { // este método barre mi arreglo y checa si tal elemento ya existe en mi arreglo me devuelbe un booleano
            return generarNumeroSecreto(); 
        } else{
            listaNumerosSorteados.push(numeroGenerado); 
            return numeroGenerado; 
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto'); 
    asignarTextoElemento('p',`Coloque un número entre 1 y ${numeroMaximo}`); 
    numeroSecreto=generarNumeroSecreto(); 
    intentos=1; 
    return;
}

function reiniciarjuego(){
    // limpiar la caja 
    limpiarCaja(); 
    // indicar mensaje de intervalos de numeros 
    // inicializar el número de intentos
    // generar número aleatorio
    condicionesIniciales(); 
    // desahbilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
    return;
}

condicionesIniciales(); 

//código generico que puede obtener el elemento final de la lista 
//  console.log(numerosSorteados[numerosSorteados.length-1]); 


/*function calculadoraIMC(peso,altura){
    peso=parseInt(document.getElementById('valorUsuario1').value);
    altura=parseInt(document.getElementById('valorUsuario2').value);
    return console.log(((peso)/(altura*altura))); 
}


function factorialNumero(elnumero){
    elnumero=parseInt(document.getElementById('valorUsuario1').value); 
    let vfinal=elnumero; 
    while(elnumero>=2){
        vfinal=vfinal*(elnumero-1);
        elnumero--;
    }
    return console.log(`El factorial de ${elnumero} es ${vfinal}`); 
}

function tablasMulti(A){
    A=parseInt(document.getElementById('valorUsuario1').value); 
    return console.log(`${A} X 1 =${A}  
    ${A} X 2 =${A*2}
    ${A} X 3 =${A*3}
    ${A} X 4 =${A*4}
    ${A} X 5 =${A*5}
    ${A} X 6 =${A*6}
    ${A} X 7 =${A*7}
    ${A} X 8 =${A*8}
    ${A} X 9 =${A*9}
    ${A} X 10 =${A*10}`); 
}*/


/*let lenguajesProgra=["Java","C","Pyton"]; 

lenguajesProgra.push("Kotlin", "Go", "JavaScript"); 

 
function mostrarLenguajes(){
    for (let index = 1; index<=lenguajesProgra.length; index++) {
        console.log(lenguajesProgra[lenguajesProgra.length-index]);
        
    }
}

mostrarLenguajes(); */


/*function promedioNumeros(){

    let numeroP=[9,9,9]; 
    numeroP.push(9,9,9); 
    console.log(numeroP); 
    let sumaN=0; 
    for (let index = 0; index<numeroP.length; index++) {
        sumaN=sumaN+numeroP[index]; 
    }
    let mediaN=(sumaN/numeroP.length); 
    return console.log(mediaN); 
}

promedioNumeros(); */

/*function sumaDosListas(){
    let lista1=[1,2,3,4,5]; 
    let lista2=[5,4,3,2,1]; 
    let lista3=[]; 

    for (let i = 0; i < lista1.length & i < lista2.length; i++) {
        lista3[i]=lista1[i]+lista2[i]; 
    }
    return console.log(lista3); 
}

sumaDosListas(); */

function cuadradoLista(){
    let lista1=[1,2,3,4,5]; 
    let lista2=[]; 
    for (let i = 0; i < lista1.length; i++) {
        lista2[i]=(lista1[i]*lista1[i]); 
    }
    return console.log(lista2); 
}
cuadradoLista(); 