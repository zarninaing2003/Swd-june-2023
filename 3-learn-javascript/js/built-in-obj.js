console.log("Built In Object");

//  const str = new String ("san kyi tar par byar");
//  console.log(str);

//  console.log(str.trimStart());

//  console.log(str[8]);
//  console.log(str[9]);
// console.log(str[10]);
// console.log(str.toLocaleLowerCase());
// console.log(str.toUpperCase());
// console.log(str.length);
// console.log(str.substr(4,7));
// console.log(str.search("par"));
// console.log(str.replace("kyi", "nay"));

// console.log(str);
// console.log(str.split(" "));
// console.log(str.substring(4,11));
// let x = '12';
// console.log(x.padStart(8,"x"));

// console.dir(Number);

// const num = new Number(23478.87420420);
// console.log(num.toFixed(3));
// console.log(num.toExponential(7));
// console.log(num.toPrecision(3));

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);

// console.log(Number.isFinite(123/0));
// console.log(Number.isInteger(123.45));

// const weight =  "45kg";
// console.log(Number.parseInt(weight));
// console.log(Number.parseFloat(weight));

// let r  = 2;
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.PI * r ** 2);
// console.log(Math.abs(123));
// console.log(Math.abs(-123));
// console.log(Math.ceil(1.6));
// console.log(Math.floor(1.9));

// const nums = [2,52,62,-8,4];
// console.log(Math.min(...nums));
// console.log(Math.max( 2,52,62,-8,4));
// console.log(Math.pow(2,5));
// console.log(Math.sqrt(16));


// function generate2D(){
//     let randNumber  = Math.random();
//     randNumber += 20;
//     randNumber  =Math.floor(randNumber);

//     return randNumber;
// }

// console.log(generate2D());


// console.dir(Object);

// const object1 = {
//     a:"something",
//     b:42,
//     c:false,
// }

// console.log(Object.keys(object1));
// console.log(Object.values(object1));

// console.log(object1.hasOwnProperty("a"));
// console.log(object1.hasOwnProperty("c"));
// console.log(object1.hasOwnProperty("b"));
// console.log(object1.hasOwnProperty("z"));

// function run(x,y){ //function statemnt
//     return x+y;

// }

// const run2 = function(x,y){ //funciton expression
//     return x+y;
// }


// const run3 = new Function("x", "y","return x+y");

// console.log(run(4,5));
// console.log(run2(4,5));
// console.log(run3(4,5));

// console.dir(run.bind(null,));


// console.dir(Number);
// console.log({});
// console.log([]);

const array1 = ['a', 'b','c'];

array1.forEach(function(el,i,arr){
    console.log(el,i,arr);
});

console.log(array1);
for(x of array1){
    console.log(x);
}

function run(x,y){
    return x +y();
}

console.log(run(4,function(){return 5;}));