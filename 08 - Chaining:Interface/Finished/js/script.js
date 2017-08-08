console.clear();

// ## 0 Чейнинг
//
// Сделайте методы обьекта "рабочими".
// Результут: В файле index.html должен быть отрисован прямоугольник

var rectangle = document.querySelector('.rectangle'); // Выбор DOM елемента

var rectangleDraw = {
	width: 0,
	height: 0,
	backgroundColor: 'transparent',
  // * Your Code Start *

	setWidth: function(width){
		this.width = width;
		return this;
	},

	setHeight: function(height){
		this.height = height;
		return this;
	},

	setColor: function(setColor){
		this.backgroundColor = setColor;
		return this;
	},

  // * Your Code End *
	draw: function(el) {
		el.style.width = `${this.width}px`;
		el.style.height = `${this.height}px`;
		el.style.backgroundColor = this.backgroundColor;
    el.innerHTML = `${this.width}px x ${this.height}px`;
	}
}

rectangleDraw.setWidth(400).setHeight(250).setColor('#990').draw(rectangle) // Результат: Прямоугольник высотой 250px и шириной 400px темно-желтого цвета

// ## 1 Приватные и публичные методы и пременные
//
// Реализуйте код аналогичному примеру
// Создайте модуль circleDraw
// У этого модуля должны быть приватные и публичные методы
// Публичные: setRadius setColor draw
// Приватные на свое усмотрение
// (Пример подобного модуля мы разбирали на уроке где был canvas)

var circle = document.querySelector('.circle'); // Выбор DOM елемента

// * Your Code Start *


// * Your Code End *

circleDraw.setRadius(110);
circleDraw.setColor('#f00');
circleDraw.draw(circle); // В блоке Drawing circle должен появится круг размером 220px, красного цвета
