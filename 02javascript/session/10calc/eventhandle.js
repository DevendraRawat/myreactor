"use strict";
var firstSelection = 0;
var secondSelection = 0;
var symbol = "";

function setColor(id) {
  var color = "#ffff80";
  var element = document.getElementById(id);
  element.style.backgroundColor = color;
}

function removeColor(id) {
  var color = "";
  var element = document.getElementById(id);
  element.style.backgroundColor = color;
}

function displayValue(msgid) {
  //   alert(msgid)
  var element = document.getElementById(msgid);
  document.getElementById("result").value = element.value;

  if (symbol.length == 0) {
    firstSelection = element.value;
  } else {
    secondSelection = element.value;
  }
}

function setSymbol(msgid) {
  //   alert(msgid)
  var element = document.getElementById(msgid);
  symbol = element.value;
}

function calculate() {
  switch (symbol) {
    case "+":
      document.getElementById("result").value =
        parseInt(firstSelection) + parseInt(secondSelection);
      break;

    case "-":
      document.getElementById("result").value =
      parseInt(firstSelection) - parseInt(secondSelection);
      break;

    case "*":
      document.getElementById("result").value =
        firstSelection * secondSelection;
      break;

    case "/":
      document.getElementById("result").value =
        firstSelection / secondSelection;
      break;

    default:
      document.getElementById("result").value = "wrong selection!!!";
      break;
  }

  firstSelection = 0;
  secondSelection = 0;
  symbol = '';
}
