const express = require('express')
const http = require('http');
const fs = require("fs")
const path = require("path")

const app = express()

const hostname = '127.0.0.1';
const port = 3030;

const server = http.createServer((req, res) => {
  
  if (req.url==="/"){
    const home = path.join(__dirname, 'public', 'home.html');
    fs.readFile(home, 'utf8', (err, data) =>{
      if (err) throw err;
      res.end(data);
    });
  }
  
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World Brasil');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});