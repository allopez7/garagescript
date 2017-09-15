const arr = [5,7,13,12];

const maxNumberArray = (arr)=>{
  let largest = 0;
  arr.forEach((element)=>{
  if(element > largest){
    largest = element;
  }
  })
  return largest;
}

maxNumberArray(arr);

