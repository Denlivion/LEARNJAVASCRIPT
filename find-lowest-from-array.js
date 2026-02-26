//👀DESCRIPTION:
//Find the lowest from the array 'scores' and push it to the
// array 'worstSolution:

const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54,
    48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

//👨‍💻SOLUTION:
const worstSolution = [];
let lowestResult = 100;
//найти меньшее из значений и добавить его в созданный массив
for (let i = 0; i < scores.length; i++){
    if(scores[i] < lowestResult){
        for (let i = 0; i < scores.length; i++){
            if(lowestResult>scores[i]) {
                lowestResult = scores[i]
            }
        }
    }
}
worstSolution.push(lowestResult)
console.log("The worst result is: " + worstSolution)