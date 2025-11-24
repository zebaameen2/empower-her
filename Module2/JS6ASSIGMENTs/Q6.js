const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
} 
console.log(isEven(4));  // true
console.log(isEven(7));  // false

let marks=70;
let res=(marks>=50)? "Pass":"Fail";
console.log(res);  // Pass


const greet=(name) => name ? `Hello, ${name}!` : "Hello, Guest!";
console.log(greet("Sam"));
console.log(greet());  // Hello, Guest!