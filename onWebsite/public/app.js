const person = prompt('What is your name?');

window.setInterval(()=>{
$.ajax({
  type: 'POST',
  url: '/name',
  contentType: 'application/json',
  data: JSON.stringify({
    name: person
  }),
  success: (data)=>{
    console.log(data);
    
  }
})

  $.get('/names',(data)=>{
    let keys = '';
    Object.keys(data).forEach((key)=>{
      let currentTime = Date.now();
      let lastTime = data[key];
      console.log('Current time: '+currentTime);
      console.log('Last time: '+lastTime);
      if((currentTime-lastTime) > 5000){
        console.log('change color of key');
        //const colorChange = $('#name');
        //colorChange.css('color','blue');
        delete data[key];
      }
      else if(key != null){
      keys = keys + key+'\n';
      }
    })
    console.log(keys);
    const user = $('#name');
    user.html(keys);
    console.log(data);
  })
},1000);

