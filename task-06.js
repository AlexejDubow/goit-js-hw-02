"use strict";

let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число", "");
  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  if (input !== null) {
    numbers.push(input);
  }
} while (input !== null);

for (let number of numbers) {
  total += Number(number);
}

console.log(`Общая сумма чисел равна ${total}`);
