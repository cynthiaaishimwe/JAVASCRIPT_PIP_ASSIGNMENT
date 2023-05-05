// Write a function that takes a string as input and 
// returns the number of vowels in the string.

function countVowels(numb) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < numb.length; i++) {
    if (vowels.includes(numb[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
let numb = "akirachix"
console.log(countVowels(numb))

// Write a function that takes an array of numbers as input and 
// returns the sum of all the numbers.

function sumNums(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
    
  }
  let numbers = [1, 2, 3, 4, 5];
  console.log(sumNums(numbers))


//   Write a function that takes two numbers as input and 
//   returns true if their sum is greater than 100, and false otherwise.

function sumGreaterThan(num1, num2) {
    const sum = num1 + num2;
    if (sum > 100) {
      return true;
    } else {
      return false;
    }
  }
let  num1 = 100;
let num2= 60;
let result = sumGreaterThan(num1, num2);
console.log(result);

// Write a function that takes in a array of numbers as a parameter and 
// returns the second largest number in the array


  
  


// Write a function that takes a string as a parameter and 
// returns true if the string is a palindrome and false otherwise

function palindrome(word) {
let arr = word.split('').reverse().join("")
 if (arr===word){
  return true
 }else{
  return false
 }
}
console.log(palindrome("madam"))



