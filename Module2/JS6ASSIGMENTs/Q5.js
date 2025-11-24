const name = "Sam";
const age = 21;
const student = {
  name,
 age,
  greet () {
    console.log("Hello");
  }
};

  //  b 
   const getfullName=(firstName,lastName)=>`${firstName} ${lastName}`;
console.log(getfullName("Sam","Smith"));