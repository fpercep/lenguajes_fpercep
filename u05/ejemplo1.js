let nombre = "";
nombre = prompt("Introduce tu nombre", "amigo")
if (null == nombre){
    alert("Hola, no introduciste ningún nombre ")
} else {
    alert("Hola" + nombre)
}

if (confirm("Es correcto tu nombre")){
    alert("Pérfecto!");
}else{
    alert("Oh, lo siento");
}

let elemento = document.getElementById("respuesta");
elemento.innerHTML = nombre;
