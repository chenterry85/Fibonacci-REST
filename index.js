const express = require('express');
const mongoose = require('mongoose');

const app = express();


// Connect to MongoDB
main().catch(err => console.error(err));
async function main(){
  await mongoose.connect('');
}