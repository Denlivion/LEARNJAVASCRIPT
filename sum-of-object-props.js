//👀DESCRIPTION:
// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
//
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
//📑NOTES:
// Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.


//👨‍💻SOLUTION:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function salariesSum(obj){
    let sum = 0;
    let temporaryNum
    for(value in obj){
        temporaryNum = obj[value];
        if(temporaryNum){
            sum+=temporaryNum
        } else { sum }
    }

    return sum
}

console.log(salariesSum(salaries))