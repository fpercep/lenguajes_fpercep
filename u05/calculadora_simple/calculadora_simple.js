function operacion(input) {
  let num1 = (document.getElementById("numero1").value);
  let num2 = (document.getElementById("numero2").value);
  output = "ERROR";
  if (num1.trim().length > 0 && num2.trim().length > 0 && !isNaN(num1) && !isNaN(num2)) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (input) {
      case "+":
        output = num1 + num2;
        break;
      case "-":
        output = num1 - num2;
        break;
      case "*":
        output = num1 * num2;
        break;
      case "/":
        if (num2 > 0) {
          output = num1 / num2;
        }
        break;
    }
    let resultado = document.getElementById("resultado");
    resultado.value = output;
  } else if (isNaN(num1) && !isNaN(num2)) {
    let resultado = document.getElementById("resultado");
    resultado.value = output;
  }
}
