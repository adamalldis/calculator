let totalInput = document.getElementById("total-input");
let mc;

function calculate() {
    totalInput.textContent = eval(totalInput.textContent);
}

function btnOne() { totalInput.textContent += 1; }
function btnTwo() { totalInput.textContent += 2; }
function btnThree() { totalInput.textContent += 3; }
function btnFour() { totalInput.textContent += 4; }
function btnFive() { totalInput.textContent += 5; }
function btnSix() { totalInput.textContent += 6; }
function btnSeven() { totalInput.textContent += 7; }
function btnEight() { totalInput.textContent += 8; }
function btnNine() { totalInput.textContent += 9; }
function btnZero() { totalInput.textContent += 0; }
function btnAdd() { totalInput.textContent += "+"; }
function btnSubtract() { totalInput.textContent += "-"; }
function btnMultiply() { totalInput.textContent += "*"; }
function btnDivide() { totalInput.textContent += "/"; }
function btnPoint() { totalInput.textContent += "."; }

function clearIt() {
    totalInput.textContent = null;
}

function btnMCapture() {
    mc = totalInput.textContent;
    console.log(mc);
}

function btnMRecall() {
    totalInput.textContent += mc;
}

function btnMClear() {
    mc = "";
}