// the script needs to be added to the html file

/*
alert('This Works'); */

//alert blocks the rendering of the page in the head, a way to circumvent this is to put the scipt at the bottom of the page.

//Variables and constants
//======================

let userName = 'Dan'; //data container - this is implicitly a str
//let creates a variable, userName is the name of the variable

userName = 'Dan'; // dont need to put the let when redefining

const pi = 3.14; // cannot redefine because defined using the const keyword - use as often as possible as gives clear intention

// we add a global variable to keep track of operations performed:
let logEntries = []; // by defining an empty array

//declaring and defining variables
//=================================

// for our calculator we need a result variable:

let currentResult = 0; // best practice is camelCase rather than        snake_case,
// can start a variable with a $ _ no other special chars

// ending a line with ; is not necessary - \n is implied ;

//using the output result function we can visalise the result on the webpage

//currentResult= currentResult+ 10;

//example of string concatenation

// and using template literial
//let calculationDescription = `${currentResult} + + 10 `;
// ths is only possible using backticks and is a super neat method for string concatenation. Also can linebreak using template literal syntax. The linebreaks may or may not be included in the output dependent on the styling of the HTML/ CSS

/*

Escape command notations:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation 

*/

//outputResult(currentResult, calculationDescription);

//Functions
//==========================================

function greetPerson(name) {
  alert(`Hi ${name}`);
}

// function declares a function,
// greet person is the name
// output is void

//runs the function
//greetPerson('Dan');

function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operatrion, prevResult, enteredNumber, newResult) {
    const logEntry = {
        operation: 'operation',
        prevResult: prevResult,
        number: enteredNumber,
        currResult: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntry);
}

function addNumbers() {
  /*

    currentResult = currentResult + userInput.value;

    this is concatenated as a str by default. We need to define the str as a number explicitly - use parseInt()

    N.B converting a number to str: myNumber.toString();
    */

  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;

  currentResult += enteredNumber;
  createAndWriteLog('+', initialResult, currentResult);
  writeToLog('ADD',initialResult, enteredNumber, currentResult);
}

function subtractNumbers() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;

  currentResult -= enteredNumber;
  createAndWriteLog('-', initialResult, currentResult);
  writeToLog('SUB',initialResult, enteredNumber, currentResult);
}

function multiplyNumbers() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;

  currentResult *= enteredNumber;
  createAndWriteLog('*', initialResult, currentResult);
  writeToLog('MUL',initialResult, enteredNumber, currentResult);
}

function divideNumbers() {
  const enteredNumber = parseInt(userInput.value);
  const initialResult = currentResult;
  if (initialResult == 0) {
    initialResult++;
  }
  currentResult /= enteredNumber;
  createAndWriteLog('/', initialResult, currentResult);
  writeToLog('DIV',initialResult, enteredNumber, currentResult);
}

// add event listener - takes two arguments, a str that ids the event we are searching for. The second argument is the function we want to call, but we dont want it to execute- we overcome by naming the function but without passing it arguments- analogy: you can ring your own doorbell but that doesnt mean you can get mail delivered
addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtractNumbers);
multiplyBtn.addEventListener('click', multiplyNumbers);
divideBtn.addEventListener('click', divideNumbers);

//listening for an event is known as an indirect function call

//outputResult(addNumbers(4,9), '4 + 9');

let obj = { name: 'Dan', age: '27' };
console.log(obj.name);

//Other core js features:
//=======================
