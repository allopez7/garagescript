const maxArr = (arr, i=0,max=[0,0,0]) =>{
 if(arr.length === i){
   return  max;
 }
  let j = 0;
  if(j < arr[j].length){
    j=j+1;
  if(arr[i][j] > max[i]){
    max[i] = arr[i][j];
    //if(j < arr[i].length){
    //i}  
  }
  }
  return maxArr(arr,i+1,max);
}

console.log(maxArr([[1,9,2],[5,9,6],[10,20,1]]));
