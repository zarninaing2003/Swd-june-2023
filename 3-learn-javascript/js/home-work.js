//Home work
//100 sgd to eur?
//750 usd to sgd?

// 1sgd to 0.67eur  //67.47 Euro

// const rates = {
//     USD :2100,
//     EUR :0.67,
//     SGD :1569  
// }

// function exchangeToEur(amount,fromCurrency){
//     let rate = rates[fromCurrency]
//     return `${amount * rate} EUR`;
// }

// console.log(exchangeToEur(100,"EUR"));
// console.log(exchangeToEur(200,"EUR"));
// console.log(exchangeToEur(300,"EUR"));

// function exchangeToSgd(amount, fromCurrency){
//     let rate  = rates[fromCurrency];
//     return `${amount * rate} SGD`;
// }

// console.log(exchangeToSgd(1200,"SGD"));
// console.log(exchangeToSgd(3400,"SGD"));
// console.log(exchangeToSgd(750, "SGD"));

// console.log("home work js");

// let  fruits = ["apple"," banana", "orange", "lemon"];
// console.log(fruits);

// console.log(fruits[0]);
// console.log(fruits[3]);

// fruits[1] = "Mango";

// fruits[2] = "strawberry";

// console.log(fruits);

// console.log(fruits.length);

// const obj = {
//     apple: 100,
//     banana: 200,
//     mango:300

// }

// console.log(obj);

// console.log(obj["apple"]);
// obj["banana"] = 400;

// console.log(obj);

// console.log(obj["apple"]);
// console.log(obj["banana"]);
// console.log(obj["mango"]);


// const fruits =  {
//     name:"Apple",
//     price: 200,
//     weigh:1,
//     weighUnit:"kg",
//     amount:3
// }

// console.log(fruits);


// const fruit2 = {};

// fruit2.name = "Mango";
// fruit2.price = 300;
// fruit2.weight = 1;
// fruit2.weightUnit = "kg";

// console.log(fruit2);


// const cart = [
//     {
//         name:"Apple",
//         price: 200,
//         weigh:1,
//         weighUnit:"kg",
//         amount:3
//     },

//     {
//         name:"banana",
//         price: 300,
//         weigh:2,
//         weighUnit:"kg",
//         amount:4
//     },
// ]

// console.table(cart);
// console.log(cart[1].name);
// console.log(cart[0].weigh);
// console.log(cart[1].amount);

// let name = "Mg Mg";
// let age = 25;
// let township = "Yangon";
// let pocketMoney = 200;

// console.log(pocketMoney);

// let orangePrice = 100;
// pocketMoney -= orangePrice;
// console.log(pocketMoney);

// let pen = null;

// let mgBOOk  = ['myanmar book', 'english book', "bio book"]
// console.log(mgBOOk);

// let canMgMgFriSmoke = true;
// let canMgMgSmoke = false;

// mgInfo = [25,"Yangon", 200];
// console.log(mgInfo);

// if(false){
//     console.log("I am true");
// }else{
//     console.log("I am false");
// }

// let wakeUpTime = 3;

// if(wakeUpTime > 8){
//     console.log("min a yike khan ya top mal");
// }else{
//     console.log(" Morning Ok!");
// }


// let pocketMoney = 1000;

// if(pocketMoney  >= 300){
//     console.log("Take a Bus");
// }else{
//     console.log("I walk to go to school");
// }

// function howToGo(pocketMoney, busFee = 300){
//     if(pocketMoney >= 300){
//         pocketMoney -= 300;
//         console.log(" I go to school bus car");
//         console.log("let kyan money" , pocketMoney);
//         if(pocketMoney >= busFee){
//             console.log(" I come back home bus car");
//         }else {
//             console.log("I come back home walking ");
//         }
//     }else{
//         console.log(" I go to school walking ");
//         console.log(" I come back home walking");
//     }
// }

// console.log(howToGo(600));

// function checkMark(mark){
//     if(mark >= 80){
//         console.log("You passed the exam  D");
//     }else if(mark >= 40){
//         console.log(" You passed the exam");
//     }else {
//         console.log(" You fill the exam");
//     }
// }

// console.log(checkMark());

// console.log(false?  "sppp"   : " ma sar ya they vuu ");



// function canVote(age, isCitizen){
//     if(age >= 18  &&  isCitizen){
//         return " You can vote";
//     }
//     return " You can't vote";
// }


// console.log(canVote(18, true));

// function choseBus (busNo){
//     if(busNo === 65   ||  busNo === 20){
//         return " You can reach MMS IT";
//     }
//     return " You can't reach MMS It";
// }
// console.log(choseBus(65));


// function birthYearCalc(age){
//     let currentYear =  2023;
//     let result = currentYear- age;
//     return result;
// }

// console.log(birthYearCalc(20));

// function birthYearCalc(year){
//     let currentYear = 2023;
//     let dateOfYear = 2003;
//     let result  = currentYear - year;
//     return result;
// }

// console.log(birthYearCalc(2006));

// const rates = {
//     USD :2100,
//     EUR :2315,
//     SGD :1569  
// }

// console.log(rates);

// function exchangeToMMK(amount, fromCurrency){
//     let rate  =  rates[fromCurrency];
//     return `${amount * rate}`;
// }

// console.log(exchangeToMMK(100,"USD"));
// console.log(exchangeToMMK(100,"EUR"));
// console.log(exchangeToMMK(100,"SGD"));

// function exchangeFroMMK(amount, toCurrency){
//     let rate = rates[toCurrency];
//     return `${(amount / rate).toFixed(2)}  ${toCurrency};`
// }

