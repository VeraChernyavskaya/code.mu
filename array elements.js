/* Элементы массива:
1. Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый из этих элементов.
*/
let arr = ['a', 'b', 'c'];
console.log(arr[0]); // 'a'
console.log(arr[1]); // 'b'
console.log(arr[2]); // 'c'

/*
2. Создайте массив с элементами массив с элементами 'a', 'b', 'c', 'd'. Выведите с его помощью на экран строку 'a+b+c+d'.
*/
let array = ['a', 'b', 'c', 'd'];
console.log(`${arr[0]}+${arr[1]}+${arr[2]}+${arr[3]}`) // 'a+b+c+d'
/*
let result = arr[0] +'+'+ arr[1] +'+'+ arr[2] +'+'+ arr[3]
console.log(result) // 'a+b+c+d'
*/


/* 
3. Создайте массив с элементами 1, 2 и 3. Выведите на экран сумму этих элементов.
*/
let newArr = [1, 2, 3];
let sum = newArr[0] + newArr[1] + newArr[2]
console.log(sum) // 6


/*
4. Создайте массив с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
*/
let newArray = [2, 5, 3, 9];
let firstProduct = newArray[0] * newArray[1];
let secondProduct = newArray[2] * newArray[3];
let result = firstProduct + secondProduct;
console.log(result) // 37