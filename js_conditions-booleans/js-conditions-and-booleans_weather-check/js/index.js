// Change this value to test different "weather" conditions.
const weather = "snowy";

// switch (weather) {
//   case "rainy":
//     console.log("It's rainy!");
//     break;
//   case "sunny":
//     console.log("It's sunny!");
//     break;
//   case "snowy":
//     console.log("It's snowy!");
//     break;
//   default:
//     console.log("I'm not sure what the weather is like.");
// }

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;
switch (weather) {
  case "rainy":
    console.log("It's raining, don't forget your umbrella!");
    break;
  case "sunny":
    if (temperature > 20) {
      console.log("It's sunny and warm!");
    } else {
      console.log("It's sunny, but a bit chilly!");
    }

    break;
  case "snowy":
    if (temperature < 0) {
      console.log("Freezing snow!");
    } else {
      console.log("I'm not sure what the weather is like.");
    }
    break;
  default:
    console.log("I'm not sure what the weather is like.");
}
