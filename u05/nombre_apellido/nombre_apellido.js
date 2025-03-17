function anadirAlumno(){
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let tabla = document.getElementById("tabla");
    let elemTablaVacia = document.getElementById("tablaVacia");
    if (nombre != null && nombre.trim() != "" && apellidos.trim() != "" && apellidos !== null){
        let cabezera = "<tr><th>Nombre</th><th>Apellido</th></tr>"
        let nuevoFila = "<tr><td>" + nombre + "</td><td>" + apellidos + "</td></tr>";
        if(elemTablaVacia != null && elemTablaVacia.innerHTML){
            tabla.innerHTML = cabezera + nuevoFila;
            document.getElementById("reset").click();
        } else {
            tabla.innerHTML += nuevoFila;
            document.getElementById("reset").click();
        }
    } else{
        let error = document.getElementById("error")
        error.innerHTML =  "Los campos nombre y apellidos tienen que ser rellenos"
    }
}

function limpiaError() {
    let error = document.getElementById("error")
    error.innerHTML =  ""
}