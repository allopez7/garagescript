const fs = require('fs');

const excludeMyName = (name) =>{
  if(name != 'alopez')
  {
    console.log(name)
  }
}


const allNames = (err, files) =>{
    files.forEach(excludeMyName);
}

fs.readdir('/home',allNames);
