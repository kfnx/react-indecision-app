console.log("utils.js is running");

const isAdult = age => age > 17;
const canDrive = age => age > 21;
const substract = (a, b) => a - b;
const isSenior = age => age > 60;

// class Rules() {
//     const isAdult = age => age > 17;
//     const canDrive = age => age > 21;
// }
export { isAdult, canDrive, substract as default };
