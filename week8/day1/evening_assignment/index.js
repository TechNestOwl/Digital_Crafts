const express = require("express");
const app = express();
app.use(express.json());
const pool = require("./db.js");
const PORT = process.env.PORT || 3001;

app.get("/", (req,res)=> {
    res.send("Welcome to Node server")
});

//template engine
const es6Renderer = require('express-es6-template-engine');
app.engine('html',es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');



//CREATE 
app.post('/todo', async (req,res)=> {
    try{
        const {task_id, task_name, task_importance} = req.body
        const newTask = await pool.query(
            "INSERT INTO todoList (task_id, task_name, task_importance) VALUES ($1,$2,$3)",
            [task_id, task_name, task_importance]);
            
            console.log(req.body);
            res.json(newTask)
    }catch(err){
        console.error(err.mesage)
    }
});

//READ 
app.get("/read_todoList", async (req,res) => {
    try{
        const readTodoListFromDB = await pool.query(
            "SELECT * FROM todoList"
        );
        res.json(readTodoListFromDB.rows);
    }catch(err){
        console.error(err.message)
    }

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

app.listen(PORT, ()=> {
    console.log(`Listening on port:${PORT}`)
});