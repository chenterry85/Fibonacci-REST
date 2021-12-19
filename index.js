const express = require('express');
const mongoose = require('mongoose');
require('dotenv')

const app = express();


// Connect to MongoDB
main().catch(err => console.error(err));
async function main(){
  await mongoose.connect(process.env.MONGODB_URI);
}

// Listen
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));

