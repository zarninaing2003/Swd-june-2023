// const fruits =  ["apple", "orange", "banana", "strawberry"]
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[2]);

// fruits[0]  = "Lemon";
// console.log(fruits);
// console.log(fruits.length);
//  for( let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
//  }

// const obj =  {
//     orange: 100,
//     banana: 200,
//     apple: 300,
//     lemon: 400
// }
// obj["apple"] = 350;
// obj["banana"] =  250;
// console.log(obj);
// console.log(obj["orange"]);
// console.log(obj.banana);
// for(let i=0; i<obj.length; i++){
//     console.log(obj[i]);
// }

// const fruits =  {
//     name: "apple",
//     price: 200,
//     weigh: 1,
//     weighUnit: "kg",
//     stock: 3
// }
// console.log(fruits);

// const fruit1 = {}
// fruit1.name = "mango";
// fruit1.price = 200;
// fruit1.weight = 2;
// fruit1.weightUnit =  "kg";
// fruit1.stock = 2;

// console.log(fruit1);

// console.log(fruit1["name"]);
// console.log(fruit1.price);

// const cart = [
//      {
//         name:"apple",
//         price: 300,
//         weight: 1,
//         weightUnit: "kg",
//         stock: 3,
//      },

//      {
//         name:"orange",
//         price: 300,
//         weight: 1,
//         weightUnit: "kg",
//         stock: 5,
//      },

//      {
//         name:"banana",
//         price: 450,
//         weight: 1.5,
//         weightUnit: "kg",
//         stock: 4,
//      },

// ];

// console.log(cart[0].name);
// console.log(cart[1].weight);

// let name = "mg mg";
// let age =  20;
// let township = "yangon";
// let pocketMoney = 200;

// console.log(pocketMoney);

// let orangePrice  =  50;
// pocketMoney -= orangePrice;
// console.log(pocketMoney);

// let pens =  null;

// const mgmgBag = [ "myanmarBook", "englishBook", " biologyBook"];

// console.log(mgmgBag);

// let mgmgInfo = [15,"kyauk myaung",200];
//  let st1 = {
//    name:"mg mg",
//    gender:"male",
//    age:15,
//    township:"kyauk myaung",
//    pocketMoney:200
//  }

//  let st2 = {
//    name:"kyaw kyaw",
//    gender:"male",
//    age:16,
//    township:"bahan",
//    pocketMoney:1000
//  }

 
//  let st3= {
//    name:"mya mya",
//    gender:"female",
//    age:18,
//    township:"tha mine",
//    pocketMoney:500
//  }
// const students = {st1,st2,st3};
// console.table(students);

//  console.log(st1["name"]);
//  console.log(st2.name);

// if(false){
//     console.log(" It is true");
// }else{
//     console.log(" It is false");
// }

// let wakeUpTime = 9;
// if(wakeUpTime>8){
//     console.log("a yike khan ya top mal");
// }else{
//     console.log("Morning Ok!");
// }

// let pocketMoney =  300;
// if(pocketMoney >=300){
//     console.log("I go to school Bus car");
// }else {
//     console.log("I go to school walking");
// }

// function howToGo(pocketMoney, busFee = 300){
//     if(pocketMoney >= 300){
//         console.log("I go to school Bus car");
//         pocketMoney -= busFee;
//         console.log("let kyan money",pocketMoney);
//         if(pocketMoney>= busFee){
//             console.log(" I come back home bus car");
//         }else{
//             console.log("I come back home walking");
//         }
//     }else{
//         console.log("I go to school walking");
//         console.log(" I come back home walking");
//     }
// }
// console.log(howToGo(100));

// function checkMark(mark){
//     if(mark >= 80){
//         console.log("you passed with D");
//     }else if(mark >=40){
//         console.log("you passed with exam");
//     }else{
//         console.log("you fail the exam");
//     }
// }
// console.log(checkMark(30));
// console.log("true" ? "spp" : "ma sar ya thy vuu");


// function check(subject, mark){
//     // if(mark>= 80){
//     //     console.log(`"I passed with D ${subject} exam"`);
//     // }else if(mark>=40){
//     //     console.log(`"I passed the exam ${subject} exam"`);
//     // }else if(mark<40){
//     //     console.log(`" I failed the exam ${subject} exam"`);
//     // }
// return `I will ${mark>= 40? "passed" : "failed"}the  ${subject} the exam`;
// }
// console.log(check("myanmar", 90));

