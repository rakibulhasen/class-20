// "use strict";
// const arrSparse = [12, 33, /* empty */ , 32];
// let camCallbackRun = 0;

// arrSparse.forEach((element) => {
//   camCallbackRun = camCallbackRun + element;
//   console.log({element});
  
// });

// console.log({camCallbackRun});


// // Printing the content arr

// const logArrElement = (element, index) => {
//   console.log(`a[${index}] = ${element}`);
//   console.log({[index] : element});
// }

// [32,11,3].forEach(logArrElement)


// logArrElement("Rakibul", "Name")


// //Map
// const colors = ["rel", "green", "yeallow", "pink", "black", "orange"];
// const colorsUpperCase = colors.map(function(color){
//   // console.log(color[0].toUpperCase() + color.slice(1));
//   return color[0].toUpperCase() + color.slice(1);
 
// })

// console.log(colorsUpperCase);

// const num = [23,1,42,3];
// const numMulti = num.map(function(x){
//   return x *3;
// });
// console.log(numMulti);


// const objectArr = [
//   {property : 1, value : 3},
//   {property :3, value : 45},
//   {property : 4, value : 7},
//   {property : 5, value : 2},
//   {property : 7, value : 3},
// ]

// const objectMap = objectArr.map(function(property, value){
//   return {[property] : value}
// });


// console.log(objectMap);
// console.log(objectArr);


// const createval = [1, , 3].map((value, index) =>{
//   console.log( `visit ${index}`);
//   return value * 3;
// });

// console.log(createval);


// // Transactions 

// const business = 30000;

// const Transactions = [5000, 2000, -1000, 3999, -2000, 4999];
// const widrowTransitions = Transactions.map((transition) => {
  
//    const vat = business * 0.04;
//    return transition + vat;
 
// });

// console.log(widrowTransitions);


// // Filter
// const IBBLTansitions = [2000, 5000, -7000, 2000, -500, 500, -1000];

// const IBBLWidrowTransitions = IBBLTansitions.filter((transition)=> {
//   if(transition<0){
//     return transition;
//   }
// });

// const mapWidrow = IBBLWidrowTransitions.map((movement) =>{
//   const vat = movement * 0.14;
//   return Math.abs(movement - vat);
// });
// console.log(mapWidrow);
// console.log(IBBLWidrowTransitions);

// // Students
// const students = ["rakib", "hasan", "kaRim", "raHim", "mohIv"];
// const filterStudents = students.filter((student)=>{
//   if(student.startsWith("r")){
//     return student;
//   }
// });

// const resizeStudents = filterStudents.map((student) =>{
//   const upper = student[0].toUpperCase();
//   const lower = student.slice(1).toLowerCase();
//   return upper + lower;
// });

// console.log(resizeStudents);

// console.log(filterStudents);

// // Reduce
// const movements = [2000, 5000, -7000, 2000, -500, 500, -1000];
// // let balance = 0;

// // for(let i =0 ; i< movements.length; i ++){
// //   if(movements[i] > 0){
// //     console.log(movements[i]);
// //   }
// // }

// // movements.forEach((movement)=>{
// //   if(movement > 0){
// //     balance += movement 
// //   }
// // })

// // console.log(balance);


// const balance = movements.reduce(function(accumolator, movement, index, arr){
//   return accumolator + movement  
// }, 0);

// console.log(balance);

// const multi = [ 23, 15, 1, 3, 66, 32];
// const multiArr = multi.reduce( (acc, value, i, arr) => acc * value ,1);
// console.log(multiArr);


// // MaxNumber
// const maxNumber = multi.reduce((acc, value)=> {
//  return `${acc} + ${value}`
// }, multi.at(0))
// console.log(maxNumber);

// const arr2 = [32, 44, 22, 44, 55, 23 , 453, 3333, 45555, 23, 44]
// const minimul = arr2.reduce(function(acc, value){
//   if(acc < value ){
//     return acc;
//   }else{
//     return value;
//   }
// }, arr2.at(0));

// // data transfer pipeline
// const moneyRobbed = [20000, 15000, 11000, 10000, 8500, 9500, 40000];
// const totalMone = moneyRobbed.filter((money) => money >= 10000).map(money => money / 2).filter(money => money >= 10000).reduce((acc, money) => acc + money ,0);
// console.log(totalMone)

// forEach
// Map
// filter
/// Find max number
// find minmum number
// Data transfaration pipeline
// Find
// Some and Every
// Sorting

"use strict";
const arr = [33, 12, 44, 12, 55, 23, 12, 32, 22];
let count = 0;
arr.forEach(function(number, index, arr){
  if(number > 20){
    count +=index;
    console.log(`${number - Math.trunc(number * 0.15)} --------`);
  }
})

