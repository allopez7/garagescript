const arr = [4,8,9,1,5];

const maxNum = (arr) =>{
  let largest = 0;
  arr.forEach((value) =>{
    if(value > largest){
      largest = value;
    }
  });
  return largest;
}
maxNum(arr);
