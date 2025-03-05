window.onload = function () {
    let imput = "";
    imput = prompt("Introduce una cadena")
    let caracteres = imput.split(",")
    let pares = "";
    let impares = "";
    let nonnum = "";

    for (i = 0 ; i < caracteres.length ; i++ ){
        let caracter = caracteres[i];
        if(caracter % 2 == 0){
            pares = pares + " " + caracter;
        } else if (caracter % 2 > 0 | caracter % 2 < 0){
            impares = impares  + " " + caracter;
        }else{
            nonnum = nonnum + " " + caracter;
        }
    }

    let paresHtml = document.getElementById("pares");
    let imparesHtml = document.getElementById("impares");
    let nonumHtml = document.getElementById("nonum");
    
    paresHtml.innerHTML = pares;
    imparesHtml.innerHTML = impares;
    nonumHtml.innerHTML = nonnum;

}