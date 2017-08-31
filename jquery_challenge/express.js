const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();
const gm = require('gm');

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json({limit: "500mb"}));

const appendTextToFile = (req,res) =>{
  const textFilePath = '/home/alopez/garagescript/jquery_challenge/public/book.txt'; 
  const chatMessage = `${req.body.name}: ${req.body.comment}\n`; 

  fs.appendFile(textFilePath, chatMessage);
  res.send('append comment to /book.txt');
}
app.post('/send',appendTextToFile);

const createImageMeme = (req, res) =>{

  const imageData = req.body.Canvas.replace('data:image/png;base64',""); 
  const imageMeme = `/home/alopez/garagescript/jquery_challenge/public/images/${req.body.name}.png`; 

fs.writeFile(imageMeme,imageData,'base64',() =>{
    gm(imageMeme).fontSize(40).drawText(50,50,req.body.comment).write(imageMeme,(imageMeme)=>{
    });
});

res.send('create memes');  

}

app.post('/image', createImageMeme);

let arrMemes = [];
console.log(arrMemes);
app.post('/memes', (req, res)=>{

  const indexMemes = (meme) =>{
     arrMemes.push(meme);
  }

  const memeImages = (err,images)=>{
    images.forEach(indexMemes);
    res.sendFile(arrMemes);
  }
  fs.readdir('./images', nameImages);

}
)

