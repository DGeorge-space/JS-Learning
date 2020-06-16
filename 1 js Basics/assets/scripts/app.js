// the script needs to be added to the html file

/*
alert('This Works'); */

//alert blocks the rendering of the page in the head, a way to circumvent this is to put the scipt at the bottom of the page.

//Variables and constants
//======================

let userName = 'Dan'; //data container - this is implicitly a str 
//let creates a variable, userName is the name of the variable

userName='Dan' // dont need to put the let when redefining 

const pi = 3.14 // cannot redefine because defined using the const keyword - use as often as possible as gives clear intention 



//declaring and defining variables
//=================================

// for our calculator we need a result variable: 

let currentResult=0; // best practice is camelCase rather than        snake_case,
            // can start a variable with a $ _ no other special chars

// ending a line with ; is not necessary - \n is implied ; 


//using the output result function we can visalise the result on the webpage
currentResult= currentResult+ 10;

//example of string concatenation


// and using template literial 
let calculationDescription = `${currentResult} + 

+ 10 `; 
// ths is only possible using backticks and is a super neat method for string concatenation. Also can linebreak using template literal syntax. The linebreaks may or may not be included in the output dependent on the styling of the HTML/ CSS

/*

Escape command notations:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation 

*/ 

outputResult(currentResult, calculationDescription);

//Functions
//==========================================

function greetPerson(name){
    alert(`Hi ${name}`);
}

// function declares a function, 
// greet person is the name
// output is void

//runs the function 
//greetPerson('Dan');

function addNumbers(number1, number2){
    const result = number1+number2;
    return result;
}

outputResult(addNumbers(4,9), '4 + 9');