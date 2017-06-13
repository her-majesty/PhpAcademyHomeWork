console.clear();

// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!

console.info('Hello world!')


// ## 1 Обьявление примитивных переменные
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.
// * Присвойте им значения на свое усмотрение
// * Проверьте валидность кода через парсер

var num = Infinity;
var str = 'Hello world again!';
var nil = null;
var undef = undefined;
var bool = false;


// ## 2 Математические операции
//
// Создайте три переменные (значения сторон треугольник) с типом Number с значениями 7, 8, 9
// * Найдите периметр треугольника
// * Найдите полупериметр треугольника
// * Найдите радиус вписанной окружности в треугольник
// * Найдите радиус вписанной окружности в прямоугольный треугольник
// Результат всех четырех вычислений присвойте переменным и выведете в консоль с помошью функции console.info() с названием расчета
// Пример вывода в консоли: Square = 18

var A = 7;
var B = 8;
var C = 9;
var D = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2));
var rectHalfPerimetr = (A + B + D) / 2;

var perimetr = A + B + C;
var halfPerimetr = perimetr / 2;
var circleRadius = Math.sqrt(((halfPerimetr - A) * (halfPerimetr - B) * (halfPerimetr - C)) / halfPerimetr);
var rectInCircleRadius = Math.sqrt(((rectHalfPerimetr - A) * (rectHalfPerimetr - B) * (rectHalfPerimetr - D)) / rectHalfPerimetr);

console.info('Perimeter = ' + perimetr);
console.info('Semi-perimeter = ' + halfPerimetr);
console.info('Radius of inscribed circle in a triangle = ' + circleRadius);
console.info('Radius of the inscribed circle in a right triangle = ' + rectInCircleRadius);


// ## 3 Названия переменных
//
// Создайте 5 пустых переменных и придумайте им "корректные" названия которые соотвецтвовали б их описанию
// * Переменная для названия емейла пользователя
// * Переменная для текущей даты
// * Переменная для массива фамилий пользователей
// * Переменная для значения "по умолчанию"
// * Переменная которая описывала б значение правой верхней границы html элемента

var userEmail;
var currentDate;
var usersLastname;
var defaultValue;
var borderTopRight;


// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html

var user = {
  name: 'Вася'
};

user.name = 'Петя';


// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки

console.info('6' - 3); // 3 - бинарный минус припедет к числу и выполнит математическую опрерацию
console.info('20' + 10); // 2010 - бинарный + имеет побочный еффект, если один из операндов - строка, выполняется конкатенация строк
console.info('10' + - 2); // 10-2 - так же выполнится конкатинация, но знак - будет так же считаться частью строки
console.info("4px" - 2); // Nan - Бинарный минус попробует привести операнд к строке, но у него ничего не получмться. Следовательно будет Nan. Дальше Nan - 2 = Nan
console.info(15 / 0); // Nan - Делить на 0 нельзя, ожидаемо Infinity
console.info(4 + 5 + "px"); // 9px - Сначала выполнится операция сложения, дальше приведения к строке, так как один операнд - строка
console.info(+""); // 0 - Пустрая строка (как и null, undefined, 0, false и )
console.info(NaN === NaN); // false - Nan не равно ничему, даже самому себе
console.info(null == undefined); // true - приведение типов выведет false для обоих операндов
