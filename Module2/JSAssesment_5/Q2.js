function timer( duration, onCompete){
  setTimeout(()=>{
    onCompete(`time of ${duration} ms finished`)
  },duration)

}

timer(2000, msg=> console.log(msg))