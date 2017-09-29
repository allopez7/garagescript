const twoStrings = (string1, string2, i=0, newString='')=>{
  if(i === string2.length){
    return newString;
  }
  if(string1[i] != string2[i]){
    newString = newString + string1[i];
  }
  return twoStrings(string1,string2, i+1,newString);
}

console.log(twoStrings('hello','lo'));
