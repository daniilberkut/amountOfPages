'use strict';

/*
В каждой книге есть n страниц с номерами страниц от 1 до n. 
Написать функцию amountOfPages, аргумент которой summary 
составляется путем сложения количества цифр всех номеров страниц. 
Эта функция возвращает число - количество страниц n в книге. 
*/

function amountOfPages(summary) {
	let count = 0;
	for (let i = 1; i <= summary; i++) {
		count += i.toString().length;
		if (count === summary) return i;
	}
}

console.log(amountOfPages(5));
console.log(amountOfPages(185));
