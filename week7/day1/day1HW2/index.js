const express = require("express");
const app = express();
const PORT = 3000;
const {readFile} = require("fs");
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Hello, ${PORT} is my first node server!`);
});