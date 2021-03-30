// Numbers questions

// 1
const add = (num1, num2) => num1 + num2;
console.log(add(3, 5));

// 2
const SI = (p, t, r) => (p * t * r) / 100;
console.log(SI(100, 2 , 5));

// 3
const MassVal = (m, v) => 0.5 * m * v * v;
console.log(MassVal(10, 2));

// 4
const convertToFahrenheit = (temp) => ((temp - 32) * 5) / 9;
console.log(convertToFahrenheit(24));

// 5 (a)
const area = (side) => side * side;
console.log(area(4));

// (b)
const Perimeter = (side) => 4 * side;
console.log(Perimeter(4));

// (c)
const surfaceArea = (side) => 6 * side * side;
console.log(surfaceArea(4));

// (d)
const volume = (side) => side * side * side;
console.log(volume(4));

// 6
const profitOrLoss = (CP, SP) =>
  SP - CP > 0 ? `${SP - CP} Profit` : `${SP - SP} Loss`;
console.log(profitOrLoss(2100, 2000));

// 7
const num = prompt("Enter a number")
const calcSum = (num) => {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log(calcSum(num));

// 8
const AscendingOrder = (num) => {
  let noOfTimes = num;
  for (let i = 0; i <= noOfTimes; i++) {
    if (i % 2 !== 0) {
      console.log(i);
      noOfTimes += 1;
    }
  }
};
AscendingOrder(5);

// 10
const reverseNumber = (num) => {
  let n = num.toString();
  let str = "";
  for (let i = n.length - 1; i >= 0; i--) {
    str = str + n[i];
  }
  return parseInt(str);
};
console.log(reverseNumber(32243));

// 11
const rotate = (num, pos) => {
  let n = num.split;
  let str = "";
  for (let )
};

// 13
function decimalToBinary(){
    let no =parseInt(readlineSync.question(`Input digits: `)) 
    
    const result = no.toString(2);

    console.log('Binary:' + ' ' + result);

}
decimalToBinary();