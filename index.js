const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();



// Connect to MongoDB
main().catch(err => console.error(err));
async function main(){
  await mongoose.connect(process.env.DB_URI);
}

// Listen
app.listen(parseInt(process.env.PORT), () => console.log(`Listening on port ${process.env.PORT}`));

