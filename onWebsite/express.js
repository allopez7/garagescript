const express = require('express');
const bp = require('body-parser');
const app = express();
app.listen(3608);
app.use(express.static('public'));
app.use(bp.json());

let obj = {};

app.post(`/name`, (req,res)=>{
  obj[req.body.name] = Date.now();
  res.send();
})

app.get('/names', (req,res)=>{
  console.log(obj);
  res.send(obj);
})

