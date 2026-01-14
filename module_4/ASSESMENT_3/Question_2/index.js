// index.js

// Import the boxen module
const boxen = require('boxen');

// Define message and title
const message = 'I am using my first external module!';
const title = 'Hurray!!!';

// Classic box (default)
console.log(
  boxen(message, {
    title: title,
    padding: 1,
    margin: 1,
  })
);

// SingleDouble box
console.log(
  boxen(message, {
    title: title,
    borderStyle: 'singleDouble',
    padding: 1,
    margin: 1,
  })
);

// Round box
console.log(
  boxen(message, {
    title: title,
    borderStyle: 'round',
    padding: 1,
    margin: 1,
  })
);

// Bonus: Add background color (optional)
console.log(
  boxen(message, {
    title: title,
    borderStyle: 'round',
    padding: 1,
    margin: 1,
    backgroundColor: 'green',
    color: 'white'
  })
);
