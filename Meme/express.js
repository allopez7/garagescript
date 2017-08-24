const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();
const gm = require('gm');

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json({limit: "500mb"}));

const response = (req,res) =>{
  fs.appendFile('/home/alopez/garagescript/Meme/public/book.txt',`${req.body.name}: ${req.body.comment}`+'\n',()=>{});
  res.send();
}
app.post('/send', response);

const resp2 = (req, res) =>{
  fs.writeFile('/home/alopez/garagescript/Meme/public/'+req.body.name+'.'+'png',req.body.Canvas.replace('data:image/png;base64',""),'base64',() =>{
   gm('/home/alopez/garagescript/Meme/public/'+req.body.name+'.'+'png').fontSize(40).drawText(50,50,req.body.comment).write('/home/alopez/garagescript/Meme/public/text.png',(err)=>{
     console.log("error is", err);
   });
});
  res.send('done');  
}
app.post('/image', resp2);
