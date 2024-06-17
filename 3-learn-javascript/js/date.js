// const date = new Date;
// console.dir(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toISOString());
// console.log(date.toUTCString());

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// console.log(date.getDay());



// const date = new Date(1994,7,24);
// console.log(date);

const current = new Date();

const newTime  = current.setHours(current.getHours() + 300);
// console.log(current);
    // console.log(current.getHours());
    // current.setMonth(current.getMonth() + 6)
    current.setDate(current.getDate() + 25)
    console.log(current);