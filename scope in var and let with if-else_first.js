/*
Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода. Вот проблемный код:
let age = 17;


if (age >= 18) {
let adult = true;
} else {
let adult = false;
}

console.log(adult); // выведет ошибку

Причина ошибки: переменные let adult видны только внутри {}, а console.log(adult) обращается к переменной, которая не объявлена
*/

let age = 17;
let adult;

if (age >= 18) {
adult = true;
} else {
adult = false;
}

console.log(adult); // false, т.к. возраст 17 лет

