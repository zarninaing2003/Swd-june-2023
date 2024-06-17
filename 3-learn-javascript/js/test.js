// const mySelf = {
//     name:"zar ni niang",
//     age: 20,
//     skills: ['html', 'css', 'js'],
//     teach(x){
//         return "I can tach " + x;
//     }
// }

// console.log(mySelf);
// console.log(mySelf.name);
// console.log(mySelf.teach("Web Development"));
// console.log(mySelf.teach("Guitar"));

let x = `I am ${(function(){
    let currentYear  = 2023;
    let myBirthday = 2003;
    let currentAge =  currentYear  - myBirthday;
    return currentAge;
})()} years old`;

console.log(x);


// const obj = {
//     a : "aaa",
//     // b: function(){
//     //     return " this is b" + this.c
//     // },
//     b(){
//         return "this is b"
//     },
//     c:"ccc"

// }

// console.log(obj.a);
// console.log(obj.b());

const mySelf = {
    name:'Zar ni',
    age:20,
    skills: ["html","css","js"],
    teach(x){
        return "I can tach " +x;
    }
}
console.log(mySelf);
console.log(mySelf);
console.log(mySelf.teach["Web development"]);
console.log(mySelf.teach["Guitar"]);