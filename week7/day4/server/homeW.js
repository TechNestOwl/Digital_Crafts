const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3005;
const pool = require("./db.js");

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("You are on the node sever");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

//I'm creating the person
app.post("/peoplelist", async (req,res) => {
    try {
        const {person_id,first_name,last_name,email} = req.body

        const newPeopleDB = await pool.query(
            "INSERT INTO people (person_id,first_name,last_name,email) VALUES($1,$2,$3,$4)",
            [person_id,first_name,last_name,email]);

        console.log(req.body);
        res.json(newPeopleDB);
    }catch (err){
        console.error(err.message)
    }
});

//reaading teh person table?
app.get("/read_people", async (req,res) => {
    try{
        const readPeopleFromDB = await pool.query(
            "SELECT * FROM people"
        );
        res.json(readPeopleFromDB.rows);
    }catch (err){
        console.error(err.message);
    }
});
//reading specific person by id
app.get("/read_people/:id", async (req,res) => {
    try{
        const {id}= req.params;
        const readingSpecificPerson = await pool.query(
            "SELECT * FROM people WHERE person_id = ($1)",[id]
        );
        res.json(readingSpecificPerson);
        }catch(err) {
            console.error(err.message);
        }
});
//updating a persons details in people table
app.put("/update_person/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {first_name,last_name,email} = req.body
        const updatePersonInDB = await pool.query(
            "UPDATE people SET first_name = $1, last_name = $2, email = $3 WHERE person_id = $4",
            [first_name,last_name,email,person_id]
        );
        res.json("Updated person info");
    } catch (err) {
        console.error(err.message);
    }
})

//deleting 
app.delete("/delete_people/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletePeopleInDB = await pool.query(
        "DELETE FROM people WHERE person_id = $1",
        [id]
        );
        res.json("Person was successfully deleted!");
    } catch (err) {
        console.log(err.message);
    }
});
