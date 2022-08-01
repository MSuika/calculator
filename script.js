"use strict"

let sum = document.querySelector("#sum")
let sub = document.querySelector("#sub")
let div = document.querySelector("#div")
let mul = document.querySelector("#mul")
let mod = document.querySelector("#mod")

let output = document.querySelector("#output")


let inputOne = document.querySelector("#inputOne");

let inputTwo = document.querySelector("#inputTwo");




// Sum function
sum.addEventListener("click", () => {
    sumFunction();
});

function sumFunction() {
    let num1 = parseInt(inputOne.value);
    let num2 = parseInt(inputTwo.value);
    const sumResult = num1 + num2;
    output.textContent = sumResult;
}


// Sub function
sub.addEventListener("click", () => {
    subFunction();
});

function subFunction() {
    let num1 = parseInt(inputOne.value);
    let num2 = parseInt(inputTwo.value);
    const sumResult = num1 - num2;
    output.textContent = sumResult;
}
// div function
div.addEventListener("click", () => {
    divFunction();
});

function divFunction() {
    let num1 = parseInt(inputOne.value);
    let num2 = parseInt(inputTwo.value);
    const sumResult = num1 / num2;
    output.textContent = sumResult;
}
// mul function
mul.addEventListener("click", () => {
    mulFunction();
});

function mulFunction() {
    let num1 = parseInt(inputOne.value);
    let num2 = parseInt(inputTwo.value);
    const sumResult = num1 * num2;
    output.textContent = sumResult;
}
// mod function
mod.addEventListener("click", () => {
    modFunction();
});

function modFunction() {
    let num1 = parseInt(inputOne.value);
    let num2 = parseInt(inputTwo.value);
    const sumResult = num1 % num2;
    output.textContent = sumResult;
}


// inputOne.addEventListener("change", (e) => {
//     (e.target.value);
// });

// inputTwo.addEventListener("change", (e) => {
//     (e.target.value);
// });