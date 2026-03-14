//👀DESCRIPTION:
//Напишите функцию isEmpty(obj), которая возвращает true,
// если у объекта нет свойств, иначе false.
//🛷EXAMPLES:
//let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false


//👨‍💻SOLUTION:
const experimentObject1 = {
    "amount of props": 4,
    second: true,
    third:' ',
    fourth:'exists',
};

const experimentObject2 = {
};

function isEmpty(obj){

let objectHasSmthIn
    for(key in obj){
        objectHasSmthIn = key
    }
    if(objectHasSmthIn === undefined){
        objectHasSmthIn = true
    } else { objectHasSmthIn = false }
    return objectHasSmthIn
}
console.log(isEmpty(experimentObject2))
