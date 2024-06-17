// let myBio = [];

// let interDataMyBioArray=(name, age, job)=>{
//     myBio.push(name);
//     myBio.push(age);
//     myBio.push(job);
// }

// interDataMyBioArray("zar ni naing", 19, "developer");
// console.log(myBio);

// let name  = "zar ni phone naing";
// console.log(name.length);
// console.log(name.lastIndexOf("i"));
// console.log(name.slice(4,7));
// console.log(name.includes("par"));

// let animalName = "Mouse";
// let result = animalName.toUpperCase();
// console.log(result);
// let results =  animalName.toLowerCase();
// console.log(results);

// let number = true;
// console.log(typeof number);

// let result1 = parseInt(number);
// console.log(typeof result1);

// let fruits  =  ["banana","orange", "lemon", "apple"];
// fruits.pop();
// fruits.shift();
// console.log(fruits);
// console.log(fruits[0]);
// fruits[1] = "line";
// console.log(fruits);

// for(let i =0; i<=10;i++){
//     console.log( i,"zar ni");
// }

// let emails = ["abc@gmail.com", "koko@gmail.com", "cde@gmail.com", "zarni@gmail.com"];

// for(let i = 0; i<emails.length;i++){
//     console.log(emails[i]);
// }

// let person = {
//     name:"zar ni",
//     age: 20,
//     job:"developer",
//     // object function type 3
//     getName:function(){

//     },
//     getName:()=>{

//     },
//     getName(name){
//         console.log("I am " + name);
//         return name;
//     }
// }

//  let results3 = person.getName("zar ni");
// console.log(person.getName("zar ni"));
// console.log(results3);


// console.log(person.name);
// console.log(person.age);
// console.log(person["job"]);


// // person["age"] = 19;

// // console.log(person);

// let car = {
//     name: "BMW",
//     produce: 2000,
//     drive(){
//         console.log( "your "+ car.name+" car is driving ");
//     },
//     stop(){
//         console.log("your " +this.name + "  is stop");
//     },
//     produceFrom(){
//         console.log("This " +this. name + " car is produce from " + this.produce);
//     },
//     testing(){
//         console.log(this);
//     }
// }
// console.log(car.testing());
// console.log(car);
// console.log(car.drive());
// console.log(car.stop());
// console.log(car.produceFrom());

// let person1 ={};
// person1.name = "zar ni naing";
// person1.age = 20;
// person1.job = "developer"

// console.log(person1);

// function personBio(name,age){
//     this.name =  name;
//     this.age =  age;

// }
// let zarniBio = new personBio("zar ni", 20)
// let hsumyatBio = new personBio("hsu myat", 20)

// console.log(zarniBio);
// console.log(hsumyatBio);

// // let zarBio ={
// //     name:"zar ni",
// //     age: 20
// // }
// // console.log(zarBio);

// function carConstructor(name, produce){
//     this.name =  name;
//     this. produce =  produce;

// }
// let BMW =  new carConstructor("BMW" , "japan");
// let Marcedes =  new carConstructor("Marcedes" ,  "Korea")
// console.log(BMW);
// console.log(Marcedes);

// let age =25;
// if(age ==20){
//     console.log(" I am 20 years old");
// }else{
//     console.log("I am not 20 years old");
// }

// let grade =  "Z";
// switch(grade){
//     case "A":
//         console.log("you go to grade A");
//         break;
//         case "B":
//             console.log("you go to grade B");
//             break;
//             default:
//                 console.log("nothing");
//                 break;
// }


//local variable and global variable
// let age = 20;
// if(true){
//     console.log(age);
//     // local variable
//     let bornYear =  2003;
//     console.log(bornYear);
//     if(true){
//         console.log(age);
//         console.log(bornYear);
//     }
// }

// let gender= [
//     {name: "zar ni ", age: 20},
//     {name: "hsu myat", age: 21}
// ];

// console.log(gender[1].name);

// for(let i = 0; i<gender.length; i++){
//     console.log(gender[i].age);
// }

// forEach loop
// gender.forEach((gender)=>{
//     console.log(gender.name);
// })

// let people = ["zar ni naing", "hsu myat hlaing", "par ni"]
// let fruits = ["apple", "banana", "lemon", "orange"]



// fruits.map((fruits)=>{
//     console.log(fruits);
// })
// people.map((people)=>{
//     console.log(people);
// })

// let numbers=  [1,2,3,4];
//  let newNumberArray = numbers.map((number)=>{
//     // console.log(number);
//     return numbers;
// })
// console.log(newNumberArray);


// // map method===
// let people1 = ["zar ni ", "hsu hsu ", "par ni "];

//  let newArray = people1.map((people1)=>{
//     return people1 + "pool";

// })
// console.log(newArray);


// filter method
// let people2  = [
//     {name: "aung aung",age:20 ,job:"saler"},
//     {name: "kyaw kyaw", age:21, job:"coder"},
//     {name: "hsu hsu", age:22, job: "developer"}
// ];
// console.log(people2);

//  let newArray1 = people2.filter((people2)=>{
//     // console.log(people2);
//     return people2.age == 20;
// })
// console.log(newArray1);

// let name =  "zar ni naing";
// let age  = 20;


// **************

// console.log(`My name is ${name}. My age is ${age}`);
// alert ("hey what's up!");

// confirm >>>>
// confirm("are u sure u want is delete?");
// let userFeedback =  confirm("Are u sure u want to delete?");
// if(userFeedback){
//     console.log("U are posted is detected?");
// }else{
//     console.log("U are post is not detected?");
// }
// prompt >>>>
//  let name = prompt("Your are name");
//  console.log(name);

// ***********


// ************

// ES6 class
// class Person{
//     constructor(name,age){
//         this.name =  name;
//         this.age =  age;
//     }
//       static getAge(){
//         console.log("age is blah blah");
//     }
// }

// let person3 = new Person("zar ni ", 20);
// // console.log(person3);
// console.log(Person.getAge());

// *************
// I don't understand creative coder myanmar Js Basic episode --27>>>>
// class Parent{
//     constructor(father, mother) {
//         this.father =  father;
//         this.mother =  mother;
//     }
//     greeting(){
//         console.log("Hello");
//     }
//     sayHi(){
//         alert("Hi");
//     }
// }
// let parent = new Parent("U kyaw thu naing", "Daw Thin thin khaing")
// console.log(parent);

// class children extends Parent{
//     constructor(father,mother,childrenName){

//         // super parent
//         // sub children
//         super(father, mother); //parent class
//         this.childrenName =  children; // children class
//     }
// }
// let child1 =  new children("U Hla", "Daw Mya", "ko ko")

// console.log(child1.greeting());
// child1.sayHi();
// // ***************


// SetTimeout>>>>>******
// setTimeout(()=>{
//     let severData =  [
//         {name:"zar ni", age: 20, job:"deverloper"},
//         {name:"hsu hsu", age: 21, job:"Civil"},
//         {name:"ko ko", age: 21, job:"writer"},
//         {name:"mya mya", age: 22, job:"coder"},

//     ]
//     console.log(severData);
//     severData.forEach(()=>{
//         console.log(severData.age + "<br>");
//     })
// },2000)
// >>>>>>>>*******

// AND GATE>>>>>>>>>>******

// let age =  prompt("Enter your age");
// if(age>=1 && age<=18){
//     console.log("He is a young boy");
// }else if(age>=18 && age<=30){
//     console.log("He is Man");
// }else if(age>=30 && age<= 60){
//     console.log("He is Old");
// }else{
//     console.log("you are dead");
// }

// >>>>>>>>>>>>>>>>********





