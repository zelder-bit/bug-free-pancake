let firstEntry = 0;
let secondEntry = 0;
let operators = [];
let input_numbers = [];
let initialDisplay = ['00000000000000000'];
let answer = [];

let solution_screen = document.getElementById('solution');




document.querySelectorAll('.button-row button').forEach(btn => {
  btn.addEventListener('click', () => {
    const calc_button_press = btn.textContent;
    console.log(calc_button_press);
    if (initialDisplay.length == 1 && initialDisplay[0] == '00000000000000000') {
      initialDisplay.length = 0;
      initialDisplay.push(calc_button_press);
    } else {
      initialDisplay.push(calc_button_press);
    };
    solution_screen.textContent = initialDisplay.join(' ');
  });
});


//document.getElementById('equals-button').addEventListener('onclick', evaluate_solution);

const operator_function = function (number1, operator, number2) {
  if (operator == '+') {
    return addition(number1, number2);
  } else if (operator == '-') {
    return subtraction(number1, number2);
  } else if (operator == '*') {
    return multiplication(number1, number2);
  } else return division(number1, number2);
}


const addition = function (number1, number2) {
  return number1 + number2;
}

const subtraction = function (number1, number2) {
  return number1 - number2;
}

const multiplication = function (number1, number2) {
  return number1 * number2;
}

const division = function (number1, number2) {
  return number1 / number2;
}
