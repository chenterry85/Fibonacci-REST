const express = require('express');
const FibNum = require('../models/FibNum');
const calculateFibonacci = require('../utility/calculateFibonacci');

const router = express.Router();

// Get all Fibonacci numbers
router.get('/', async (req, res) => {
  try{
    console.log("getting fibs")
    const fibNums = await FibNum.find().sort({$natural:-1});
    res.status(200).json(fibNums);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

// Get Fibonacci number by input number
router.get('/:number', async (req, res) => {
  try{
    const fibNum = await FibNum.findOne({number: req.params.number});
    res.status(200).json(fibNum);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

// Add new Fibonacci number
router.post('/', async (req,res) => {
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
router.delete('/', async (req, res) => {
  try{
    await FibNum.deleteMany({});
    res.status(200).json({message: 'All Fibonacci numbers deleted'});
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

module.exports = router;