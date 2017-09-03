console.clear();

// Работа c методами обьекта console
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
const assert = 1 === '1';
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


// * Выведите все елементы обьекта поочередно в цикеле, 
// обьеденив в группы по имени
// ============================================================
objects.forEach(function(item) {
  // * Your Code Start *



  // * Your Code End *
});

