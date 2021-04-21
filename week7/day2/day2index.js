
const express = require("express");
const app = express();
app.use(express.json());
const address = "127.0.0.1"
const PORT = 3004;

app.get("/",(req,res) => {
    res.send("Home")
});
app.get("/FAQ",(req,res) => {
    res.send("FAQ")
});
app.post("/TEAM",(req,res) => {
    const {userName, password, email} = req.body;
    res.send(`Your ${username} and ${password} are tied to your ${email}`)
});


app.listen(PORT, () =>{
    console.log(`Test ${PORT}`);
})
