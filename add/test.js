const r = require('./addition.js');

const test = (a,b,c) => {
  if(r(a,b) === c) {
    console.log('Correct');
  } else {
    console.log('Wrong');
  }
};

test(2,3,5);
test(4,2,9); 
