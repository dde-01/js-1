// Преобразование типов

const age = "18";
console.log(Number(age) + 5);

const _age = 19;
console.log(String(_age) + age);

// Если js видит + производит конкатенацию если - / * то математическую операцию

const userName = "Вася";
console.log(Number(userName) + 5);
console.log(typeof NaN);
console.log(Boolean(0)); // Все числа не явл. 0 будут true
console.log(Boolean("ssssdf"));
console.log(Boolean(""));

const a = 2 + "10";
console.log(a - 10);
