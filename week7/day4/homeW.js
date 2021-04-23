const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3005;
const pool = require("./db.js");


//middleware
app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.send("You are on the node sever");
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.post("/people", async (req,res) => {
    try {
        const {person_id,first_name,last_name,email} = req.body

        const newPeopleDB = await pool.query(
            "INSERT INTO people (person_id,first_name,last_name,email) VALUES($1,$2,$3,$4)",
            [person_id,first_name,last_name,email]);
            
        console.log(req.body);
        res.json(newPeopleDB);
    }catch (err){
        console.log(err.message)
    }
});