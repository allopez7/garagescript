const isInArray = (string,num,i=0) =>{
  if(num === string[i]){
    return true;
  }else if(string.length === i){
    return false;
  }
  return isInArray(string,num,i+1);
}

console.log(isInArray([1,1,2],9));
