console.clear();

// ## 0 Понимание контекста
//
// Задача обьяснить почму выводится такой результат

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

console.log(person.prop.getFullname()); // William Mason

var personProp = person.prop.getFullname;

console.log(personProp()); // Alex Murphy

// * Your Answer Start *



// * Your Answer End *
