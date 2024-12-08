// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(arg1, arg2) {
      return arg1 - arg2;
  }
  const result = calculateDifference(10, 5);
  console.log(result);


//   2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(num) {
      return num % 2 !== 0;
  }
  console.log(isOdd(3));  
  console.log(isOdd(4));  

//   3) Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(arr) {
      if (arr.length === 0) {
          return undefined; 
      }
      
      let min = arr[0]; 
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] < min) {
              min = arr[i]; 
          }
      }
      return min; 
  }
  
  let numbers = [10, 5, 7, 2, 4, 9];
  console.log(findMin(numbers)); 
  
  
//   4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

  function filterEvenNumbers(arr) {
      return arr.filter(number => number % 2 === 0);
  }
  
  let numbers = [13, 5, 7, 23, 4, 9, 18];
  console.log(filterEvenNumbers(numbers)); 


//   5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.


function sortArrayDescending(arr) {
      return arr.slice().sort((a, b) => b - a);
  }
  let numbers = [12, 5, 7, 23, 4, 9, 18];
  console.log(sortArrayDescending(numbers)); 
  

//   6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
      if (str.length === 0) {
          return ""; 
      }
      
      return str.charAt(0).toLowerCase() + str.slice(1);
  }

  let text = "Hello Javascript";
  console.log(lowercaseFirstLetter(text)); 

//   7) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers) {
      if (numbers.length === 0) {
          return 0; 
      }
      
      const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue, 0);
      const average = sum / numbers.length;
      
      return average;
  }

  const numbersArray = [10, 20, 30, 40, 50];
  const average = findAverage(numbersArray);
  console.log(average); 
  

//   8) Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.

  function isLeapYear(year) {
      
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          return true; 
      } else {
          return false;
      }
  }
    console.log(isLeapYear(1900)); 
  console.log(isLeapYear(2020)); 

   console.log(isLeapYear(2000)); 

           console.log(isLeapYear(2021)); 
           console.log(isLeapYear(2023)); 
console.log(isLeapYear(2024)); 