const arr = [4,5,6,7];

const sumArray = (arr) =>{
  let sum = 0;
  arr.forEach((value) =>{
    sum = sum + value;
  })
  return sum;
}
sumArray(arr);
