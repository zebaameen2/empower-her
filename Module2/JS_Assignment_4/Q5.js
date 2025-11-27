const readline = require("readline");

// Create input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask user for countdown time
rl.question("Enter countdown time in seconds: ", (input) => {
  let time = Number(input);

  console.log(`Countdown started: ${time} seconds`);

  // Interval for countdown
  const interval = setInterval(() => {
    time--;
    if (time > 0) {
      console.log(`Remaining: ${time} sec`);
    } else {
      console.log("Countdown Complete!");
      clearInterval(interval);
      rl.close();
    }
  }, 1000);

  // Key press detection: stop countdown if user enters "s"
  rl.on("line", (key) => {
    setTimeout(() => {
      if (key.trim().toLowerCase() === "s") {
        console.log("Countdown Stopped by User!");
        clearInterval(interval);
        rl.close();
      }
    }, 0); // micro delay for event loop
  });

});
