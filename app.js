/* Типы данных
2 типа: Объекты и Примитивы
Примитивные
числа
строки
true или false
не заданное значение undefined*/

/* let data = null; - Пустое значение */
/* const admin = Symbol('Admin'); - Уникальное неизменное значение */
/* const big = BigInt(999999999999999999999999999); - Работа с большими числами */

let a = 5;
let b = 5.6;
a = "строка";
console.log(typeof a);
let isAdmin = a > 10;
console.log(typeof isAdmin);

let c;
console.log(typeof c);
c = 5;
console.log(typeof c);

let d = null;
console.log(typeof (d == null));
