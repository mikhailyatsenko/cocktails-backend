const express = require("express");
const app = express();
const port = 3500;
const fetch = require("node-fetch");
const urlRandom = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

app.get("/random", async (req, res) => {
  const response = await fetch(urlRandom);
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(data.drinks[0]);
});

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Server on port ${port}...`);
});
