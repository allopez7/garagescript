const compareArrays = (arr1,arr2,i=0)=>{
 if(i === arr1.length){
   return true;
 }
  if(arr1[i] != arr2[i]){
    return false;
  }
  return compareArrays(arr1,arr2, i+1);
}

console.log(compareArrays([1,2,3],[1,2,3]));
