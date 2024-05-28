//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;
    }
const stepsHtml = stemps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();


const grades = ["A", "B", "A"];
function gpaCalculator(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}
const newGpa = grades.map(gpaCalculator)

const gpaPoints = grades.map(gpaCalculator);
const pointsTotal = gpaPoints.reduce(function (total, itme) {
    return total + itme;
});
const gpa = pointsTotal / gpaPoints.lenght
 

const food = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortFood = food.filter(function (food) {
    return food.length < 6;
});

const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);