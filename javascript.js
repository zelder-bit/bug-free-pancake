// Calculator state and supported operators.
let firstEntry = 0;
let secondEntry = 0;
let operators = [];
let operatorPrecedence = ['^', '(', ')', '*', '/', '+', '-'];
let input_numbers = [];
let initialDisplay = ['00000000000000000'];
let answers = [];

// References to the calculator display and control buttons.
let solution_screen = document.getElementById('solution');
let clearButton = document.getElementById('clear-button');
let equalsButton = document.getElementById('equals-button');

// Reset the calculator state and display when CLEAR is pressed.
clearButton.addEventListener('click', () => {
  operators.length = 0;
  input_numbers.length = 0;
  initialDisplay.length = 0;
  answers.length = 0;
  initialDisplay[0] = '00000000000000000';
  solution_screen.textContent = initialDisplay.join('');
});

// Separate the current input into numbers and operators, calculate it, and show the latest answer.
equalsButton.addEventListener('click', () => {
  if (initialDisplay.length == 1 && initialDisplay[0] == '00000000000000000') {
    return;
  }
  operator_index_postitions = [];
  let completeNumber = '';

  initialDisplay.forEach((item, index, array) => {
    if (!operatorPrecedence.includes(item)) {
      console.log('I am item ' + item + ': And here is my type: ' + typeof item);
      completeNumber += item;
      console.log(completeNumber);
    } else {
      operators.push(item);
      operator_index_postitions.push(index);
      input_numbers.push(completeNumber);
      completeNumber = '';
    }
  });
  input_numbers.push(completeNumber);

  console.log(operators + " I am operators");
  console.log(input_numbers + " I am input_numbers");

  previousAnswerIndex = (answers.length - 1) - 1;
  previousAnwser = answers[previousAnswerIndex];

  let totalPieces = (operators.length + input_numbers.length);

  finalNumbers = [];

  answers.push(operator_function(input_numbers[0], operators[0], input_numbers[1]));
  //console.log(answers)

  initialDisplay.length = 0;
  initialDisplay[0] = answers[(answers.length - 1)];
  solution_screen.textContent = initialDisplay.join('');
  input_numbers.length = 0;
  operators.length = 0;
  //solution_screen.textContent = String(answer[(answer.length - 1)]);
});



// On button click, update the display by appending the pressed number to the current input string.
// Reset when starting fresh and set the solution span’s textContent.
document.querySelectorAll('.number').forEach(btn => {
  btn.addEventListener('click', () => {
    const calc_button_press = btn.textContent;
    if (initialDisplay.length == 1 && initialDisplay[0] == '00000000000000000') {
      initialDisplay.length = 0;
      initialDisplay.push(calc_button_press);
    } else {
      initialDisplay.push(calc_button_press);
    };
    solution_screen.textContent = initialDisplay.join('');
  });
});


// Append operator button values when an expression has already been started.
document.querySelectorAll('.operator').forEach(btn => {
  btn.addEventListener('click', () => {
    const operator_press = btn.textContent;
    if (btn.id == 'equals-button') {
      // Equals is handled by its dedicated event listener.
    } else if (initialDisplay.length == 1) {
        initialDisplay.push(operator_press);
    } else {
      initialDisplay.push(operator_press);
    };
    solution_screen.textContent = initialDisplay.join('');
  });
});

// Route an operator to its matching arithmetic function.
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
