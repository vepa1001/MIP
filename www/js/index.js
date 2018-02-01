

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady(){

    document.getElementById('captureBtn').addEventListener('click',takePic);
    

    function takePic(){
        navigator.camera.getPicture(cameraSuccess, cameraError, {

            quality: 50,
            sourceType : Camera.PictureSourceType.CAMERA,
            destinationType : Camera.DestinationType.FILE_URI

        });
    }
    
    function cameraSuccess(imageData){
            var img = document.getElementById('myImage');
            img.src ="data:image/jpeg;base64"+imageData;
            
    }

    function cameraError(message) {
            alert('Error: ' + message);

    }

}


 
 //all code from https://www.npmjs.com/package/cordova-plugin-camera