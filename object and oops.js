//oops questions

const studentDetails = [
	{
		roll: "1",
		name: "Rohan Singh",
		maths: 86,
		science: 90,
		english: 75,
		computer: 85
	},
	{
		roll: "2",
		name: "Ritvik Patel",
		maths: 27,
		science: 30,
		english: 35,
		computer: 30
	},
	{
		roll: "3",
		name: "Neha Maurya",
		maths: 75,
		science: 69,
		english: 40,
		computer: 75
	},
	{
		roll: "4",
		name: "Mohit Verma",
		maths: 21,
		science: 31,
		english: 45,
		computer: 40
	},
	{
		roll: "5",
		name: "Karan Trivedi",
		maths: 70,
		science: 80,
		english: 35,
		computer: 60
	}
];

// 1
function nameAndSum(arr) {
  arr.map((item) => 
  console.log(`Name - ${item.name}, marks - ${
        item.maths + item.science + item.english + item.computer
      }`)
  )
}
nameAndSum(studentDetails);

// 4
function avgMarks(arr) {
  let sum = 0;
  arr.map((item) => {
    sum = sum + item.computer
  })
  return sum / arr.length;
}
console.log(avgMarks(studentDetails))

// 5 
function passedStudents(arr) {
 arr.map((item) => {
  
 let total = item.maths + item.science + item.english + item.computer;
 let percent = Math.floor((total / 400) * 100);
 if(percent > 35) {
   console.log(`Name - ${item.name} , Passed and Promoted`)
 } else {
   console.log(`Name - ${item.name} Failed and Not Promoted`)
 }
 })
}
passedStudents(studentDetails);

// question 4 
const cartItems = [
	{
		id: "101",
		name: "Oreo",
		count: 2,
		price: 30.0,
		discount: 0.18
	},
	{
		id: "102",
		name: "Red Bull",
		count: 1,
		price: 99.0,
		discount: 0.15
	},
	{
		id: "103",
		name: "Dairy Milk Silk",
		count: 3,
		price: 175.0,
		discount: 0.05
	},
	{
		id: "104",
		name: "Pulse Candy Pack",
		count: 1,
		price: 135.0,
		discount: 0.2
	}
];
//1
const lengthOfArr = arr => arr.length;
console.log(lengthOfArr(cartItems))


//2
function cartValue(arr) {
  let sum = 0;
  arr.map((item)=> {
    sum = sum + item.price;
  })
  return sum;
}

console.log(cartValue(cartItems))

//3
function discountValue(arr) {
  // let discount = item.discount * item.price;
  arr.map((item) => {
    console.log(`Item Name - ${item.name} , Discounted Price - ${item.price * item.discount}`)
  })
}
discountValue(cartItemss)

//4 
function taxPrice(arr) {
  let sum = 0;
  arr.map((item) => {
    sum = sum + item.price
  })
  return sum / 18 * 100;
}
console.log(taxprice(cartItems))

