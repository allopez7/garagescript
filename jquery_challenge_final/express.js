const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();
const gm = require('gm');
const util = require('util');
const mime = require('mime');

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json({limit: "500mb"}));

const appendTextToFile = (req,res) =>{
  const textFilePath = '/home/alopez/garagescript/jquery_challenge_base64/public/book.txt'; 
  const chatMessage = `${req.body.name}: ${req.body.comment}\n`; 

  fs.appendFile(textFilePath, chatMessage);
  res.send('append comment to /book.txt');
}
app.post('/send',appendTextToFile);

const createImageMeme = (req, res) =>{

  const imageData = req.body.Canvas.replace('data:image/png;base64',""); 
  const imageMeme = `/home/alopez/garagescript/jquery_challenge_base64/public/images/${req.body.name}.png`; 

fs.writeFile(imageMeme,imageData,'base64',() =>{
    gm(imageMeme).fontSize(40).drawText(50,50,req.body.comment).write(imageMeme,(imageMeme)=>{
    });
});

res.send('create memes');  

}
app.post('/image', createImageMeme);

// read memes from images directory and send array to clientside javascript
app.get('/memes', (req, res)=>{

  let arrMemes = [];
  const indexMemes = (meme) =>{
    arrMemes.push(meme);
  }

  const memeImages = (err,images)=>{
    images.forEach(indexMemes);
    res.send(arrMemes);
  }

  fs.readdir('/home/alopez/garagescript/jquery_challenge_base64/public/images', memeImages);

}
)

// convert images to base64
app.post('/base64ImageData',(req,res)=>{
  let meme  = req.body.data;
  const base64ConvertImage = (meme) =>{
    let data = fs.readFileSync(`/home/alopez/garagescript/jquery_challenge_base64/public/images/${meme}`).toString('base64');
    return util.format('data:%s;base64,%s', mime.lookup(`/home/alopez/garagescript/jquery_challenge_base64/public/images/${meme}`),data);
  }
  
  res.send(base64ConvertImage(meme));
}
)
