console.clear();

// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Длинна номера не должна быть не меньше 9 и не больше 11

function checkPhoneLength(phone) {
  if (phone.length >= 9 && phone.length <= 11) return "Phone number is correct";
  else return "Please enter corect phone number";
}

console.log(checkPhoneLength('80637046711'));



// // ## 1 Клонирование обьектов
// //
// // Склонируйте обьект objectA в objectB при помощи цикла

var objectA = {
  name: 'John',
  lastname: 'Dou',
  age: 50
}

var objectB = {};

for (let key in objectA) {
  objectB[key] = objectA[key];
}

// // // Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// // // Если обьект objectB склонирован, значения в нем меняться не будут
// // // Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50


// // ## 2 Ветвление
// // При помощи конструкци switch/case выведете текущую дату
// // Название месяца должно иметь вид строки
// // Например = 14 Июня 2017

var date = new Date();
var day = date.getDate(); // Текущий день
var month = date.getMonth(); // Текущий месяц (от 0 до 11)
var year = date.getFullYear(); // Текущий год
var monthName = ''; // Переменная для значения

switch (month) {
  case 0:
    monthName = "of January";
    break;
  case 1:
    monthName = "of February"
    break;
  case 2:
    monthName = "of March";
    break;
  case 3:
    monthName = "of April";
    break;
  case 4:
    monthName = "of May";
    break;
  case 5:
    monthName = "of June";
    break;
  case 6:
    monthName = "of July";
    break;
  case 7:
    monthName = "of August";
    break;
  case 8:
    monthName = "of September";
    break;
  case 9:
    monthName = "of October";
    break;
  case 10:
    monthName = "of November";
    break;
  case 11:
    monthName = "of December";
    break;
}

console.log(`Today is: ${day} ${monthName} ${year}`) // Пример: 14 Июня 2017



// // ## 3 Взаимодействие с пользователем
// //
// // Запросите через prompt у пользователя его имя;
// // Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// // После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// // -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// // -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл

var users = [{
  name: 'Alex',
  password: 123
}, {
  name: 'Chris',
  password: 456
}, {
  name: 'Bill',
  password: 789
}];

// Solution # 1

function checkSignInData() {

  let userName;
  let password;

  userName = prompt('Please enter your user name', '');

  if (userName == '' || userName == null) return "Authorization was stopped";

  for (var i = 0; i <= users.length; i++) {

    if (i == users.length) return checkSignInData();

    if (userName == users[i].name) {

      passWord = prompt('Please enter your password', '');

      if (passWord == users[i].password.toString()) {

        alert(`Access allowed! Welcome, ${users[i].name}!`);
        return "Successful authorization!";
      } else {
        alert('Wrong password! Please try again!');
        return checkSignInData();
      };
    } else continue;
  };
};

console.log(checkSignInData());

// Solution # 2

function checkSignInData() {

  let userName;
  let password;
  let userIndex;

  function checkUserName() {

    while (true) {

      userName = prompt('Please enter your user name', '');
      if (userName === '' || userName === null) break;

      for (let i = 0; i < users.length; i++) {
        if (userName == users[i].name) return i;
        else continue;
      };
    };

    return "Authorization was stopped";

  };

  userIndex = checkUserName();
  if (userIndex === "Authorization was stopped") return "Authorization was stopped";

  password = prompt('Please enter your password', '');

  if (password === users[userIndex].password.toString()) {
    alert(`Access allowed! Welcome, ${users[userIndex].name}!`);
  } else {
    alert('Wrong password! Please try again!');
    checkSignInData();
  };
  return "Successful authorization!";
};

console.log(checkSignInData());


// // ## 4
// // Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// // Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// // После прерывания цикла выводится сумма введеных чисел

function sumEnteredNumbers() {

  var sumArray;
  let sum = 0;

  while (true) {

    sumArray = prompt('Please enter number', 0);

    if (isNaN(sumArray) || sumArray === null) break;
    sum += (+sumArray);
  }
  return sum;
};

console.log(sumEnteredNumbers());

// // ## 5
// // Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt

var summetNumber = +prompt('Please enter number', 0);

function sum() {
  let sum = 0;
  for (let i = 1; i <= summetNumber; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(summetNumber));


// // ## 6
// // Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// // Размер шахматной доски стандартны 8х8
// // Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// // Ее можно не трогать
// // Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// // Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js

var drawFraction = function () {
  const board = document.querySelector('.board');
  const fraction = document.createElement('div');
  board.appendChild(fraction);
}

const size = 8;


for (let i = 1, k = i - 1; i <= size; i++) {

  if (i % 2 == 0) {

    for (let j = 1; j <= size; j++, k++) {
      drawFraction();
      if (j % 2 == 0) {
        document.querySelectorAll('.board > div')[k].classList.add('black');
      } else {
        document.querySelectorAll('.board > div')[k].classList.remove('black');
      };
    };

  } else {

    for (let j = 1; j <= size; j++, k++) {
      drawFraction();
      if (j % 2 == 0) {
        document.querySelectorAll('.board > div')[k].classList.remove('black');
      } else {
        document.querySelectorAll('.board > div')[k].classList.add('black');
      };
    };
  };
};