//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

const faveColors = ['red', 'green', 'black']

//CODE HERE

let colorCopy = faveColors.slice(0,3)

// From my understanding the first argument is the starting indices and the second is the ending indices, however when I had (0,2) the console only logged the first two indices, so I changed it to (0,3) to copy the whole array
// console.log(colorCopy)

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

//CODE HERE

colorCopy.push('purple')
// console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

let middleNums = numbers.splice(1,3)
// console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create a function called 'bigOrSmall' that takes in one parameter, 'arr', 
  which will be an array of numbers. 
  Inside of the bigOrSmall function, create a new array called 'answers'. 
  Then, loop over the passed in arr parameter, and check to see if the number in the
  array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
  Return the answers array inside of the function.
*/

// CODE HERE
let arr = [50, 150, 100, 200]

function bigOrSmall(arr){
  let answers = []
  for (let i = 0; i < arr.length; i++){
    if ([i] > 100){
      answers.push('big')
    } else if ([i] <= 100){
      answers.push('small')
    }
    return answers
  }
 
}

bigOrSmall(arr)
console.log(bigOrSmall(arr))

// that is my attempt for now, I'm still missing something because I've only pushed 'small' to the answers arr once when it should be 'small', 'big', 'small', 'big'