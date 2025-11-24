// a
arr1 = [1, 2, 3];
arr2 = [4, 5];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);  // [1, 2, 3, 4, 5]
 
// b
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4));  // 10

// c
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const { name, address: { city, pin } } = user;
console.log(name, city, pin);  // Alice Bangalore, 560001