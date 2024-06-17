// const heading  = document.querySelector("#heading");

// heading.addEventListener('mouseover',()=>{
//     console.log("mouse over");
// })

// heading.addEventListener('mouseout',()=>{
//     console.log("mouse out");
// })

// heading.addEventListener('mousemove',()=>{
//     console.log("mouse move");
// })

// const fileInput =  document.querySelector("fileInput");

// fileInput.addEventListener("change",()=>{
//     console.log(fileInput.file);

// })

// const testForm = document.querySelector("#testForm");
// console.log(testForm);

// testForm.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     // console.log(event);
//     // console.log('U submit');
//     const formData = new FormData(testForm);
//     formData.append("salary", 1200);
//     console.log(formData);
//     console.log(formData.get("your_name"));
//     console.log(formData.get("your_bd"));
//     console.log(formData.get("salary"));

//     console.log(formData.has("your_name"));

//     testForm.reset()
// })

// window.addEventListener("scroll",()=>{
//     console.log("U scroll");
//     console.log(window.screenY);
// })

// window.addEventListener("mousemove",(event)=>{
//     console.log("Hello World")
// })


// const btn = document.querySelector("#btn");


// const displayConsole = ()=>{
//     console.log("Hello world");
// }


// btn.addEventListener("click",displayConsole);

// btn.addEventListener("dblclick",()=>{
//     console.log("remove eventlistener");
//     btn.removeEventListener("click",displayConsole);
// })


// const ul = document.querySelector("ul");
// const lis = document.querySelectorAll("li");


// ul.addEventListener("click",(event)=>{
//     console.log(event.target.innerHTML);
// })

// const createLi = (text)=>{
//     const li =document.createElement("li");
//     li.innerText  = text;
//     li.className = "border active:bg-slate-400 p-2"
//     return li;
// }
// console.log(ul.childNodes);
// console.log(lis);
// lis.forEach((li)=>{
//     // console.log(li);
//     li.addEventListener("click",()=>{
//         console.log(li.innerText);
//     })
    
// })

// lis[0].addEventListener("click",()=>{
//     console.log(lis[0].innerText);
// })

// lis[1].addEventListener("click",()=>{
//     console.log(lis[1].innerText);
// })

// lis[2].addEventListener("click",()=>{
//     console.log(lis[2].innerText);
// })

const h1 = document.querySelector("h1");
// h1.addEventListener("click",()=>{
//     console.log(h1.innerText);
// })

// h1.addEventListener("mouseover",()=>{
//     console.log(h1.innerText);
// })

// h1.addEventListener("mouseout",()=>{
//     console.log(h1.innerText);
// })


["click","mouseover","mouseout"].forEach((el)=>{
    h1.addEventListener(el,()=>{
        console.log(h1.innerText);
    })
})

