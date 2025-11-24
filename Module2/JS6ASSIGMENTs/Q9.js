// A: Tempalte Literals and  Expression Interpolation 
// a-
let a=5;
let b=7;
console.log(` ${a + b} .`);  // Fifteen is 15 and not 20.
// b-
const msg = ` Hello,
My name is Zeba.
I am learning JavaScript. `;
console.log(msg); 
// c-
let firstName="Zeba"
let lastName="Ameen"
console.log(`My name is ${firstName} ${lastName}.`);

// B:Arrow Functions and This 
// a-
const square=n=> n*n;
console.log(square(4));  //16
// b- 
const obj = {
  value: 50,
  test: () => console.log(this.value)
};   
obj.test();

const obj2 = {
  value: 50,
  function() { console.log(this.value); }   
};
obj2.function();  //50
