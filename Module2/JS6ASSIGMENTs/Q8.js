// a
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);  // ReferenceError: x is not defined bcz it is block scoped

// b
 const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};
console.log(profile.user?.details?.email);  // test@mail.com
console.log(profile.user?.info?.phone);  // undefined


// c 

const user ={
  username:"Zeba"
};
console.log(user.address?.city);  // undefined  