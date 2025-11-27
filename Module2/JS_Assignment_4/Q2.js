console.log("message1")

function printonthird() {
  setTimeout(() => {
    console.log("message2");
  }, 2000);
}
printonthird()
console.log("message3")