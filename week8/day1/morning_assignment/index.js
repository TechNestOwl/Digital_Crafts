const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const pool = require("./db.js")

app.use(express.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

app.get("/", (req,res) => {
    res.send("Hello world, happy Monday!")
});

//CREATE
app.post("/fruit", async (req,res) => {
    try{
        const {fruit_id, fruit_name, fruit_type, taste_rating} = req.body
        const newFruitDB = await pool.query(
            "INSERT INTO fruits (fruit_id, fruit_name, fruit_type, taste_rating) VALUES ($1,$2,$3,$4)",
            [fruit_id, fruit_name, fruit_type, taste_rating]);
            
            console.log(req.body);
            res.json(newFruitDB);
        }catch (err){
            console.error(err.message)
        }
});

//READ
app.get("/read_fruits", async (req,res) => {
    try{
        const readFruitsFromDB = await pool.query(
            "SELECT * FROM fruits"
        );
        res.json(readFruitsFromDB.rows);
    }catch (err){
        console.error(err.message)
    };
});

//READ SPECIFIC 
app.get("/read_fruits/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const readSpecificFruitID = await pool.query(
            "SELECT * FROM fruits WHERE fruit_id = ($1)", [id]
        );
        res.json(readSpecificFruitID);
        }catch (err) {
            console.error(err.message)
        }
});

//UDPATE 
app.put("/update_fruits/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const {fruit_name, fruit_type, taste_rating} = req.body
        const updateByFruitID = await pool.query(
            "UPDATE fruits SET fruit_name = $1, fruit_type = $2, taste_rating = $3, WHERE fruit_id = $4 ",
            [fruit_name, fruit_type, taste_rating, fruit_id]
        );
        res.json("Updated fruit information");
        }catch (err) {
            console.error(err.message)
        }
});

//DELTE
app.delete("/delete_fruit/:id", async (req,res) => {
    try{
        const deleteFruitByID = await pool.query(
            "DELETE FROM fruits WHERE fruit_id = $1",[id]
        );
        res.json("Fruit was succsessfully deleted from database.");
    }catch (err){
        console.error(err.message);
    }
});