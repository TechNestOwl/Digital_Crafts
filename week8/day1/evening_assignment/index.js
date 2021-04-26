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

app.get('/home', (req,res)=> {
    res.render('home');
});

app.get('/todo/:id', (req,res)=> {
    const {id} = req.params;
    const task = todoDB.find(f => f.id === id);
    
    if (task) {
        res.render('todo', {
            locals: {
                friend
            }
        });
        // let htmlData = ``;
        // htmlData += `<h1>${friend.name}</h1>`;
        // htmlData += `<h1>${friend.handle}</h1>`;
        // htmlData += `<h1>${friend.skill}</h1>`;
        // res.send(htmlData);
    }else {
        res.status(404)
            .send(`You have no tasks with the id: ${id}`)
    }
});