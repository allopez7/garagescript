const express = require('express');
const fs = require('fs');
const app = express();
app.listen(3608);
app.use(express.static('public'));

const response = (req,res) =>{

  fs.appendFile('/home/alopez/garagescript/publicHTML/public/book.txt',req.query.Name+': '+req.query.Comment+'\n',
    (err)=>{});
  res.send('done');

}

app.get('/send',response);
