console.log('hello fun js');
//logic 
// birth year calc
// age, current year
// logic  currentYear - age = birthYear

// function birthYearCalc(age){
//     let currentYear = 2023;
//     let result = currentYear - age;
//     return result;
// }

// console.log(birthYearCalc(20));
// console.log(birthYearCalc(21));
// console.log(birthYearCalc(23));

// logic 
// tax calc (tax 5%)
// amount 5%


function taxCal(amount, taxPercentage= 5){
    return amount =  amount * (taxPercentage / 100);
}
// console.log(taxCal(100));
// console.log(taxCal(1000));
// console.log(taxCal(10000));

// function cost(price,quantity){
//     return price *quantity;
// }

// console.log(cost(100,5));
// console.log(cost(700,4));
// console.log(cost(10,5));


// const results = [];
// let resultIndex = 0;

// function calArea(w,b){
// //  return (w*b) + "Sqft";
//     let result = w*b;
//     // (2) result as an object   
//     const obj  = {
//         width : w +"Ft",
//         breath : b + "Ft",
//         area : area + "Sqft"
//     }
    
//     // (3) store result to results array
//     results [resultIndex++] = obj;
//     console.log(obj);

//     // (1)Area Calculation 
//     return `${result} Sqft`;
// }

// console.log(calArea(12,34));
// console.log(calArea(12,24));
// console.log(calArea(15,34));
// console.log(calArea(15,34));

// console.table(results);

const rates = {
    USD :2100,
    EUR :2315,
    SGD :1569  
}

// console.log(rates);

// function exchangeToMMK(amount,fromCurrency){
//     let rate = rates[fromCurrency]
//     return `${amount * rate} MMK`;

// }

// console.log(exchangeToMMK(1000,"USD"));
// console.log(exchangeToMMK(1000,"EUR"));
// console.log(exchangeToMMK(1000,"SGD"));

// function exchangeFroMMK(amount , toCurrency){
//     let rate =  rates[toCurrency];
//     return `${(amount/rate).toFixed(2)} ${toCurrency}`;
// }

// console.log(exchangeFroMMK(50000,"USD"));
// console.log(exchangeFroMMK(120000,"EUR"));
// console.log(exchangeFroMMK(80000,"SGD"));


 const fruits = {
    apple:500,
    orange: 400,
    banana:400,
    mango:150
}

const voucher = [];
let voucherIndex = 0;
let totalCost = 0;

function buy(fruit,quantity){
    let price = fruits[fruit];
    let cost = price * quantity;
    const obj = {
        item:fruit,
        price,
        quantity,
        cost : cost + "MMK"
    };

    voucher[voucherIndex++] = obj;
    totalCost += cost;
    return cost;
}

console.log(buy("apple",5));
console.log(buy("orange",3));
console.log(buy("banana",7));

console.table(voucher);
console.table({
    total : totalCost,
    tax : taxCal(totalCost),
    netAmount : totalCost  + taxCal(totalCost)
});
