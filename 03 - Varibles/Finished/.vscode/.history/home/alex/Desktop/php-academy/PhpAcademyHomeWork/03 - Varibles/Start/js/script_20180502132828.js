console.clear();

// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!

console.log('Hello World!');

// ## 1 Обьявление примитивных переменные
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.
// * Присвойте им значения на свое усмотрение
// * Проверьте валидность кода через парсер

var myNumber = 1;
var myString = 'hello';
var myBollean = true;
var myUndefined = undefined;
var myNull = null;



// ## 2 Математические операции
//
// Создайте три переменные (значения сторон треугольник) с типом Number с значениями 7, 8, 9
// * Найдите периметр треугольника
// * Найдите полупериметр треугольника
// * Найдите радиус вписанной окружности в треугольник
// * Найдите радиус вписанной окружности в прямоугольный треугольник
// Результат всех четырех вычислений присвойте переменным и выведете в консоль с помошью функции console.info() с названием расчета
// Пример вывода в консоли: Square = 18

var sideA = 7;
var sideB = 8;
var sideC = 9;

var perimetr = sideA + sideB + sideC;
var halfPerimetr = perimetr / 2;
var internalRoundRadius = Math.sqrt((halfPerimetr-sideA)*(halfPerimetr-sideB)*(halfPerimetr-sideC)/halfPerimetr);
var internalRoundRadiusRightangled = (sideA+sideB-sideC)/2;

console.log('Perimetr = ' + perimetr, 'halfPerimetr = ' + halfPerimetr, 'internalRoundRadius= ' + internalRoundRadius, 'internalRoundRadiusRightangled = ' + internalRoundRadiusRightangled);


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
var userSurnamesArr;
var defaultValue;
var topRightBorder;




// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html

var user = {
    name: 'Vasya',
}
user.name = 'Petya';

console.log(user.name);



// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки

console.info('6' - 3); // При математических операциях, кроме сложения, пытается преобразовать в число
console.info('20' + 10); // воспринимает как конкатенацию строк
console.info('10' + - 2); // воспринимает как конкатенацию строк, вторая строка "-2";
console.info("4px" - 2); // пытается преобразить в число, но если не получилось - NaN;
console.info(15 / 0); // деление числа на 0 всегда дает Infinity;
console.info(4 + 5 + "px"); // 
console.info(+"");
console.info(NaN === NaN);
console.info(null == undefined);
