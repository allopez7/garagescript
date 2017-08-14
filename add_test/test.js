const file = require('./add.js');

const test = (a,b,c) =>{
  if(file(a,b) === c){
    console.log('correct');
  }
  else{
    console.log('incorrect');
  }
}

test(1,2,3);
test(1,3,2);
