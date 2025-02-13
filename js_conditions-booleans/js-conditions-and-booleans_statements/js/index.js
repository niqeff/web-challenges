console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

// const modulo = number % 2;

if (number % 2) {
  console.log(number + " is an even number");
} else {
  console.log(number + " is odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (5 <= numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (100 <= numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else {
  console.log("0.10 euro per hotdog");
}

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour >= 17 ? "Partytime" : "Still need to learn";

console.log(statement);

// Part 5: Greeting
const userName = "Felix";

const greeting = "Hello " + (userName == "Felix" ? "coach" : userName) + "!";

console.log(greeting);
