const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const app = express();

app.listen(3608);
app.use(express.static('public'));
app.use(bp.json());

let ticketsLeft = 100;  
const ticketResponse = (req,res) =>{
  ticketsLeft = ticketsLeft - req.body.tickets;
  const soldOut = 'Sold Out!';
  
  if(ticketsLeft <= 0){
    fs.writeFile(`/home/alopez/garagescript/tickets_challenge/public/book1.txt`, `Sold Out: ${soldOut}\n`);
  }else{
    fs.writeFile("/home/alopez/garagescript/tickets_challenge/public/book1.txt", `Tickets Left: ${ticketsLeft}\n`);
  }
  res.send();
}
app.post('/ticket', ticketResponse);

