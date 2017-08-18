const fs = require('fs');
const express = require('express');
const app = express();
app.listen(3608);
app.use(express.static('public'));

const response = (req,res) =>{
  fs.appendFile('/home/alopez/garagescript/Interval/public/book.txt',`${req.query.name}: ${req.query.comment}`+'\n',(err)=>{console.log(err)});
  res.send();
}

app.get('/send', response);
