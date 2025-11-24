const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { name: "Broadway", number: 123 }
    }
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
];

const [
  {
    name: firstName,
    address: {
      city: firstCity,
      street: { name: firstStreetName, number: firstNumber }
    }
  },
  {
    name: secondName,
    address: {
      city: secondCity,
      street: { name: secondStreetName, number: secondNumber }
    }
  }
] = people;

console.log(`${firstName} lives in ${firstCity} on ${firstStreetName} street, number ${firstNumber}. and ${secondName} lives in ${secondCity} on ${secondStreetName} street, number ${secondNumber}.`);
