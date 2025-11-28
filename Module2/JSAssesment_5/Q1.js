function displayMessage(name){
  console.log(`hello $(name)`)
}
function greetUser(callback){
    callback("alice")
}
greetUser(displayMessage)