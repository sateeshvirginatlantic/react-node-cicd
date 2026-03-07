const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 5000;

app.get("/api", (req, res) => {

  const log = `Request received at ${new Date()}\n`;

  fs.appendFileSync("/logs/app.log", log);

  res.json({
    message: "Hello from Node Backend"
  });

});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});