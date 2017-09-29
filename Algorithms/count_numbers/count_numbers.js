const count = '5son9bir19';
let j=0;

const countNine = (count, i=0) =>{
  if(count.length===i){
    return j 
  }
  if(count[i] === '9'){
    j=j+1;
  }
  return countNine(count, i+1);;
}

countNine(count);
