var txt = document.getElementById("texto")
document.addEventListener("keyup", eventoteclado)
var resul = document.getElementById("resul")
var c = 0
var cr //esta variable es para verifica el resultado total se le añadio un numero para asi no colocar un resulrado de ecuacion incorresto
var ids = 1 //variable de id de span de resul
var re //resultado escrito
txt.focus()
function focust(){
    txt.focus()
}
function insert(num){
    txt.value = txt.value + num
}
// funcion de borrado
function limpiar(){
    if (c == 1) {
        resul.innerHTML = resul.innerHTML + "<br>" + "<span id=" + ids + ">" + re + " = " + cr
    }
    txt.value = "";
    c = 0
}
// boton borrar 
function back(){
    txt.value = txt.value.substring(0,txt.value.length-1)
}
// tecla
function eventoteclado (teclado){
    if(teclado.keyCode == 13){
        equal()
    }
    if(teclado.keyCode == 46){ 
        limpiar()
    }
}
// boton calcular
function equal(){
    var total = eval(txt.value)
    if(total != undefined && total != txt.value){
        cr = total
        re = txt.value
        txt.value = total
        c = 1
    }
}
// toda la pantalla
// var body = document.getElementById("body")
// var header = document.getElementById("resul")
// var bg = document.getElementById("bg")
// body.style.minHeight = (body.offsetHeight - header.offsetHeight) + "px"
// bg.style.minHeight = (bg.offsetHeight - header.offsetHeight) + "px"
