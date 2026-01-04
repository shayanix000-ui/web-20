function abc(d){

console.log(d);

}
abc(12);
let a = 12;
abc(a)
abc(15);
abc(17);
let b = 18

function def(a,b){

return a + b ;

}
console.log(def(a,b));

console.log(def(12,13));

let e = 1050 - def(a,b);
console.log(e);

function s(a,b){

const s = a - b;
return s;

}
console.log(s(a,b));

e = s(1050 , def(a,b));
console.log(e);

function x(a,b){
let x = a * b;
return  x;

}
w = x(1050 , def(a,b));
console.log(w);


console.log(x(def(def(a,b),s(a,b)),s(b,a)));
