const fs = require('fs');

let namesString = "";

const excludeMyName = (name) =>{
  if(name != 'alopez'){
    namesString=namesString+' '+name+'\n';
  }
}

const allNames = (err, files) =>{
  files.forEach(excludeMyName);
  fs.writeFile('/home/alopez/garagescript/readdir_writeFile/book.txt',namesString,(err) =>{});
}

fs.readdir('/home',allNames);