// function choseBus(busNo){
//     if(busNo===20 || busNo==65){
//         return` I can reach MMS IT`;
//     }
//     return `I can't reach MMS IT`;
// }
// console.log(choseBus(19));

// function examMark(examMark, vibeMark){
//     if(examMark>=60 && vibeMark>=60){
//         return `You passed the exam`;
//     }
//     return `You failed the exam`
// }
// console.log(examMark(69, 90));

// function isVote (age, isCitizen){
//     if(age>=18 && isCitizen===true){
//         return "You cna vote";
//     }
//     return " You cna't vote"
// }
// console.log(isVote(18,true));

// function birthYearCalc(age){
//     let currentYear =  2023;
//     let result  = currentYear - age;
//     return result;
// }
// console.log(birthYearCalc(20));

// function currentAge( currentYear){
//     let birthYear =  2003;
//     let result = currentYear - birthYear;
//     return result;
// }
// console.log(currentAge(2023));

// function cost(price, quantity){
//     return price * quantity;
// }
// console.log(cost(100, 2));
// let results =  [];
// let resultIndex =  0;
// function calArea(w,b){
//     // return (w*b) + " sqft";
//     let result  =  w*b;

//     let obj = {
//         width: w + "ft",
//         breath: b + "ft",
//         area: result + "sqft"
//     }
//     results[resultIndex++]  =  obj;

//     console.log(obj);
//     return `${result} "sqft`;
// }
// console.log(calArea(12,6));
// console.log(calArea(45,6));
// console.log(calArea(19,6));
// console.log(calArea(67,6));
// console.table(results);

// const rates = {
//     USD :2100,
//     EUR :2315,
//     SGD :1569 
// }

// console.log(rates);

// function exchangeToMMK(amount, fromCurrency){
//     let rate =  rates[fromCurrency];
//     return `${amount * rate} "MMK`;
// }

// console.log(exchangeToMMK(1000, "USD"));
// console.log(exchangeToMMK(1000, "EUR"));
// console.log(exchangeToMMK(1000, "SGD"));

// function exchangeFroMMK(amount, toCurrency){
//     let rate  =  rates[toCurrency];
//     return `${(amount / rate).toFixed(2)} "MMK"`;
// }

// console.log(exchangeFroMMK(1000, "USD"));

// const fruits = {
//     apple:500,
//     orange: 400,
//     banana:400,
//     mango:150
// }
//  let voucher = [];
//     let voucherIndex = 0;
//     let totalCost =  0;

// function buy (fruit, quantity){
//     let price =  fruits[fruit];
//     let cost  =  price * quantity;
   
//     let obj =  {
//         item: fruit,
//         price,
//         quantity,
//         cost: cost + "MMK"
//     }
//     voucher[voucherIndex++] =  obj;
//     totalCost += cost;
//     return cost;

// }

// console.log(buy("apple", 4));
// console.log(buy("orange", 4));
// console.log(buy("banana", 4));

// console.table(voucher);


// for( let i = 0; i<5; i++){
//     console.log(i,"*");
//     console.log(i,"**");
//     console.log(i,"***");
// }

// for(let i= 0; i<=10; i++){
//     if(i=== 5){
//        continue;
//     }
//     console.log(i);
// }

// const fruits  = ["apple", "banana", "strawberry", "mango", "line"]

// for(let i=0; i<fruits.length; i++){
//     console.log(i, fruits[i]);
// }
// console.log(fruits[0]);
// fruits[0] =  "lemon";
// console.log(fruits);

// for( x in fruits){
//     console.log(x,fruits[x]);
// }
// for(fruit of fruits){
//     console.log(fruit);
// }
// const obj  = {
//     a: "aaa",
//     b: "bbb",
//     c: "ccc",
//     d: "ddd"
// }

// for(let x in obj){
//     console.log(x,obj[x]);
// }

// const mySelf =  {
//     name: "Zar ni phone naing",
//     age: 20,
//     skills: ['html', 'css', 'js'],
//     teach(x){
//         return "I can teach" + x;
//     }

// }
// console.log(mySelf);
// console.log(mySelf["name"]);
// console.log(mySelf.age);
// console.log(mySelf.skills);
// console.log(mySelf.teach(" Web development"));

let x = `I am ${(function(){
    let currentYear =  2023;
    let currentAge = 20;
    let myBirthday =  currentYear- currentAge;
    return myBirthday;
})()} born`;
console.log(x);