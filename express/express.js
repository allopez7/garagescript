const fileSystem = require('fs');
const express = require('express');
const app = express();
app.listen(3608);

const response = (req,res) =>{

  let sumNames = ''; 
  const allNamesButMine = (name) =>{
    if(name != 'alopez'){
      sumNames=sumNames+' '+name;
    }
  }

  const directoryNames = (err,files) =>{
    files.forEach(allNamesButMine);
    res.send(sumNames);
  }

  fileSystem.readdir('/home',directoryNames);

}

app.get('/',response);
