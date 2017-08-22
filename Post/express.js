const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();
app.listen(3608);
app.use(express.static('public'));
app.use(bp.json());

const response = (req,res) =>{
  fs.appendFile('/home/alopez/garagescript/Post/public/book.txt',`${req.body.name}: ${req.body.comment}`+'\n',(err)=>{console.log(err)});
  res.send();
}

app.post('/send', response);
