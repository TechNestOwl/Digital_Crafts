const PORT = 3001;
const express = require("express");
const app = express();
app.use(express.json());

const es6Renderer = require('express-es6-template-engine');
app.engine('html',es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

const pool = require("./db.js");


app.get("/", (req,res)=> {
    res.send("Welcome to Node server")
});

app.listen(PORT, ()=> {
    console.log(`Listening on port:${PORT}`)
});

app.get('/', (req,res)=> {
    res.send('Hello from express!')
});