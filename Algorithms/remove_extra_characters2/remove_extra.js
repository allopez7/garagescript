const removeExtra = (string, i=0, prev='', res='')=>{
  if(i === string.length){
    return res;
  }
  if(string[i] != prev){
    console.log('previous character '+prev);
    console.log('Each character '+string[i]);
    res = res + string[i];
  }
  return removeExtra(string, i+1, string[i], res);
}

console.log(removeExtra('helllo'));
