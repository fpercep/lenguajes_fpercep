function validaForm() {
    let valid = true;
    document.getElementById("tel_cont").classList.remove("error");
    document.getElementById("pizza").classList.remove("error");
    //devuelve true si todos los datos son correctos
    // devuelve false si algún dato es incorrecto
    let dir = document.getElementById("direccion").value;
    let tel = document.getElementById("telefono").value;
    let piz = document.getElementById("pizza").value;
    if(null == dir || dir.length < 3) {
        valid = false;
        console.log("la direccion no es válida");
    }
    if (null == tel || tel.length != 9 || isNaN(tel)) {
        valid = false;
        document.getElementById("tel_cont").classList.add("error");
        console.log("el telefono no es válido");
    }
    if (null == piz || piz === "") {
        valid = false;
        document.getElementById("pizza").classList.add("error");
        console.log("no ha escogido ninguna pizza");
    }
    return valid;
}

function calcularPrecio() {
    const precioBq = 9.9;
    const precioCarbo = 8.75;
    const precioDeLaHuerta = 7.95;
    const precio4Quesos = 8.25;

    let pizza = document.getElementById("pizza").value;
    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = 0;

    if (isNaN(cantidad) || cantidad <= 0) {
       //Hacer algo 
        return;
    }else {
        switch (pizza) {
            case "barbacoa":
                precio = precioBq;
                break;
            case "carbonara":
                precio = precioCarbo;
                break;
            case "cuatroquesos":
                precio = precio4Quesos;
                break;
            case "delahuerta":
                precio = precioDeLaHuerta;
                break;
            default:
                //Hacer algo 
               return;
        }
        precio *= cantidad;
    }
    let precioTotal = document.getElementById("precioTotal");
    precioTotal.innerHTML ="" +  precio + " €";
}