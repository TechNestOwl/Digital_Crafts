const Sequelize = require("sequelize");
const {User} = require("./models");

//creat a new user
app.post('/users', async (req,res)=> {
    //req.body contains an Object with firstName, lastName, email
    const {firstName, lastName, email} = req.body;
    const newUser = await User.create({
        firstName,
        lastName,
        email
    });
    //Send back the new user's ID in the response:
    res.json({
        id: newUser.id
    });
});

//retrieve a user
app.get('/users', async (req,res) => {
    //'.findAll()  - selects all columns by defualt. Provide an Attributs option to specify column names:
    try{
        const users = await User.findAll({
            attributes: ['lastName']
        });
        res.json(users);
    }catch (e) {
        console.log(e);
        res.status(404).json({
            message: "User not found"
        });
    }
});
// to retrieve by ID use ' .findByPk() ' find by primary key
//to do a TEXT search - use 'whree'
    // const users = await User.findAll({
    //     where: {
    //         firstName: req.body.term,
    //     }
    // });

//Updating Existing Users note: it's best to use where option so that you don't update all rows.
app.post('/users/:id', async (req,res) => {
    const { id } = req.params;
    //assuming that 'req.body' is limited to 
    //the keys firstName, lastName, email
    const updateUser = await User.update(req.body, {
        where:{
            id
        }
    });
    res.json(updatedUser);
});

//deleting a user
app.delete('/users/:id', async (req,res) => {
    const {id} = req.params;
    const deletedUser = await User.destroy({
        whrere: {id}
    });
    res.json(deletedUser);
});