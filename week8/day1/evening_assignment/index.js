const express = require("express");
const app = express();
app.use(express.json());
const pool = require("./db.js");
const PORT = process.env.PORT || 3001;

app.get("/", (req,res)=> {
    res.send("Welcome to Node server")
});

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

//UPDATE 
app.put("/update_todoList/:id", async (req,res)=> {
    try{
        const {id} = req.params;
        const {task_name, task_importance} = req.body
        const updatetodoListByID = await pool.query(
            "UPDATE todoList SET task_name = $1, task_importance = $2, WHERE task_id = $3",
            [task_name, task_importance, task_id]
        )
    }catch(err) {
        console.error(err.message)
    }
});

//DELETE
app.delete("/delete_task/:id", async (req,res)=> {
    try{
        const {id} = req.params;
        const deleteTaskByID = await pool.query(
            "DELETE FROM todoList WHERE task_id = $1",
            [id]
        );
        res.json("Task was successfully deleted")
    }catch(err){
        console.error(err.message)
    };
});


//template engine
const es6Renderer = require('express-es6-template-engine');
app.engine('html',es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');



app.get('/home', (req,res)=> {
    res.render('home');
});

app.get('/todo/:id', (req,res)=> {
    const {id} = req.params;
    const task = todoDB.find(f => f.id === id);
    
    if (task) {
        res.render('todo', {
            locals: {
                todoList
            }
        });
        // let htmlData = ``;
        // htmlData += `<h1>${task_id}</h1>`;
        // htmlData += `<h1>${task_name}</h1>`;
        // htmlData += `<h1>${task_importance}</h1>`;
        // res.send(htmlData);
    }else {
        res.status(404)
        .send(`You have no tasks with the id: ${id}`)
    }
});

app.listen(PORT, ()=> {
    console.log(`Listening on port:${PORT}`)
});