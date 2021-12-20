const express = require('express');
const mongoose = require('mongoose');
const FibNum = require('./models/FibNum');
const cors = require('cors');
const calculateFibonacci = require('./utility/calculateFibonacci');
require('dotenv').config();

const app = express();

// Middleware
app.use( express.json() );
app.use( cors() );

// Get all Fibonacci numbers
app.get('/', async (req, res) => {
  try{
    const fibNums = await FibNum.find().sort({$natural:-1});
    res.status(200).json(fibNums);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

// Get Fibonacci number by input number
app.get('/:number', async (req, res) => {
  try{
    const fibNum = await FibNum.findOne({number: req.params.number});
    res.status(200).json(fibNum);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

// Add new Fibonacci number
app.post('/', async (req,res) => {
  try{
    console.log(req.body.number);
    const resultFibonacci = calculateFibonacci(req.body.number);
    const fibNum = new FibNum({
      number: req.body.number,
      fib_value: resultFibonacci
    });
    await fibNum.save();
    res.status(200).json(fibNum);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

// Delete Fibonacci numbers
app.delete('/', async (req, res) => {
  try{
    await FibNum.deleteMany({});
    res.status(200).json({message: 'All Fibonacci numbers deleted'});
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

// Connect to MongoDB
main().catch(err => console.error(err));
async function main(){
  await mongoose.connect(process.env.DB_URI);
}

// Listen
app.listen(parseInt(process.env.PORT), () => console.log(`Listening on port ${process.env.PORT}`));

