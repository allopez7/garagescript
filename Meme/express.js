const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();
const gm = require('gm');

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json({limit: "500mb"}));

const response = (req,res) =>{
  const chatMessage = `${req.body.name}: ${req.body.comment}\n`;
  const textFilePath = '/home/alopez/garagescript/Meme/public/book.txt';

  fs.appendFile(textFilePath, chatMessage,()=>{});
  res.send();
}
app.post('/send', response);

const resp2 = (req, res) =>{
  const imagePath = `/home/alopez/garagescript/Meme/public/${req.body.name}.png`;
  const imageData = req.body.Canvas.replace('data:image/png;base64',""); 
  const imageMeme = '/home/alopez/garagescript/Meme/public/text.png'; 

  fs.writeFile(imagePath, imageData,'base64',() =>{
   gm(imagePath).fontSize(40).drawText(50,50,req.body.comment).write(imageMeme,(err)=>{
     console.log("error is", err);
   });
});
  res.send('done');  
}
app.post('/image', resp2);
