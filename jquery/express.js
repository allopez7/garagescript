const fs = require('fs');
const express = require('express');
const bp = require('body-parser');
const app = express();
const gm = require('gm');

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json({limit: "500mb"}));

app.post('/send', (req,res) =>{
  const textFilePath = '/home/alopez/garagescript/jquery/public/book.txt'; 
  const chatMessage = `${req.body.name}: ${req.body.comment}\n`; 

  fs.appendFile(textFilePath, chatMessage);
  res.send('append comment to /book.txt');
}
);

app.post('/image', (req, res) =>{
  const imagePath = `/home/alopez/garagescript/jquery/public/${req.body.name}.png`; 
  const imageData = req.body.Canvas.replace('data:image/png;base64',""); 
  const imageMeme = `/home/alopez/garagescript/jquery/public/${req.body.name}.png`; 

  fs.writeFile(imagePath,imageData,'base64',() =>{
    gm(imagePath).fontSize(40).drawText(50,50,req.body.comment).write(imageMeme,(err)=>{
   });
});
  res.send('png Image saved and png meme created');  
}
);
