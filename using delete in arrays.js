/*
Дан массив:

let arr = ['a', 'b', 'c', 'd', 'e'];
Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.
*/

let arr = ['a', 'b', 'c', 'd', 'e'];
//console.log(arr.length) // начальная длина массива 5
delete arr[2]; // удалит ‘c’
delete arr[0]; // удалит ‘a’
console.log(arr); // [,"b",,"d","e"]
console.log(arr.length) // конечная длина массива 5