console.log(count);

/////////////////////////////////////
// // Map
//////////////////////////////////////
// const movements = [3000, -5000, 3000, 1000, 1500, -10500, 3000, -5000];
// const balance = movements.map(function(move, index){
//   return move + 0.15
// });

// console.log(balance);

// Filter
// const movements = [3000, -5000, 3000, 1000, 1500, -10500, 3000, -5000];
// const balance = movements.filter(function(move){
//  return move < 0
// })
// const widrow = balance.map(widrow=> {
//   return  Math.abs(widrow);
// })

// const mainBalance = widrow.map(move =>{
//   const vat = move * 0.15;
//   return move - vat;
// })


const movements = [3000, -5000, 3000, 1000, 1500, -10500, 3000, -5000];
const balance = movements.filter((move)=>move < 0).map(widrow=> Math.abs(widrow)).map(move =>{
  const vat = move * 0.15;
  return move - vat;
})

console.log(balance);


// Reduce 
const mainBalance = balance.filter(balance => balance > 0).reduce(function(accumolator, balance, index){ return accumolator + balance  },0)
console.log(mainBalance);

const items = [20000, 10000, 15000, 30000, 100000];
const canBuy = items.filter(item => item < mainBalance);
console.log(canBuy[1]);

const shop = {
  mobile: 15000,
  laptop: 25000,
  fridge: 50000
}

function itemsForsele(price, item){
  const mobile = 10000;
  const laptop = 50000;
  if(item < price){
    console.log(`You can buy Mobile`);
  }else{
    console.log("You can't buy ");
  }
}

itemsForsele(mainBalance, shop.mobile)


const num = [44, 23, 22, 23, 44, 555, 232];
const maxNum = num.reduce((acc, num) => {
  if(acc > num){
    return acc;
  }else{
    return num
  }
},num.at(0));

const minNum = num.reduce(function(acc, num){
  if(acc < num){
    return acc
  }else{
    return num
  }
},num.at(0))

console.log(minNum);
console.log(maxNum);

// Find

const found = num.find((num,index, arr)=>{
  return num > 30

});
console.log(found);

const pasengers = [
  {name: "Rakibul", id: 323, sinNum: "BA23", balance : 5000},
  {name: "Jannat", id: 3234, sinNum: "CA25", balance : 7000},
  {name: "Robial", id: 323, sinNum: "BA21", balance : 2000},
  {name: "Shohan", id: 323, sinNum: "BA88", balance : 9000},
]

const maxNumForPasen = pasengers.reduce((acc, value)=> acc > value ? acc : value  ,pasengers[0].balance )
console.log(maxNumForPasen.balance);

const richMan = pasengers.find((pasenger)=> pasenger.balance >= maxNumForPasen.balance);
console.log(richMan);

// if(acc > value){
//   return acc;
// }else{
//   return value
// }

const findByStarWithR = pasengers.find(pasenger => pasenger.name.startsWith("R"))

console.log(findByStarWithR);

const students = [33, 23, 44, 23, 55, 66, 23,];
const anyNum = students.some(id => id == 55);
console.log(anyNum);

const everyItems = students.every(id=> id > 10);
console.log(everyItems);


const friends = ["Jabbar", "Kamal", ["Sattar", "Rahim"], "Nurulla", "Jamal"];
const flatFriends = friends.flat()
console.log(flatFriends);

const numBer = [234, 23, 323,[234, 33,223, [323,23,[42,20],23]]];
console.log(numBer.flat(3));

const accounts = [
  {owner : "Rakibul",movements:[2000, 1500, 5000, 1000]},
  {owner : "Jannat",movements:[5000, 7500, 3600, 1000]},
  {owner : "Karim",movements:[1000, 5500, 8000, 1000]},
]


// const accountMove = accounts.movements.flat();
// const moveAcc = accounts.map(move=> move.movements).flat()
const moveAcc = accounts.flatMap(move=> move.movements)
console.log(moveAcc);

// const ascending = moveAcc.sort(function(a,b){
//   return a > b ? 1 : -1;
// })
// const ascending = moveAcc.sort(((a,b) => a > b ? 1 : -1))

const ascending = moveAcc.sort(((a,b) => a - b))

// const dscending = moveAcc.sort(function(a, b){
//   return a > b ? -1 : 1
// })

// const dscending = moveAcc.sort((a, b) => a > b ? -1 : 1);

const dscending = moveAcc.sort((a, b) => b - a);


console.log(dscending);
console.log(ascending);
