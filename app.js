// Switch отлично использовать когда имеем много вариантов он проверяет всегда строгое равенство

const role = prompt("login:");

if (role === "manager") {
  console.log("Manager");
} else if (role === "admin") {
  console.log("Admin");
} else if (role === "ceo") {
  console.log("CEO");
} else {
  console.log("not authorized");
}

switch (role) {
  case "manager":
    console.log("Manager");
    break;
  case "admin":
    console.log("Admin");
    break;
  case "ceo":
    console.log("CEO");
    break;
  default:
    console.log("not authorized");
}
switch (role) {
  case "manager":
  case "admin":
    console.log("Не руководитель");
    break;
  case "ceo":
    console.log("Руководитель");
    break;
  default:
    console.log("not authorized");
}

const num = 1;
switch (true) {
  case num > 0:
    console.log("Положительный");
    break;
  case num < 0:
    console.log("Отрицательный");
    break;
  default:
    console.log("Ноль!");
}
