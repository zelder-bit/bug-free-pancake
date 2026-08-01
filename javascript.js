let firstEntry = 0;
let secondEntry = 0;
let operators = [];
let operatorPrecedence = ['^', '(', ')', '*', '/', '+', '-'];
let input_numbers = [];
let initialDisplay = ['00000000000000000'];
let answer = [];

let solution_screen = document.getElementById('solution');
let clearButton = document.getElementById('clear-button');
let equalsButton = document.getElementById('equals-button');

//Resets the screen when clear is pushed.
clearButton.addEventListener('click', () => {
  operators.length = 0;
  input_numbers.length = 0;
  initialDisplay.length = 0;
  initialDisplay[0] = '00000000000000000';
  solution_screen.textContent = initialDisplay.join('');
});

equalsButton.addEventListener('click', () => {

  initialDisplay.map(item => {
    if (operatorPrecedence.includes(item)) {
      operators.push(item);
    } else {
      input_numbers.push(item);
    };
  });

  previousAnswerIndex = (answer.length - 1) - 1;
  previousAnwser = answer[previousAnswerIndex];

  console.log(operators);
  console.table(input_numbers);

  let totalPieces = (operators.length + input_numbers.length);

  answer.push(operator_function(input_numbers[0], operators[0], input_numbers[1]));

  console.log(answer);
  initialDisplay.length = 0;
  initialDisplay[0] = answer[(answer.length - 1)];
  solution_screen.textContent = initialDisplay.join('');
  //solution_screen.textContent = String(answer[(answer.length - 1)]);
  console.log(solution_screen, solution_screen.tagName, solution_screen.isConnected);
  console.log(solution_screen.textContent + ' I am solution screen');
});



// On button click, update the display by appending the pressed number to the current input string.
// Reset when starting fresh and set the solution span’s textContent.
document.querySelectorAll('.number').forEach(btn => {
  btn.addEventListener('click', () => {
    const calc_button_press = btn.textContent;
    console.log(calc_button_press);
    if (initialDisplay.length == 1 && initialDisplay[0] == '00000000000000000') {
      initialDisplay.length = 0;
      initialDisplay.push(calc_button_press);
    } else {
      initialDisplay.push(calc_button_press);
    };
    solution_screen.textContent = initialDisplay.join('');
  });
});


document.querySelectorAll('.operator').forEach(btn => {
  btn.addEventListener('click', () => {
    const operator_press = btn.textContent;
    console.log(operator_press);
    if (btn.id == 'equals-button') {
      cosole.log('Do Nothing');
    } else if (initialDisplay.length == 1 && initialDisplay[0] == '00000000000000000') {
      console.log('ERROR - WIP');
    } else {
      console.log('Push to operator press');
      initialDisplay.push(operator_press);
    };
    solution_screen.textContent = initialDisplay.join('');
  });
});

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
  return (+number1 + +number2);
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
