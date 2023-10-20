//Factoriel

// function Factoriel() {
//   const inputNumber = prompt("Enter Any Number");
//   let result = 1;

//   for (let i = 1; i <= inputNumber; i++) {
//     result *= i;
//   }

//   console.log(result);
// }

// Factoriel();

// Reverse A String

// const result = function reverseWords() {
//   let inputValue = prompt("Enter A Word");
//   let reverseWordArr = inputValue
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""));
//   return reverseWordArr.join(" ");
// };

// console.log(result());

// Find Longest Word

// function FindLongestWord() {
//   let firstValue = prompt("Enter First Word");
//   let secondValue = prompt("Enter Second Word");
//   let thirdValue = prompt("Enter Third Word");

//   let numbers = [firstValue, secondValue, thirdValue];

//   let longestString = "";

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i].length > longestString.length) {
//       longestString = numbers[i];
//     }
//   }

//   console.log(longestString);
// }

// FindLongestWord();

//Find Palindromes

// function IsPalindromes() {
//   const firstInput = prompt("Write First Number").toLocaleLowerCase();
//   const secondInput = prompt("Write Second Number").toLocaleLowerCase();

//   const reverseFirstInput = firstInput
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");

//   if (reverseFirstInput === secondInput) {
//     console.log("These Words are Palindromes");
//   } else {
//     console.log("These Words Are Not palidromes");
//   }
// }

// IsPalindromes();

//Seperate Unique and Non Unique Words

// function IsWordUnique() {
//   const inputValue = prompt("Enter Any Value");

//   for (let i = 0; i < inputValue.length; i++) {
//     let numberOfRepeat = 0;

//     for (let j = 0; j < inputValue.length; j++) {
//       if (inputValue[i] === inputValue[j]) {
//         numberOfRepeat++;
//       }
//     }

//     if (numberOfRepeat >= 2) {
//       console.log("This is not a unique word");
//       break;
//     } else if (i == inputValue.length - 1) {
//       console.log("This is a unique word");
//     }
//   }
// }

// IsWordUnique();

// program to check if a number is prime or not

// // take input from the user
// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//   console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {
//   // looping through 2 to number-1
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`${number} is a prime number`);
//   } else {
//     console.log(`${number} is a not prime number`);
//   }
// }

// // check if number is less than 1
// else {
//   console.log("The number is not a prime number.");
// }


