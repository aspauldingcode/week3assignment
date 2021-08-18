
//Array called "ages"
let ages = [3,9,23,64,2,8,28,93,60];
//print ages to log
console.log("Listed ages: " + ages)

// Programmatically subtract the value of the first element in the array from the value in the last element of the array
let first = ages[0]
let last = ages[ages.length - 1];
//print to the console
console.log("Subtract first age from last: " + (last - first));

//find the average age
for (let i = 0; i < ages.length; i++) {
    var ageAverage = (ages[i] / ages.length);
}
//and print average age
console.log("Average age: " + ageAverage);

//Create an array called "names"
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//calculate average numbers of letters per name with a loop
let letters = names.join("").length;
let lettersAverage = letters / names.length;
//and print average letter per name
console.log("Average letters per name: " + lettersAverage);
//concatenate names together with spaces, print to log
console.log("Listed names: " + names.join(" "));


// //New array called nameLengths
let nameLengths = [];

    // COUNT EACH NAME LETTERS
let count = names.map(function(element) {
    return element.length;
});

// console.log(count);
// //write a loop to iterate over previous names and add the length of each name to the nameLengths array.
for (let i = 0; i < names.length; i++) {
    nameLengths.push(count[i]);
}
// // print nameLengths to the log, seperated by spaces.

console.log("Length of each name: ");
console.log(nameLengths);

//loop to write over nameLengths Array, calculate the sum of all the elements in the array.

for (let i = 0; i < names.length; i++) {
    var nameLengthsNum = (i + 1);
}

//print results
console.log(nameLengthsNum);

//write a function that takes two parameters

function wordTimesN(word, n) {
  var wordInput = "";
  while (n > 0) {
    wordInput += word;
    n--;
  }
  return wordInput;
}
console.log(wordTimesN("I am annoying ", 12));

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

//print to log
console.log(fullName("Alex", "Spaulding"));


//array of numbers, and a function to calculate the sum
let arrayOfNums = [1, 5, 2, 7, 12, 6, 2, 7, 12, 6, 2, 6, 12, 6, 2, 7, 12, 6, 2, 7, 12, 6];


//the function to calculate sum
let numArrayCount = arrayOfNums.reduce(function(a, b){
    return a + b;
}, 0);
//print true if sum is higher to log
if (numArrayCount > 100) {
    console.log("the sum of the numbers in the array are higher than 100;"); 
    console.log(true);
}
//calculate average numbers of all elements
let averageArrayNums = numArrayCount / arrayOfNums.length
//and print average number to console
console.log("Average number per element in arrray: " + averageArrayNums);



//array of nums 2
let arrayOfNums2 = [1, 141, 5];

//the function to calculate sum
let numArrayCount2 = arrayOfNums2.reduce(function(a, b){
    return a + b;
}, 0);
//calculate average numbers of all elements
let averageArrayNums2 = numArrayCount2 / arrayOfNums2.length
//and print average number to console
console.log("Average number per element in arrray: " + averageArrayNums2);
//print true if average is higher to log
if (numArrayCount2 > 100) {
    console.log("the average of the numbers in the second array are higher than the average of the first;"); 
    console.log(true);
}

let isHotOutside = true
let moneyInPocket = 15
//function buying drink
function willBuyDrink() {
    if (moneyInPocket > 10.50 && isHotOutside)
    return true
}
console.log("you are definitely  buying a drink:");
console.log(willBuyDrink());


//my own function describes importance of Work

let hoursWorked = 24;
let daysWorked = 7;
let wage = 1.15;
function isCurrentJobGood() {
    //if the job is alright, say true
    if (daysWorked >= 7 && hoursWorked >= 24 && wage >= 1000000000) {
        return true;
    } else {
    //if the job is AWFUL, say false
        return false;   
    }
     
}

//ask if true or false
console.log("is your current job good?");
//return answer
console.log(isCurrentJobGood());




//What didn't work when I tried it:

// var numArrayCount = arrayOfNums.reduce(function(a, b){
//     if ((a + b) > 100) {
//         return true;
//     }
// });

// var array = [1, 2, 3, 4, 5];




// console.log(arrayOfNums.length);
// console.log(numArrayCount);


// console.log(numArrayCount(arrayCounted));
// // console.log(arrayCounted);
// console.log(numArrayCount(arrayCounted));


// function numArrayCount(o) {
//     if (arrayCounted > 100) {
//         console.log("true");
//     } 
//     console.log("well darn!");
// }

// let arrayCounted = arrayOfNums.length;
// let arrayCounted = arrayOfNums.map(function(element) {
//     return element.join;
// });


//test print
// console.log(nameLengths.push[count]);
// console.log(nameLengths[count]);
// console.log(pants = (names[i]));
// console.log(nameLengths.push(pants));
// let nameStr = 
// let count = nameStr.length;
// console.log(count);
// console.log(i);
// console.log(nameLengthsStr.push(i));
// let numOfLettersPerName = 
// let nameLengths = (names[eachLength] + letters);
// nameLengths.push[eachLength];


// for (let i = 0; i < names.length; i++) {
//     console.log(i);

// }

// function letterCountNL(str) {
//     ar.forEach(w => w.split('').forEach(e => o[e] = (o[e] || 0)+1));
// console.log(o)
// }
// console.log(letterCountNL(letters));


// console.log("Length of each name: " + nameLengths.push(i));


// console.log(names.length);



// console.log(nameLengths.push(names.join(" ").length));



/* Code to loop calculating average number of letters per name. 

for (var i = 0; i < names.length; i++) {
var lettersAverage = (names[i] / names.length);
}
Fixed this above with:
let letters = names.join("").length;
let lettersAverage = letters / names.length
*/ 

// nameLengths.join("").split("").forEach(e >= eachLength[e], (eachLength[e] || 0)+1);



/* semi-unrelated messing around with code....
Hint: you can ignore all of this

Depricated "name" method:
for (name of ages) {
    console.log(name);
}

createFullName("Alex", "Spaulding");
console.log("It looks like " + createFullName);

function myFunction() {
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}

function createFullName(firstName, lastName) {
    console.log(firstName + " " + lastName)
}

myFunction();

for (let i = 0; i < ages.length; i++) {
    console.log(ages[1]);
}
*/