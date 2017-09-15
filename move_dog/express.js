const express = require('express');
const fs = require('fs');
const bp = require('body-parser');
const app = express();

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json());

let moveUp = 0;
app.post('/up', (req,res)=>{
  moveUp = moveUp + req.body.up;
  fs.appendFile('/home/alopez/garagescript/move_dog/public/book.txt',moveUp.toString()+'\n');
  res.send(moveUp.toString());
})

  /*
let moveDown = 0;
app.post('/down', (req,res)=>{
  moveDown = moveDown + req.body.down;
  fs.appendFile('/home/alopez/garagescript/move_dog/public/book.txt',`${moveDown.toString()}\n`);

  res.send();
})

let moveRight = 0;
app.post('/right', (req,res)=>{
 moveRight = moveRight + req.body.right;
  fs.appendFile('/home/alopez/garagescript/move_dog/public/book.txt',`${moveRight.toString()}\n`);
  
  res.send();
})

let moveLeft = 0;
app.post('/left', (req,res)=>{
 moveLeft = moveLeft - req.body.left;
  fs.appendFile('/home/alopez/garagescript/move_dog/public/book.txt',`${moveLeft.toString()}\n`);
 
  res.send();
})
*/
