const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3608);
app.use(express.static('public'));

const response = (req,res) =>{
  fs.appendFile('/home/alopez/garagescript/XMLHttpRequest/public/book.txt',`${req.query.name}: ${req.query.comment}`+'\n');
  res.send();
}

app.get('/request',response);
