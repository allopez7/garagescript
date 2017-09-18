const move = (d) =>{
  const a = new XMLHttpRequest();
  a.open('GET', `/move?dir=${d}`);
  a.send();
}

document.getElementById('up').onclick = ()=>{
  move('up');
}

document.getElementById('down').onclick = ()=>{
  move('down');
}

document.getElementById('right').onclick = ()=>{
  move('right');
}

document.getElementById('left').onclick = ()=>{
  move('left');
}

setInterval(()=>{
  const b = new XMLHttpRequest();
  b.open('GET', '/data')
  b.onreadystatechange = ()=>{
    if(b.responseText){
      m=document.getElementById('img');
      m.style.marginTop=b.responseText;
    }
  }
},1000)
