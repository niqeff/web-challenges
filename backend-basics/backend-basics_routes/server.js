import { createServer } from "node:http";

export const server = createServer((req, res) => {
  console.log(`URL: ${req.url}`);
  let responseContent;
  let responseStatus;
  switch (req.url) {
    case `/api/fish/1`:
      responseContent = "Shrimp";
      responseStatus = 200;
      break;
    case `/api/fish/2`:
      responseContent = "Anemonefish";
      responseStatus = 200;
      break;
    default:
      responseContent = "Not found";
      responseStatus = 404;
  }
  res.statusCode = responseStatus;
  res.end(responseContent);
});
