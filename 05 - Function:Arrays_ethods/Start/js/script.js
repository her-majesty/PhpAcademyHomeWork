console.clear();

// ## 0 Работа с функциями
//
// Напишите функцию которая возвращала б сумму всех введенных аргументов
// Если один из аргументов не число, вывод сообщения "Все аргументы должны быть числовыми"

// * Your code Start *



// * Your code End *

//console.log(argumentsSumm(10, 20, 50, 4, 17))   // 97
//console.log(argumentsSumm(0, 1, 1, -1, 1))      // 3
//console.log(argumentsSumm(4, 'lol', 0))         // Все аргументы должны быть числовыми
//console.log(argumentsSumm(NaN, 4, 6, 4, 0))     // Все аргументы должны быть числовыми


// ## 1 Замыкания
//
// Посмотрите на код внизу
// Обьясните почему он работает именно так
// Перепишите код так, что б он работал корректно


// * Your code Start *

var funcArrays = function () {
  var arr = [];

  for (var i = 0; i < 5; i++) {
    arr.push(function() {
      return i
    });
  }

  return arr;
}

// * Your code End *

var func = funcArrays();

console.log(func[1]()); // Выводит 5, а должно вывести 1
console.log(func[3]()); // Выводит 5, а должно вывести 3


// ## Работа с массивами
// Совсестите массив и строку с именами именно в таком порядке, как показанно в комментариях в строке%.

var oldArray = ['Dave Burt', 'Sylvanus Jeremiah'];
var namesString = 'Hartley Evander, Kole Grady';

// * Your code Start *



// * Your code End *

console.log(oldArray.reverse()) // Должен вывести - 'Dave Burt | Hartley Evander | Kole Grady | Sylvanus Jeremiah'
