const express = require('express');

const app = express();

app.get("/", (req, res) => {
  req.send("Hello World");
})

app.listen(process.env.PORT, () => console.log("Server listening on PORT " + process.env.PORT));