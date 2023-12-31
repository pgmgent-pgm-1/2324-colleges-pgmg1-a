const car = "BMW"; // string
const year = 2016; // number
const isMonday = true; // boolean

console.log(car === "BMW"); // true
console.log(car === "bmw"); // false
console.log(year === 2016); // true
console.log(year === "2016"); // false
console.log(year + "" === "2016"); // true (want "2016" === "2016")

console.log(car !== "BMW"); // false

console.log(true || false || false); // FALSE, want 1 is ten minste true
console.log(true && false && true); // false
console.log(true && true); // true
console.log(true || true); // true

console.log(year < 2016); // false
console.log(year <= 2016); // true

if (year > 2016) {
  console.log("Het jaar is groter dan 2016");
} else if (year < 2016) {
  console.log("Het jaar is kleiner dan 2016");
} else {
  console.log("Het jaar is 2016");
}

console.log("Hallo" && true); // true
console.log(undefined && true); // undefined geeft false wanneer gebruikt als conditie

// getal x deelbaar door bv. 5?
const x = 10;
console.log(x % 5 === 0); // true

const lokaal = "h12"; // string
const isOld = true; // boolean
// const year = 1990; // number;
const students = ["Eliaz", "Elias"]; // array
console.log(students[0]);
console.log(students[1]);
