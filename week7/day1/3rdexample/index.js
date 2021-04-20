const express = require("express");
const app = express();
const { readFile } = require("fs");
app.use(express.json());

const PORT = 3000;


//routes
// 1 defualt
//2 home page
//3 about page
//4 FAQ 
app.get("/", (req,res) => {
    readFile("./index.html", "utf8", (err, html) => {
        res.send(html);
    });

})
app.get("/about", (req,res) => {
    readFile("./about.html", "utf8", (err, html) => {
        res.send(html);
    });

})
app.get("/FAQ", (req,res) => {
    readFile("./FAQ.html", "utf8", (err, html) => {
        res.send(html);
    });

})
app.listen(PORT, () => {
    console.log(`Your server is being hoseted on localhosst:${PORT}`)
});