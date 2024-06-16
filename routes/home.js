const { Router } = require('express');

const home = Router();

home.get("/",(req,res)=>{
    res.status(200).json('Welcome to the database API!');
});

module.exports = home;