# Fibonacci REST API Demo

## Requirements
  
- Node.js 12+
- Vue 4.5+
- MongoDB

  
## Description

This is a web application for calculating fibonacci numbers and displaying all previous results. The front end is written in Vue.js as the Javascript framework and bootstrap for css styling, while the backend uses Node's Express.js server with mongoDB as the database. Click [here](https://peaceful-brook-94145.herokuapp.com) to view the deployed website. But if you want to run the website locally, go to the  co"how to install and run locally" section.

  
## Design Choice

I chose Express.js as it is fairly minimalist for fast setup and it provides middleware packages that address most web development issues. MongoDB is a no brained as it is the best option for a non-relational database, which suites this use case for storing only Fibonacci numbers and a few attributes. As for Vue.js, I chose it because I had previous development experience with it and it is fast and simple to setup.
  
## How to install and run locally

### 1) Clone the dev branch into your local depository. Change "myproject" to your project name.

```bash

git clone --branch dev https://github.com/chenterry85/Fibonacci-REST.git ./myproject

```

### 2) Install npm dependencies
 ```bash
 cd myproject
 
# npm dependencies for backend 
npm install
npm update

# npm dependencies for Vue.js
cd client
npm install
npm update

# navigate back to main directory
cd ..
```

### 3) Add environment variables
#### Create `.env` file with the following environment variables
- Port: `5555`  
- MongoDB's Database URI: `mongodb+srv://mongouser:mongo6868@cluster0.ipnoi.mongodb.net/fib_db?retryWrites=true&w=majority`  
```bash
echo -e "PORT=5555\nDB_URI=mongodb+srv://mongouser:mongo6868@cluster0.ipnoi.mongodb.net/fib_db?retryWrites=true&w=majority" > .env
```

### 4) Run the Express server
```bash
 npm start
 ```

### 5) Run the Vue.js client  
Open a new terminal session and in that new session run:  
```bash
cd client
npm run serve
```
