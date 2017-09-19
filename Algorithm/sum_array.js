const sumArr = (arr, i=0, sum=0) =>{
  if(i===arr.length){
    return sum;
  }
  sum = sum+arr[i];
  i=i+1;
  return sumArr(arr,i,sum);
}
sumArr(arr);

