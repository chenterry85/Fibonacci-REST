const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use( express.json() );
app.use( cors() );

// Setup routes
const fibsRoute = require('./routes/fibs');
app.use('/api/fibs', fibsRoute);

// Connect to MongoDB
main().catch(err => console.error(err));
async function main(){
  await mongoose.connect(process.env.DB_URI);
}

// Listen
app.listen(parseInt(process.env.PORT), () => console.log(`Listening on port ${process.env.PORT}`));