// console.log(exchangeFroMMK(5000,"USD"));
// console.log(exchangeFroMMK(5000,"EUR"));
// console.log(exchangeFroMMK(5000,"SGD"));

let mySelf = {
    name: "zar ni",
    age: 20,
    skills: ['html', 'css', 'js'],
    teach(x){
        return "I can teach" + x;
    }
}

// console.log(mySelf);
// console.log(mySelf.name);
// console.log(mySelf.age);
// console.log(mySelf.skills);
// console.log(mySelf.teach (" Web development" ));

const fruits = {
    apple: 200,
    mango: 250,
    orange:350,
    lemon: 500
}
// console.log(obj);

let voucher = [];
let voucherIndex = 0;
let totalCost = 0;

function buy(fruit,quantity){
    let price = fruits[fruit];
    let cost = price * quantity;
     
    const obj = {
        item: fruit,
        price,
        quantity,
        cost: cost + "MMK"
    }

    voucher[voucherIndex++] = obj;
    totalCost += cost;
    return cost;
}

// console.log(buy("apple", 3));
// console.log(buy("mango", 3));
// console.log(buy("orange", 3));
// console.log(buy("lemon", 3));


// function square(){
//     let rows = "";
//     for( let i=0; i<5; i++){
//         rows += (i,"***\n");
//     }
//     console.log(rows);
// }
// console.log(square());

// function square(rowCount,colCount){
//     let rows = "";
//     for(let i=0; i<rowCount; i++){
//         let cols = "";
//         for(let j=0; j<colCount; j++){
//             cols += "*";
//         }
//         rows += cols + "\n";
//     }
//    return(rows);
// }

// console.log(square(8,8));

// function triangle(rowCount){
//     let rows = "";
//     for(let i=0; i<rowCount; i++){
//         let cols = "";
//         for(let j=0;j<=i; j++){
//             cols += "* ";
//         }
//          rows += cols + "\n";
//     }
//     return rows;
// }
// console.log(triangle(6));

// function triangleReverse(rowCount){
//     let rows = "";
//     for(let i=rowCount;i>0;i--){
//         let cols= "";
//         for(let j=0;j<i;j++){
//             cols += "* "; 

//         }
//     rows += cols  + "\n";
//     }
//     return rows;
// }
// console.log(triangleReverse(5));

// function chessTable(rowCount,colCount){
//     let rows = "";
//     for(let i=0;i<rowCount;i++){
//         let cols = "";
//         for(j=0; j<colCount; j++){
//             if(i % 2 === 0){
//                 if(j % 2 === 0){
//                     cols += "🔴";
//                 }else{
//                     cols += "🔶";
//                 }
//             }else{
//                 if(j % 2 === 0){
//                     cols += "🔶";
//                 }else{
//                     cols += "🔴";
//                 }
//             }
//         }
//         rows +=cols + "\n";
        
//     }
//     return rows;
// }

// console.log(chessTable(8,8));

const customers = [
    {name:'customer1',phoneNumber:'1234567', email: 'customer1@gmial.com', dateOfBirth: '01.01.2000'},
    {name:'customer2',phoneNumber:'1234568', email: 'customer2@gmial.com', dateOfBirth: '02.01.2000'},
    {name:'customer3',phoneNumber:'1234569', email: 'customer3@gmial.com', dateOfBirth: '04.01.2000'},
    {name:'customer4',phoneNumber:'1234560', email: 'customer4@gmial.com', dateOfBirth: '01.01.2003'},
];

const sentEmail = (email)=>{
    console.log("Sent email to:" , email);
}

const sentEmailSpecialBirthDay=(email)=>{
    console.log(" sent Email 10% discount price:", email);
}

for( let i= 0; i< customers.length;i++){
    let customerEmail = customers[i].email;
 let customerBirthday =  customers[i].dateOfBirth;
 if(customerBirthday === "04.01.2000"){
    sentEmailSpecialBirthDay(customerEmail);
 }else{
   sentEmail(customerEmail);
 }
}

customers.push(
    
        {name:'customer5',phoneNumber:'1234567', email: 'customer5@gmial.com', dateOfBirth: '01.01.2004'},
        {name:'customer6',phoneNumber:'0004568', email: 'customer6@gmial.com', dateOfBirth: '02.01.2200'},
        {name:'customer7',phoneNumber:'1114569', email: 'customer7@gmial.com', dateOfBirth: '04.01.2060'},
        {name:'customer8',phoneNumber:'2224560', email: 'customer8@gmial.com', dateOfBirth: '01.01.8003'},
)

// console.log(customers);

const cities = ["Yangon", " Mandalay", "Singapore", "Malaysia","Korea"];
for(let i=0; i<cities.length; i++){
    let city = cities[i];
    console.log(city);
}

const Customers = {name: "customer1",phoneNumber: "12345", email: "customer1@gmail.com"};

//   let c1 = Customers.name;

//   console.log(c1);

// for in loop
for(let productName in Customers){
    console.log(productName);
}
for(let productName in Customers){
    console.log(Customers[productName]);
}

for(let productName in Customers){
    console.log(productName, Customers[productName]);
}
// While loop
let validNumber =  true;

while(validNumber){
    let promptValue  = prompt("Enter your are number 1 and 100");
    let parsedValue =  parseInt(promptValue);

    if(parsedValue >1 && parsedValue <100){
        console.log("Enter value:", parsedValue);
        validNumber = false; //exist condition
    }
}
