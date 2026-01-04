window.addEventListener("load", ()=>{

})
let a = 12;
let b = 13;

// console.log(sum(multy(a,b),minus(b,a)));
function sum(a=0,b=0){
const z = a + b;
return z;

};

function multy(a=7,b=7){
console.log(a,b);

const m = a * b;
return m;

}
function minus(a=0,b=7){

const mi = a - b;
return mi;
// به خاطر ترتیب

}
// console.log(sum());
// console.log(multy());
// console.log(minus());


console.log(mobina(sum(multy(a,b),sum(a,b)),multy(a,b)));

function mobina(a,b){

// const x = `${a} ${b}` ;
return `${a} ${b}`;

}


let gender = "mail";
let name = "shayan" ; 
let age = 16 ;

message = `hello ${gender} ${name} ${age}`
console.log(message);

function message(gender,name,age){

const v = `hello ${gender} ${name} ${age}`
return v ;

}
console.log(message);

function shayan(l,k,j){

}