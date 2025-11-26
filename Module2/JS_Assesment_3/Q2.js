function createCounter() {
    let count = 0;
    function counter() {
        count += 1;
        return count;
    }
    return counter;
}       
module.exports = createCounter;

 const myCounter = createCounter();
    console.log(myCounter()); // Output: 1  
    console.log(myCounter()); // Output: 2
console.log(myCounter()); // Output: 3





