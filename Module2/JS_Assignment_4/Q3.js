// Start logging "Loading..." every 1 second
const loadingInterval = setInterval(() => {
  console.log("Loading...");
}, 1000);

// After 5 seconds, stop and show final message
setTimeout(() => {
  clearInterval(loadingInterval);
  console.log("Loaded successfully!");
}, 5000);
