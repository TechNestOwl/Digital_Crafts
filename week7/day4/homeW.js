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
        const {first_name} = req.body

        const newPeopleDB = await pool.query("INSERT INTO people (first_name) VALUES($1)", [first_name])
        console.log(req.body);
        res.json(newPeopleDB);
    }catch (err){
        console.log(err.message)
    }
});