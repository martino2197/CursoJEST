const cities = ["CDMX", "Bogotá", "Lima", "Guadalajara", "Buenos Aires"];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.concat.length)];
  return string;
};

//PROMISE
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split("").reverse().join(""));
  });
};

module.exports = randomString;
