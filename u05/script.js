function generaLetraDNI(input){
    let LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";
    let respuesta = "No se trata de un dni correcto"
    if(input.length == 8 && !isNaN(numeroDNI) && Number(input >= 1) && Number(input <= 99999999)){;
        let letra = LETRAS.charAt(Number(input % 23));
        respuesta = numeroDNI + letra;
    }
    return respuesta;
}