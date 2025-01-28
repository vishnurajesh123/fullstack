console.log("HELLO WORLD!");
console.log(document);
let username=window.prompt("enter your name");
console.log(`Hello ${username}`);

var a=10;
let b=10;
const c=30;

if(true){

    var a =40;
    let b =50;
    console.log(a);
    console.log(b);

}

console.log(a);
console.log(b);

let name= "Alice";
let age="25";
let isstudent = true;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isstudent);
console.log("");
let y = "21";
console.log(typeof y);
let x=Number(y);
console.log(typeof x);

age =20;
if(age>=18){
    console.log(" you are an adult"); 
}
else{
    console.log("you are a minor");
}
let result=age>=18 ? "you are an adult" : "you are a minor";
console.log(result);
let arr =[1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for(let num of arr){
    console.log(num);
}
function add(a,b){
    return a+b;
}
console.log(add(1,2));

let text="rain in the world";
let pattern = /rain/;
if(pattern.test(text)){
    console.log("pattern found");
}
else{
    console.log("pattern not found");
}
const email = document.getElementById("email");
pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
const validate = document.getElementById("validate");
const result2 = pattern.test(email.value);
validate.textContent = result2;
