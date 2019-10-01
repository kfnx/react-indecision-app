// const add = (a, b, c) => {
//   console.log(arguments);
//   return a + b + c;
// };
// console.log(add(1, 2, 3));

const me = {
  name: "Kafin",
  cities: ["Pluto", "Pochinki", "Bandung"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " in " + city);
    // console.log(this.name);
    // console.log(this.cities);
    // this.cities.forEach(city => {
    //   return this.name + " has lived in " + city;
    // });
  }
};

console.log(me.printPlacesLived());

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
multiplier.multiplyBy = 3;
console.log(multiplier.multiply());
