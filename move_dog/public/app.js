$('#up').click(()=>{
  const number = 100; 
  $.ajax({
    type: 'POST',
    url: '/up',
    contentType: 'application/json',
    data: JSON.stringify({
      up: number
    }),
    success: (data) =>{
      console.log('Success '+data); 
      //const up = $('#image');
      //up.css('margin-top', `${data}px`);
    }
})
})

//added interval for top-margin
const readText = () =>{
  $.get('/book.txt',(data)=>{
    const up = $('#image');
    console.log(data);
    up.css('margin-top', `${data}px`);
  })
}

window.setInterval(readText,1000);

/*
$('#down').click(()=>{
 const number = 100; 
  $.ajax({
    type: 'POST',
    url: '/down',
    contentType: 'application/json',
    data: JSON.stringify({
      down: number
    }),
    success: (data) =>{
      console.log(data);
    }
})
})

$('#right').click(()=>{
 const number = 100; 
  $.ajax({
    type: 'POST',
    url: '/right',
    contentType: 'application/json',
    data: JSON.stringify({
      right: number
    }),
    success: (data) =>{
      console.log(data);
    }
})
})

$('#left').click(()=>{
 const number = 100; 
  $.ajax({
    type: 'POST',
    url: '/left',
    contentType: 'application/json',
    data: JSON.stringify({
      left: number
    }),
    success: (data) =>{
      console.log(data);
    }
})
})

*/
