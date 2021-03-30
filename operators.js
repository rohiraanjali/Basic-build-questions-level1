// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.
let num1=5
let num2=13
let num3=7 
let num4=21 
let num5=48
let sum = num1 + num2 + num3 + num4 + num5;
console.log("The sum ogf 5 numbers is: ", sum);

// Write a program to take a number input from user and determine whether the number is odd or even.

const userInput = prompt("Type an input to check wether the number is odd or even ? ");

if(userInput % 2 == 0) {
  console.log("This is an even number");
} else {
  console.log("This is an odd number");
}

// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

var numb1 = 300;
var numb2 = 251;

if(numb1 < numb2) {
  console.log(numb2 , " is maximum and", numb1 , "is minimum")
} else {
  console.log(numb1 , " is maximum and", numb2 , "is minimum")
}

// Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

var a1=8;
var a2=23;
var a3=17;
var largest; 
if(a1 >= a2 && a1 >= a3) {
    largest = a1;
}
else if (a2 >= a1 && a2 >= a3) {
    largest = a2;
}
else {
    largest = a3;
}
// display the result
console.log("The largest number is " + largest);

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

var b1=8;
var b2=23;
var b3=17;
var smallest; 
if(b1 <= b2 && b1 <= b3) {
    smallest = b1;
}
else if (b2 <= b1 && b2 <= b3) {
    smallest = b2;
}
else {
    smallest = b3;
}
// display the result
console.log("The largest number is " + smallest);

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.
function daysOfMonth(month) {
  switch (month.toLowerCase()) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
      return true;
    default:
      return false;
  }
}
const month = prompt("Enter your month", "");
console.log(daysOfMonth(month));
 //fizbuss 
for (i = 1; i<=100; i+=1) {
  if(i % 3 === 0) {
    console.log("fizz")
  } else if(i % 5 === 0) {
    console.log("Buzz")
  } else if(i % 15 === 0) {
   console.log("FizzBuzz")
  } else {
    console.log(i);
  }
}
// mstar pattern
for (var i = 5; i >= 1; i--) {
     var ouput = "";
     for (var j = i; j >= 1; j--) {
         ouput += "*"
     }
     console.log(ouput);
 }
// 12 multiples
 var num = prompt("Type a input to multiplicate");
 for(i =1; i<=12; i++) {
   console.log(num, "*" , i , "=" ,num * i);
 }
// factorial
 var fact = 1;
 for(i=1; i<=5; i++) {
   fact *= i
 }

console.log("Factorial of 5 is: ",fact);

//prime number 
 const checkPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % 2 !== 1) {
      return `${num} is a prime number.`;
    }
  }
  return `${num} is not a prime number.`;
};
let inputNum = prompt("Enter a number", 0);
console.log(checkPrime(5));

// fibonacci
function fibonacci(endNum) {
  const arr = [0, 1];
  for (let i = 0; i < endNum - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}
console.log(fibonacci(30));

// weekday or no
const weekend = (day) => {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return `${day} is weekend.`;
    default:
      return `${day} is a weekday`;
  }
};
let inputDay = prompt("Please , Enter a day", "");
console.log(weekend(inputDay));