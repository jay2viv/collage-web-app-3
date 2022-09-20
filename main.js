Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#my_camera' );

 function Take_picture()
 {
     Webcam.snap( function(data_uri) {
         document.getElementById('result').innerHTML = 
          '<img id="image1" src="'+data_uri+'"/>';
     } );
 }