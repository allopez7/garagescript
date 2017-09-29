const addTwoArrays = (arr1,arr2, i=0, newArray='',pushArr=[] )=>{
  if(i === arr1.length){
    return pushArr;
  }
  newArray = newArray + arr1[i]+arr2[i];
  pushArr.push(newArray);
  return addTwoArrays(arr1,arr2, i+1, newArray, pushArr);
}
console.log(addTwoArrays(['abc'],['def']));
