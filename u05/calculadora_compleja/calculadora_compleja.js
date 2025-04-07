let operators = "";
let lastInput = "";

function calcular() {
  const resultado = eval(operators);
  document.getElementById("resultado").value = resultado;
}

function addOperator(input) {

  if(input !== "-" ){
    operators += " " + input;
    lastInput = input;
  }
  document.getElementById("operacion").value = operators;
  calcular();
}

function addNumber(input) {
  operators += " " + input;
  lastInput = input;
  document.getElementById("operacion").value = operators;
  calcular();
}
