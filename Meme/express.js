const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();
const gm = require('gm');

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json({limit: "500mb"}));

const appendTextToFile = (req,res) =>{
  const chatMessage = `${req.body.name}: ${req.body.comment}\n`;
  const textFilePath = '/home/alopez/garagescript/Meme/public/book.txt';

  fs.appendFile(textFilePath, chatMessage,()=>{});
  res.send('append comment to /book.txt');
}
app.post('/send', appendTextToFile);

const createImageMeme = (req, res) =>{
  const imageData = req.body.data;
  const imageMeme = `/home/alopez/garagescript/Meme/public/${req.body.name}.png`; 

  fs.writeFile(imageMeme, imageData,'base64',() =>{
    gm(imageMeme).fontSize(40).drawText(50,50,req.body.comment).write(imageMeme,()=>{
    });
  });
  res.send('png image saved and png meme created');  
}
app.post('/image', createImageMeme);
