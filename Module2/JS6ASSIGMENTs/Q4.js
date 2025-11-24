const profile = {
  name: "Zeba",
  age: 21,
  address: {
    city: "Delhi",
    zipcode: 110001
  }
};

const updates = {
  age: 22,
  address: {
    zipcode: 200200,
    country: "India"
  }
};
const mergedProfile = {
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
};
console.log(mergedProfile);