const bmwX3 = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message;

if (budget > bmwX3) {
  message = "BMW";
} else if (budget > fordFocusPrice) {
  message = "Ford";
} else {
  message = "Ты нищий";
}
// Тернарные операторы
10 > 0 ? console.log("Больше 0") : console.log("Не больше");

console.log(`Я хочу купить ${message}`);
