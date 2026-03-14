//👀DESCRIPTION:
// Создайте функцию multiplyNumeric(obj), которая
// умножает все числовые свойства объекта obj на 2.
//📑NOTES:
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать.
// Следует напрямую изменять объект.
//
// P.S. Используйте typeof для проверки, что значение свойства числовое.
//🛷EXAMPLES:
//  // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
//
// multiplyNumeric(menu);
//
//  // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

//👨‍💻SOLUTION:

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj){
    for(numValue in obj){
        if (typeof (obj[numValue]) === "number"){
            (obj[numValue]) = (obj[numValue]) * 2;
        }
    }
}

multiplyNumeric(menu)
console.log(menu)