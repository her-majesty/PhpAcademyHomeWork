console.clear();

// ## 0 Обьекты как нумерованные массивы
//
// При создании обьекта через литерал ({}) через __proto__ доступны методы, такие как .valueOf, .hasOwnPropperty
// Цель: создать новый обьект из массива, в котором не было б лишних методов

const states = ["Alabama", "Alaska", "Arizon ", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New", "New", "New", "New", "North", "North", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode", "South", "South", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West", "Wisconsin", "Wyoming"];

// * Your code Start *



// * Your code End *

try {
  console.log(statesObject.toLocaleString())  //[object Object] . Так как у обьекта есть этот метод
} catch (err) {
  console.info(`Ошибка: ${err.message}`)
}  // Если выводится сообшение об ошибке, значит такого свойства нет

console.log('='.repeat(50));

// ## 1 Дескрипторы, модификация обьекта
//
// Модифицируйте свойства обьекта
// ** Свойство name должно быть константой, которую нельзя удалить или модифицировать
// ** Свойство age можно удалит и модифицировать
// ** Свойство password нельзя удалить, можно модифицировать и его не должно быть видно в цикле for..in

const user = {
  name: 'Alex',
  age: 30,
  password: 'Pt3]cfoes'
};

// * Your code Start *



// * Your code End *

delete user.name;
user.name = 'Sasha';
user.age = 25;
user.password = 'JqcU7#fr';

for (var key in user) {
  console.log(user[key]) // Должно вывести "Alex, 30". Пароль в перебор попасть не должен. Будет выведен дальше
}

console.log(user.password) // Вывод: 'JqcU7#fr'

console.log('='.repeat(50));

// ## 2 Конструкторы и обьекты
//
// Цель: Создать 3 персонажа из "Братства кольца"
// Каждый персонаж будет иметь 5 свойств (Имя, Оружие - принимаемые аргумент, Интелект, Сила, Ловкость - задаются по умолчанию как 10)
// ** Создайте класс\конструктор Character который будет создавать персонажа (Без рассы)
// ** Конструктор принимает имя персонажа, оружие и создает обьект с 3я свойствами по умолчанию (Все зачения = 10)
// Создайте 3 дочерних класса (Elf, Gnome, Human)
// ** Конструкторы наследуют значения родителя Character
// ** У каждого дочернего класса есть своя особенность
// Например
// ** Ельф на 20% более ловкий и на 15% менее сильный
// ** Человек на 10% больше интелекта но 10% уступает в ловкости
// ** Гном на 30% сильнее и на 20% менее умен
// Так же при приведении обьекта к типу - строка, обьект выводит название оружия персонажа

// * Your code Start *



// * Your code End *

const legolas = new Elf('Леголас', 'Лук');
const gimli = new Gnome('Гимли', 'Секира');
const aragorn = new Human('Арагорн', 'Меч');

console.table(legolas);
/*  name: "Леголас"
    weapons: "Лук"
    intelligence: 10
    strength: 8.5
    dexterity: 12
*/

console.table(gimli);
/*  name: "Гимли"
    weapons: "Секира"
    intelligence: 8
    strength: 13
    dexterity: 10
*/

console.table(aragorn);
/*  name: "Арагорн"
    weapons: "Меч"
    intelligence: 11
    strength: 10
    dexterity: 9
*/

console.log(`Мой ${aragorn} с тобой`); // Вывод: Мой меч с тобой
console.log(`И мой ${legolas} тоже`); // Вывод: И мой лук тоже
console.log(`И моя ${gimli}!`) // Вывод: И моя секира!
