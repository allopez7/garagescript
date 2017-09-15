$('#button').click(()=>{
  const ticketCost = $('#tickets').val();
  $.ajax({
    type: 'POST',
    url: '/ticket',
    contentType: 'application/json',
    data: JSON.stringify({
      tickets: ticketCost 
    }),
    success: (data)=>{
      console.log('success: ',data);
    }
  })

})

const getTextFile = () =>{
  $.get('/book1.txt', (data)=>{
    console.log(data);
    const display = $('#text');    
    display.html(data);
  })
}

window.setInterval(getTextFile,1000);
