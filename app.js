// calculator

// global variable


let num1 = "";
let num2 = "";
let operator;
let flag = null;

let display = document.querySelector(".display");
let equalTo = null;

//function setNumber(value)

function setValue(number) {
    if(equalTo === !null) {
        clearButton();
    }
    if (flag === null) {
       num1 += number;
        //alert(num1);
       display.innerHTML += number;
    } else {
        num2 += number;
        display.innerHTML += number; 
    }
    if(num1.lenght > 10 || num2.length > 10) {
        display.innerHTML = "max limitof digits reached";
    }
}

function oppClick(numericCode) {
    operator = numericCode;
    let oppString = "";
    flag = !null;
    if (operator === 4) {
        display.innerHTML += "/";
        oppString = "/";
    } else if (operator === 3) {
        display.innerHTML += "*"; 
        oppString = "*";
    } else if (operator === 2) {
        display.innerHTML += "-";
        oppString = "-";
    } else {
        display.innerHTML += "+";
        oppString = "+"; 
    }

    if (flag === !null) {
        display.innerHTML = num1 + oppString;
    }

    if(flag === !null && num1 === "") {
        clearButton();
    }

    if (equalTo === !null) {
        clearButton();
    }
}

function equalClick() {
    equalTo = !null;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    let result = "";
    let roundedResult = "";

    switch(true) {
        case(operator === 1):
        result = num1 + num2;
        break;
        case(operator === 2):
        result = num1 - num2;
        break;
        case(operator === 3):
        result = num1 * num2;
        break;
        case(operator === 4):
        result = num1 / num2;
    }
    roundedResult = result.toFixed(4);
    display.innerHTML = roundedResult;

    if(roundedResult === "NaN") {
        display.innerHTML = 'not valid';
    }
}

function clearButton() {
    num1 = "";
    num2 = "";
    flag = null;
    display.innerHTML = "";
    equalTo = null;
}

function backspace() {
    let temp1= "";
    let temp2 = "";
    if(equalTo === !null) {
        clearButton();
    }

    if(flag === null) {
        temp1 = num1.substring(0, num1.length-1);
        // alert(temp1);
        display.innerHTML = temp1;
        num1 = temp1;
    }

    if(flag === !null) {
        display.innerHTML = num1;
        flag = null;
    }

    if(num2 !== "") {
        temp2 = num2.substring(0, num2.length-1);
        display.innerHTML = num1 + operator + num2;
        num2 = temp2;
        flag = !null;
    }

    if (operator === 1) {
        display.innerHTML = num1 + "+" + num2;
    } else if (operator === 2) {
        display.innerHTML = num1 + "-" + num2; 
    } else if (operator === 3) {
        display.innerHTML = num1 + "*" + num2;
    } else if (operator === 4){
        display.innerHTML = num1 + "/" + num2;
    }
}

// let num = 1;
// function newNum () {
//     return document.querySelectorAll(".num_button").innerHTML= num;
    
// }
 
// alert(newNum(num));






