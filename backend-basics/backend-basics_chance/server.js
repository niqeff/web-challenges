import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

export const server = createServer((req, res) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession({ rank: true });
  const resultContent = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  res.statusCode = 200;
  res.end(resultContent);
});
