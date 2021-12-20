# Fibonacci REST API demo

## Requirements
  
- Node.js 12+
- Vue 4.5+
- MongoDB

  
## Description

This is a web application for calculating fibonacci numbers and displaying all previous results. The front end is written in Vue.js as the Javascript framework and bootstrap for css styling, while the backend uses Node's Express.js server with mongoDB as the database. I deployed the website here: link. But if you want to run the website locally, go to "how to install and run locally" section.

  
## Design Choice

I chose Express.js as it is fairly minimalist for fast setup and it provides middleware packages that address most web development issues. MongoDB is a no brained as it is the best option for a non-relational database, which suites this use case for storing only Fibonacci numbers and a few attributes. As for Vue.js, I chose it because I had previous development experience with it and it is fast and simple to setup.
  
## How to install and run locally

1) Clone the dev branch into your local depository. Change "myproject" to your project name.

```bash

git clone --branch dev https://github.com/chenterry85/Fibonacci-REST.git ./myproject

```

2) Install npm dependencies
 ```bash
 cd myproject
 
# npm dependencies for backend 
npm install
npm update

# npm dependencies for Vue.js
cd client
npm install
npm update
```

3) Run the Express server
```bash
 npm start
 ```

4) Run the Vue.js client 
```bash
cd client
npm run serve
```