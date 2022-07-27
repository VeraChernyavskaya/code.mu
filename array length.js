/*
В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
*/

let arr = [5, 9, 5];
if (arr.length === 3) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log(result) // выведет 19
} else {
  console.log("Array includes more than 3 elements")
}
