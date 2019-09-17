let buffer = "0";
const screens = document.querySelector(".screen");
let runningTotal = 0;
let prevSymbol;

function buttons(values) {
    if (isNaN(parseInt(values))) {

        symbol(values);
    } else {
        numbers(values);
    }

    rerender();
}

function numbers(num) {
    if (buffer === '0') {
        buffer = num;
    } else {
        buffer += num;
    }


}

function symbol(mathSymbol) {
    switch (mathSymbol) {
        case 'C':
            buffer = "0";
            runningTotal = 0;
            break;

        case "+":
        case "-":
        case "×":
        case "÷":
            handleMath(mathSymbol);
            break;
        case "=":
            if (prevSymbol === null) {
                // need two numbers to do math
                return;
            }
            mathOperation(prevSymbol, parseInt(buffer));
            prevSymbol = null;
            buffer = +runningTotal;
            runningTotal = 0;
            break;
        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
    }
}

function handleMath(mathSymbol) {
    const intBuffer = parseInt(buffer);

    if (buffer === '0') {
        return;
    }

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        mathOperation(mathSymbol, intBuffer);
    }

    prevSymbol = mathSymbol;
    buffer = "0";
}

function mathOperation(mathSymbol, intBuffer) {
    if (mathSymbol === '+') {
        runningTotal += intBuffer;
    } else if (mathSymbol === '-') {
        runningTotal -= intBuffer;
    } else if (mathSymbol === "×") {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function rerender() {
    screens.innerText = buffer;
}

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', function (event) {
        let values = event.target.innerText;
        buttons(values);
    });
}

init()