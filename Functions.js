// function question
const power = Math.pow(4, 3);
console.log("Power is:",power);

const str = "I am a neogrammer";
const words = str.match(/(\w+)/g).length;
console.log("No Of Words in `i am a neogrammer` is",words)

// areaOfHexagon
const areaOfHexagon = (side) =>
  Math.round(((3 * Math.sqrt(3) * Math.pow(side, 2)) / 2) * 100) / 100;
console.log(areaOfHexagon(10));

const minNumber = Math.min(4, 3);
console.log("Minimum number:", minNumber);

const maxNumber = Math.max(4, 3);
console.log("Maximum number:", maxNumber);

function typeOfTriangle(X,Y,Z) {
  if(X == Y && Y == Z)  {
    console.log("It a equilateral triangle") 
  } else if(X == Y || X == Z || Y == Z) {
    console.log("It a isosceles triangle") 
  } else {
    console.log("It a Scalen triangle") 
  }
}
console.log(typeOfTriangle(10,20,10)) //Two of the sides are equal i.e isosceles

// Medum questions 
// 1
const arr = [1,2,3,4,5];
const result = arr.length
console.log(result)

const idx = arr.indexOf(3);
console.log("Index value of 3 is", idx)
// 2
function replaceArr(arr, currNum , newNum) {
  return arr.map(num => num === currNum ? newNum : num)
}

console.log(replaceArr(arr, 2, 10))
// 3
const arrNew = [10,20,30,40,50];
function mergeArr(arr, arrNew) {
  return [...arr, ...arrNew]
}
console.log(mergeArr(arr, arrNew))
// 4
const strr = "neoGcamp"

console.log(strr.charAt(4))

// 5
// const dates = [
//   new Date(02/05/2021),
//   new Date(24/01/2020)
//    ];

  // 6
console.log(encodeURIComponent("I am neogrammer"))

const arrayNumb = [10.90,56,43,66,12,10];

arrayNumb.sort(function ascOrder(a,b) {
 if(a > b) 
 return 1;
 if(a < b) 
 return -1;
})
console.log(arrayNumb)  
  // ascending order 

  function reverseStr(str) {
    return (str === '') ? '' : reverseStr(str.substr(1)) + str.charAt(0)
  }

  console.log(reverseStr("anjali"))

  const toSentenceCase = (str) => {
  let arr = str.split(" ");
  return arr.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};
console.log(toSentenceCase("we are neoGrammers"));