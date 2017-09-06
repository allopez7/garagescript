$('#submit').click(()=>{
  const name = $('#name').val();
  const comment = $('#comment').val();

  $.ajax({
    type: 'POST',
    url: '/send',
    contentType: 'application/json',
    data: JSON.stringify({
      name: name,
      comment: comment
    }),
    success: (data)=>{
      console.log('Success Text: ', data);
    }
  });

});

//Display text on browser
const getTextFile = () =>{
  $.get('/book.txt',(data) =>{
    const display = $('#browserViewText');     
    display.html(data);
    }
  );
}

window.setInterval(getTextFile, 1000);

//video 
const video = $('#video')[0];


navigator.mediaDevices.getUserMedia({video: true, audio: false}).then((stream)=>{
  video.srcObject = stream;
  video.play();
});

//Take pictures 
$('#picture').click(()=>{
  const name = $('#name').val();
  const comment = $('#comment').val();
  const canvas = $('#canvas')[0];
  const context = canvas.getContext('2d');
  context.drawImage(video,0,0);
  const dataURL = canvas.toDataURL('image/png');

  $.ajax({
    type: 'POST',
    url: '/image',
    contentType: 'application/json',
    data: JSON.stringify({
      Canvas: dataURL,
      name: name,
      comment: comment
    }),
    success: (data)=>{
      console.log('Success Image Taken',data)
    }
  });
});

// request array and display base64 image 
const getMeme = () =>{
  $.get('/memes', (data) =>{

      let sum = '';
      data.forEach((meme)=>{
        $.ajax({
          type: 'POST',
          url: '/base64ImageData',
          contentType: 'application/json',
          data: JSON.stringify({
            data: meme
          }),
          success: (data)=>{
            const displayMeme = $('#meme');
            sum = sum + `<img src=${data}>`;
            displayMeme.html(sum);
            console.log('Success Converted Image displayed',data);
          }
        })
      });
      
  })
}

window.setInterval(getMeme, 1000);
