const fs = require('fs');

const names = (err,files) =>{
  console.log(files);
}
  fs.readdir('/home', names);


