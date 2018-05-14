console.clear();

// ## 0 Работа с функциями
//
// Напишите функцию которая возвращала б сумму всех введенных аргументов
// Если один из аргументов не число, вывод сообщения "Все аргументы должны быть числовыми"

// * Your code Start *

let argumentsSumm = function (...numbers) {
  
    let sum = numbers.reduce((a,b) => a + b);
    return isNaN(sum) ? 'Все аргументы должны быть числовыми' : sum;
  
};

// // // * Your code End *

console.log(argumentsSumm(10, 20, 50, 4, 17))   // 101
console.log(argumentsSumm(0, 1, 1, -1, 1))      // 2
console.log(argumentsSumm(4, 'lol', 0))         // Все аргументы должны быть числовыми
console.log(argumentsSumm(NaN, 4, 6, 4, 0))     // Все аргументы должны быть числовыми

// =============================================================================
// =============================================================================
// =============================================================================

// ## Замыкания
//
// Посмотрите на код внизу
// Обьясните почему он работает именно так
// Перепишите код так, что б он работал корректно. Если значете несколько вариантов, напишите их


// * Your code Start *

// var funcArrays = function () {
//   var arr = [];

//   for (var i = 0; i < 5; i++) {
//     arr.push(function() {
//       return i
//     });
    
//   }
//   console.log(arr);
//   return arr;
// }

// Solution # 1

var funcArrays = function () {
  
  var arr = [];
  
    for (let i = 0; i < 5; i++) {
    arr.push(function() {
      let innerI = i;
      return innerI;
    });
    
  };
    return arr;
};

// // // * Your code End *

var func = funcArrays();

console.log(func[1]()); // Выводит 5, а должно вывести 1
console.log(func[3]()); // Выводит 5, а должно вывести 3



// // =============================================================================
// // =============================================================================
// // =============================================================================



// // ## Callback функции
// //
// // Создайте функцию которая принимает 2 числовых значения
// // Третьим аргументом функции должна быть функция, которая будет манипулировать этими агументами

// // * Your code Start *

function callback (a,b,fn) {
 return  fn(a,b);
};



// // * Your code End *

console.log(callback(20, 10, function(a, b){
  return a + b
})) // Выведет 30


console.log(callback(20, 10, function(a, b){
  return a - b
})) // Выведет 10

console.log(callback(20, 10, function(a, b){
  return a * b
})) // Выведет 200



// // =============================================================================
// // =============================================================================
// // =============================================================================


// // ## Работа с массивами
// //
// // Создать функцию которая будет обьеденять массив со строкой по разделителю
// // Функция должна принимать 3 аргумента (Массив, строку, разделитель)
// // Возвращает функция массив обьедененный со строкой по разделителю.
// // Массив должен быть отсортирован в алфавитном порядке

const arrayData = ['Alaska', 'Alabama', 'Virginia'];

const stringDataOne = 'Washington, Indiana, Louisiana';
const stringDataTwo = 'Massachusetts Nebraska';

// // // * Your code Start *

function concatArrayWithString (arr, str, divider) {
  
  let strToArr = str.split(divider);
  let resultArr = arr.concat(strToArr);
  
  return resultArr.sort();

}


// // // * Your code End *

console.log(concatArrayWithString(arrayData, stringDataOne, ', ')); // Выводит массив: ["Alabama", "Alaska", "Indiana", "Louisiana", "Virginia", "Washington"]
console.log(concatArrayWithString(arrayData, stringDataTwo, ' ')); // Выводит массив: ["Alabama", "Alaska", "Massachusetts", "Nebraska", "Virginia"]


// // =============================================================================
// // =============================================================================
// // =============================================================================


// // ## Методы перебора массива
// //
// // Задача создать 4 функции которые создают новый массив ()
// // Во всех случаях за основу берется массив itDepartment
// // Помните что работаете с обектами. Соотвецтвенно для сравнения вам нужно работать с ключами обьекта

var itDepartment = [
  { first: 'Philip', last: 'Bradley', born: 1979, possition: 'Back-end' },
  { first: 'Phil', last: 'Harmon', born: 1983, possition: 'Front-end' },
  { first: 'Marty', last: 'Ormond', born: 1991, possition: 'Front-end' },
  { first: 'Silvester', last: 'Rod', born: 1987, possition: 'QA' },
  { first: 'Johannes', last: 'Planck', born: 1971, possition: 'Front-end' },
  { first: 'Reynard', last: 'Christopher', born: 1973, possition: 'QA' },
  { first: 'Max', last: 'Forrest', born: 1988, possition: 'Manager' },
];

// // * Your code Start *

const fullNames = itDepartment.map((curr) => curr.first + ' ' + curr.last);

const filtered = itDepartment.filter(function(worker) {

if  (worker.possition === 'Front-end' || worker.possition === 'Back-end') return console.log(`name: ${worker.first}; position: ${worker.possition}`);

});
  
const sorted = itDepartment.sort((a, b) => a.born - b.born);

const counter = itDepartment.reduce(function(acc, department) {
  const position = department.possition;
  
  if (!acc[position]) acc[position] = 1;
  else acc[position]++;
  return acc;
}, {})


// // * Your code End *
// //
// // map(); Создайте массив в котором будут имена и фамилии всех работников It департамента. (В формате Philip Bradley)
console.dir(fullNames);

// // filter(); Отфильтруйте всех разработчиков (Developer) И выведете их имена и должности
console.dir(filtered);

// // sort(); Отсортируйте массив по возрасту работников. По убыванию. (Подсказака: Можете использовать конструктор new Data(). Но можно и просто по дате)
console.dir(sorted);

// // reduce(); Узнайте сколько всего разработчико разных должностей. Например:
// // Front-end: 2,
// // Back-end: 1,
// // QA: 2
// // Manager: 1

console.log(counter);