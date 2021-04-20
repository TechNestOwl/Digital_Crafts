const express = require("express");
const app = express();
const PORT = 3001;
const {readFile} = require("fs");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));


app.get("/", (req,res) => {
    readFile("./store.html", "UTF8", (err,html) => {
        res.send(html)
    })
});

app.get("/contact", (req,res) => {
    readFile("./contact.html", "UTF8", (err,html) =>{
        res.send(html)
    })
});

app.listen(PORT, () => {
    console.log("Hello my first node server!");
});

