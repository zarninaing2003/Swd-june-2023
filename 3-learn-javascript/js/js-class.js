// const obj  ={
//     a: "aaa",
//     b: "bbb",
//     c: "ccc",
// }

// console.log(obj);

// const st1 = {
//     name:"znn",
//     phone: "09882689334",
//     township:"Yangon",
//     subject: 0
// }

// ***classes and object***

// class Student {
//     name;
//     phone ;
//     township;
//     age;

//     introduce() {
//     return `My name is ${this.name} and was born in ${this.birthYear}`;
// }

// birthYear(){
//     return 2023-this.age;
// }

// }



// const st1 = new Student;//instantiate
// st1.name = "zar ni naing";
// st1.phone ="09882689334";
// st1.township = "yangon"
// st1.age = 20;
// console.log(st1);
// console.log(st1.introduce());

// const st2 = new Student;//instantiate
// st2.name = "Hsu myat hlaing";
// st2.phone ="09882689336";
// st2.township = "yangon";
// st2.age = 21;
// console.log(st2);
// console.log(st2.introduce());




// const st3 = new Student;//instantiate
// st3.name = "Ronal";
// st3.phone ="09799922744";
// st3.township = "Asia";
// st3.age = 38;

// console.log(st3);
// console.log(st3.introduce());


// ****constructor and  initialization****


// class A {

//     constructor(z){
//         console.log("this is A Constructor",z);
//     }


//     x(){
//         return "this is x";

//     }

//     y(){
//         return "this is y";
//     }
// }

// const a = new A("zzz");
// console.log(a);
// console.log(a.x());
// console.log(a.y());

// class Student{
//     subjects = ["WDF","SWD","WAD"]

//     constructor(inputName,inputGender,inputAge,inputTownship,inputSubject){
//         this.name = inputName;
//         this.gender  = inputGender;
//         this.proNoum  = this.gender ==="male" ? "he" : "she"
//         this.age = inputAge;
//         this.birthYear = 2023-inputAge;
//         this.township = inputTownship;
//         this.subject = this.subjects[inputSubject]
//     }
//     introduce(){
//         return `My name is ${this.name} and ${this.proNoum} was born in ${this.birthYear} at ${this.township}`
//     }
// }


// const stOne = new Student("zar ni", "male",20,"Bahan",1);
// console.log(stOne);
// console.log(stOne.introduce());

// const stTwo = new Student("Hsu Hsu", "Female",21,"Hlaing",2);
// console.log(stTwo);
// console.log(stTwo.introduce());


// const stThree = new Student("Ronal", "male",38,"Insein",3);
// console.log(stThree);
// console.log(stThree.introduce());

// ***static properties & methods ***

// class A{
//     static x= "xxx";
//     y="yyy";

//     static z(){
//         return "method z";
//     }

// }

// // const a =new A;
// // console.log(a.x);
// // console.log(a.y);
// // console.log(a.z);

// console.log(A.x);
// console.log(A.z());

// ***access modifier (public, private) & properties,methods***

// 

// class A{
//     x = "xxx";
//     y ="yyy"
// }

// class B extends A {
//     z =  "zzz";
// }

// const b = new B;
// console.log(b);

// class Person {
//     constructor(name,gender){
//         this.name =  name; 
//         this.gender =  gender;
//     }
//     eat(){
//         return `${this.name} can eat`;
//     }

//     sleep(){
//         return `${this.name} can sleep`;
//     }
// }

// const me = new Person("zar ni", "Male");
// console.log(me);

// class Student extends Person {
//  constructor(name,gender,subject){
//     super(name,gender);
//     this.subject = subject;
//  }

//  learn(){
//     return `${this.name} can learn ${this.subject}`;
//  }
// }

// const s = new Student("zar ni", "male", "web Development");
// console.log(s.name);
// console.log(s.gender);
// console.log(s.eat());
// console.log(s.learn());
// console.log(s);

// class Monitor extends Student{
// constructor(name, gender,subject,room){
//     super(name, gender,subject);
//     this.name = room
// }

// guard(){
//     return `${this.name} can guard students from ${this.room}`
// }
// }
// const m = new Monitor("Su", "female","web Development","S");
// console.log(m);

// *****getter and setter******

class BankAccount{

    
    // getter and setter

    // getBalance(){
    //     return this.#balance;
    // }

    // setBalance(amount){
    //     this.#balance = amount;
    
    // }



    #balance = 0;
    transition = [];
    transitionIndex = 0;


    deposit(amount){
        this.#balance += amount;
        this.transition(this.transitionIndex++) = {
            amount,
            type :"deposit"
        }

    }
    checkBalance(){
        return this.#balance;
    }

    withDraw(amount){
        if(amount < this.#balance){
            this.#balance -= amount;
            this.transition(this.transitionIndex++) = {
                amount,
                type: "withdraw"
        }
        
        }else{
            console.log("Not enough for withdraw",amount);
        }
    }

    constructor(name){
        this.name = name;
    }
}

const myBankAccount =  new BankAccount ("zar ni", 100);
// myBankAccount.balance =1000; //overwrite
// console.log(myBankAccount.balance);//access
// myBankAccount.setBalance(100);
// console.log(myBankAccount.getBalance());

myBankAccount.deposit(100);
myBankAccount.deposit(300);
myBankAccount.deposit(500);

myBankAccount.withDraw(30);

console.log(myBankAccount.checkBalance());
console.table(myBankAccount.transition);