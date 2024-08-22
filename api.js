var express = require('express');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// var cors = require('cors');
// app.use(cors());
var bodyParser = require('body-parser');
var mysql2 = require('mysql2');
var categories = require('./categories');
var pincode = require('./pincode');
var product = require('./product');
var sliders = require('./sliders');
var bills = require('./bills.js');
var carts = require('./carts');
var users = require('./users');

//Categories Routes
app.post('/categories',(req,res)=> categories.add(req,res));
app.get('/categories',(req,res)=> categories.select(req,res));
app.put('/categories/:id',(req,res)=> categories.update(req,res));
app.delete('/categories/:id',(req,res)=> categories.deletcat(req,res));

//Pincode Routes
app.post('/pincode',(req,res)=> pincode.add(req,res));
app.get('/pincode',(req,res)=> pincode.select(req,res));
app.put('/pincode/:id',(req,res)=> pincode.update(req,res));
app.delete('/pincode/:id',(req,res)=> pincode.deletpin(req,res));

//Product Routes
app.post('/product',(req,res)=> product.add(req,res));  
app.get('/product',(req,res)=> product.select(req,res));
app.put('/product/:id',(req,res)=> product.update(req,res));
app.delete('/product/:id',(req,res)=> product.deletpro(req,res));

//Bills Routes
app.post('/bills',(req,res)=> bills.add(req,res));
app.get('/bills',(req,res)=> bills.select(req,res));
app.put('/bills/:id',(req,res)=> bills.update(req,res));
app.delete('/bills/:id',(req,res)=> bills.deletebill(req,res));

//carts Routes
app.post('/carts',(req,res)=> carts.add(req,res));
app.get('/carts',(req,res)=> carts.select(req,res));
app.put('/carts/:id',(req,res)=> carts.update(req,res));
app.delete('/carts/:id',(req,res)=> carts.deletcarts(req,res));

//Sliders Routes
app.post('/sliders',(req,res)=> sliders.add(req,res));
app.get('/sliders',(req,res)=> sliders.select(req,res));
app.put('/sliders/:id',(req,res)=> sliders.update(req,res));
app.delete('/sliders/:id',(req,res)=> sliders.deletesli(req,res));

//user routes
app.post('/users',(req,res)=> users.add(req,res));
app.get('/users',(req,res)=> users.select(req,res));
app.put('/users/:id',(req,res)=> users.update(req,res));
app.delete('/users/:id',(req,res)=> users.deleteuser(req,res));

app.listen(5000,()=>{
    console.log('Server started on port 5000');
})