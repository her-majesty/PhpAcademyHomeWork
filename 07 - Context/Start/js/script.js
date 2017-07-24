console.clear();

// ## 0 Понимание контекста
//
// Задача обьяснить почму выводится такой результат
// Сделайте так что б функция работала корректно

var fullname = 'Alex Murphy';
var person = {
   fullName: 'John Doe',
   prop: {
      fullName: 'William Mason',
      getFullName: function() {
         return this.fullName;
      }
   }
};

console.log(person.prop.getFullName()); // William Mason

var personProp = person.prop.getFullName;

console.log(personProp()); // Alex Murphy - неверно

// * Your Answer Start *



// * Your Answer End *

// * Your Code Start *



// * Your Code End *

console.log(personProp()); // Должно вывести 'William Mason'


// ## 1 Метод apply
//
// Найдите минимальное и максимальное число посредством метода apply
// Так же не забывайте что существует обьект Math

var  numbers = [20, 386 , 512 , 17 , -228 , 590 , 323647, -3424256, 55657];

// * Your Code Start *



// * Your Code End *

console.log(maxInNumbers) // 323647
console.log(minInNumbers) // -3424256

// ## 2 метод call
//
// Создайте функцию которая сортировала и возврашала аргументы отсортированные по алфавиту (от A до Z)
// и по числам (по возрастанию) если все агументы числовые
// Используйте для этого метод call
// Обратите внимание на регист в строках

// * Your Code Start *



// * Your Code End *

console.log(sortedArgument(12, 4, 6, 8, 56, 7, 4, 7)) // [4, 4, 6, 7, 7, 8, 12, 56]
console.log(sortedArgument('Lorem', 'ipsum', 'dolor', 'Sit', 'amet', 'consectetur', 'adipisicing', 'elit')) // ["adipisicing", "amet", "consectetur", "dolor", "elit", "ipsum", "lorem", "sit"]

// ## 3 Карринг
//
// Создайте цепочку вызовов для прохождения лабиринта

var hero = {
  positionX: 0,
  positionY: 0,
  // * Your Code Start *



  // * Your Code End *
}


console.log(hero.moveBottom(3).moveRight(3).moveLeft(1).moveTop(5));

console.log(hero.positionX, hero.positionY) // 2, -2
