const express = require('express');

const app = express();

const mongoose = require('mongoose');
const UsersModel = require('./models/users');

const cors = require('cors');
app.use(cors());


app.use(express.json());





mongoose.connect("mongodb+srv://mernapp:mernappswd1@cluster0.1dsjyay.mongodb.net/mern-demo?retryWrites=true&w=majority");

app.get("/getUsers", async (req, res) => { try {
    const usermodel = await UsersModel.find({});
    res.send(usermodel);
    console.log(usermodel);
  } catch (err) {
    console.log(err);}});


app.post("/createUser" , async (req, res) => {
const user = req.body;
const newUser =  new UsersModel(user);
await newUser.save();
res.json(user);
} );




app.listen(3001, ()=> {
console.log("Server started at port 3001")

});

//mongodb+srv://mernapp:*****@cluster0.1dsjyay.mongodb.net/test
//mongodb+srv://mernapp:mernappswd1@cluster0.1dsjyay.mongodb.net/?retryWrites=true&w=majority

 // for simplicity all of the api requests will be here in this file

 // the api requests can also be done by creating routes or by app.get() app.post() etc.