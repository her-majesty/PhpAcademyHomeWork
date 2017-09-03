console.clear();

// *** Работа c методами обьекта console ***
// 
// * Попробуйте для каждого вида данных использовать свой 
// метод обьекта console
// ============================================================
const domElement = document.querySelector('.some-dom-element');
const xmlElement = document.querySelector('.some-xml-element');
const styledMessage = 'This message must be red, and font size must be 22px'
const infoMessage = 'This is an info message.';
const warningMessage = 'This is an warning message.';
const errorMessage = 'This is an error message.';
const asserts = 1 === '1';
const objects = [{
        firstName: 'Alex',
        lastName: 'Simpson',
        age: 20
    },
    {
        firstName: 'Bob',
        lastName: 'Dylan',
        age: 34
    },
    {
        firstName: 'Chris',
        lastName: 'Coyier',
        age: 27
    }
];

// * Your Code Start *



// * Your Code End *


// * Выведите в консоль время выполнения функции
// ============================================================

// * Your Code Start *

(function(){
  for(let i = 0; i < 100000;) {
    i += 1;
  }
}());

// * Your Code End *


// * Выведите все елементы обьекта поочередно в цикле, 
// обьеденив в группы, по имени
// ============================================================
objects.forEach(function(item) {
  // * Your Code Start *



  // * Your Code End *
});


// *** Регулярные выражения ***
//
// * Найдите евсе совпадения 'dolor' в подстроке
var dolors = `Lorem ipsum dolor sit amet, consectetur 
adipisicing elit. Sed odio quisquam doloremque 
dignissimos vitae accusantium neque eveniet 
necessitatibus nulla quas est sint libero, 
aperiam autem labore delectus! Sed, ipsum, cupiditate.`;

// * Your Code Start *



  // * Your Code End *


// Удаление пробелов
// ============================================================
// * Напишите regex который удалял бы все проблеы в начале и в конце строк
// * Так же все пробелы внутри строки которых более одного заменял бы на 1 пробел

var trimString = '   Lorem      ipsum dolor  sit amet,        consectetur   adipisicing elit     '; // => "Lorem ipsum dolor sit amet, consectetur adipisicing elit"

// * Your Code Start *



  // * Your Code End *

// Замена в цикле
// ============================================================
// * Создайте цикл который используя регулярные выражения проходил 
// * по всем "путям" и заменял их на такие как указаны в комментариях
var parts = [
  './img/image1.jpg',    // => ./img/image1.jpg
  'https://images.google.com/images/../img/image2.png',    // => ./img/image2.png
  '.\img/image3.gif',    // => ./img/image3.gif
  'localhos/img/image4.png',    // => ./img/image4.png
  '../image5.psd',    // => ./img/image5.psd
];

// * Your Code Start *



// * Your Code End *


// *** Unit тестирование (TDD) ***
//
// Напришите 3 теста для проверки полей абстрактной формы логина (Fields: Login\Password\Email)
// Реализовывать методы валидации и тд не нужно.
// Представьте что вы используете подход TDD. (Сначала тесты, потом реализация)
// Тесты должны быть описанны в файле test.js
