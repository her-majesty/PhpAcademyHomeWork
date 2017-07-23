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

var personProp = person.prop.getFullName.bind(person.prop);

console.log(personProp()); // Alex Murphy - неверно

// * Your Answer Start *



// * Your Answer End *

// * Your Code Start *



// * Your Code End *

console.log(personProp()); // Должно вывести 'William Mason'
