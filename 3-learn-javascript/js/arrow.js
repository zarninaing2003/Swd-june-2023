// function run(){
//     return "this is run";
// }

// const run = function(){
//     console.log("object");
//     return "this is run";
// }

// const run = ()=> "this is run";
// const run =() =>{
//     console.log("arrow fun");
//     return "this is run";
// }
// console.log(run());

const intro = (name,dateOfBirth) => {
    // my name is zar ni naing . I'm 20 years old.
    const date = new Date();
    const currentYear = date.getFullYear();
    const bd = new Date(dateOfBirth);
    const birthYear = bd.getFullYear();

    const currentAge = currentYear -birthYear;

    return `My name is ${name}. I'm ${currentAge} years old`;
}

console.log(intro ("zar ni naing", "2003-6-24"));
console.log(intro ("Hsu myat hlaing", "2002-10-15"));
console.log(intro ("Ronaldo", "2003-6-24"));