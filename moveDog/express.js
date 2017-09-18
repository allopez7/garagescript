const express = require('express');
const app = express();

app.listen(3608);
app.use(express.static('public'));

let top = 0;
let left = 0;
app.get('/move', (req,res)=>{
  if(req.query.dir === 'up'){
    top=top-10;
  }
  if(req.query.dir === 'down'){
    top=top+10;
  }
  if(req.query.dir === 'left'){
    left=left-10;
  }
  if(req.query.dir === 'right'){
    left=left+10;
  }
  
  app.get('/top', (req,res)=>{
    res.send(top+'px');
  })

  app.get('/left', (req,res)=>{
    res.send(left+'px');
  })
})
