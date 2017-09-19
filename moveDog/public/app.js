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

window.setInterval(()=>{
  const a = new XMLHttpRequest();
  a.open('GET', '/top')
  a.onreadystatechange = ()=>{
    if(a.responseText){
      const m = document.getElementById('img');
      m.style.marginTop=a.responseText;
    }
  }
  a.send();

  const b = new XMLHttpRequest();
  b.open('GET', '/left')
  b.onreadystatechange = ()=>{
    if(b.responseText){
      const m = document.getElementById('img');
      m.style.marginLeft=b.responseText;
    }
  }
  b.send();
 
},1000)

