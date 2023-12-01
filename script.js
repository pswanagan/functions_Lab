/**
 * Creating Reusable Function Lab
 */




/**
 * Part 1: Thinking Functionality
 */


const  basketNumbers = [15, 76, 5, 45, 67];

// Take an array of numbers and return the sum.
const addArray = (numArray) => {
    let sum = 0;
    for(let i = 0; i <= numArray.length - 1; i++){
        sum = sum + numArray[i];
    }
    return sum;
}
console.log(addArray(basketNumbers));

// Take an array of numbers and return the average
const avgArray = (avArray) => {
    let sum =0;
    for(let i = 0; i <= avArray.length - 1; i++){
        sum = sum + avArray[i];
    }
    return sum / avArray.length;
}

console.log(avgArray(basketNumbers));

// Take an array of strings and return the longest string
const lambChop = ["This", "is", "the", "song", "that", "never", "ends"];


const longString = (groupString) => {
    let longestString = '';
    for(let i = 0; i <= groupString.length - 1; i++){
        if(groupString[i].length > longestString.length){
            longestString = groupString[i];
        }
        
    }
    return longestString;
}
console.log(longString(lambChop));


// Take an array of strings, and a number and return an array of the strings that are longer than the given number

const givenNumString = (groupString, num) => {
    let arrayStrings = [];
    for(let i = 0; i <= groupString.length - 1; i++){
        if(groupString[i].length > num){
         arrayStrings.push(groupString[i]);
        }
        
    }
    return arrayStrings;
}

console.log(givenNumString(lambChop, 2));
// Optional- Take a number n, and pring every number between 1 and n without using loops. Use recursion.


/**
 * Part 2: Thinking Methodically
 */


const testData = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
 

// Sort the array by age
const newTestData = testData.sort((a,b) => a.age - b.age);
console.log(newTestData);

// Filter the array to remove entries with an age greater than 50

const isGreater50 = (entryArray) => {
    return entryArray.age < 50;
}
const filteredArray = testData.filter(isGreater50);
console.log(filteredArray);
// Map the array to change the “occupation” key to “job” and increment every age by 1

const changeData = testData.map(person => ({
    id: person.id, 
    name: person.name,
    job: person.occupation,
    age: parseInt(person.age) + 1
}));

console.log(changeData);
// Use the reduce method to calculate the sum of the ages. Then use the result to calculate the average age.

const sumOfAges = testData.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.age), 0,);
const averageOfAges = sumOfAges / testData.length;
console.log(sumOfAges + ` is the sum of the ages`);
console.log(averageOfAges + ` is the average of the ages`);
/**
 *  Part 3: Thinking Critically
 * 
 */

/**
 * Take an object and increment its age field.
 *Take an object, make a copy, and increment the age field of the copy. Return the copy.
 *For each of the functions above, if the object does not yet contain an age field, create one and set it to 0. Also, add (or modify, as appropriate) an updated_at field that *stores a Date object with the current time.
 */

 // Take an object and increment its age field.

const addAge = (Person) =>{
    if (!Person.hasOwnProperty('age')) {
        Person.age = 0;
    }else {
        Person.age++;
    }
  
    
    Person.updated_at = new Date();
  
    return Person;
  }
  
  // Example usage:
  const myPerson = { name: "John" };
  addAge(myPerson);
  console.log(myPerson);