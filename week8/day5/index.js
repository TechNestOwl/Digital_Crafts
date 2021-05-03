const express = require("express");
const app = express();
const Sequelize = require('sequelize');
const { User } = require('./models');
const doctor = require("./models/doctor");


//creating a new Doctor
app.post('/doctors', async (req,res) => {
    const {fullName, email, appointments} = req.body;
    const newDoctor = await Doctor.create({
        fullName,
        email,
        appointments
    });
    
    res.json({
        id:newDoctor.id
    });
})
//Retrieving Doctors by full name
app.get('/doctors/by-full-name', async (req, res) => {
    try{
        const doctors = await Doctor.findAll({
            attributes: ["fullName"]
        });
        res.json(doctors);
    }catch (e) {
        console.log(e);
        res.status(404).json({
            message: "Doctor not found"
        });
    }
});
//Updating a Doctor by id
app.post('/doctor/:id', async (req, res) => {
    const { id } = req.params;
    const updatedDoctor = await Doctor.update(req.body, {
        where: {
        id
        }
    });
    
    res.json(updatedDoctor);
});
//Deleteing a Docotr
app.delete('/doctor/:id', async (req, res) => {
    const { id } = req.params;
    const deletedDoctor = await Doctor.destroy({
        where: {
            id
        }
    });
    res.json(deletedDoctor);
});