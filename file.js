var firebaseConfig = {
    apiKey: "AIzaSyBv-XluD3Ba5tWl10yfjMJqXCZfyXivW6g",
    authDomain: "mycrud-5369e.firebaseapp.com",
    databaseURL: "https://mycrud-5369e-default-rtdb.firebaseio.com",
    projectId: "mycrud-5369e",
    storageBucket: "mycrud-5369e.appspot.com",
    messagingSenderId: "727341125909",
    appId: "1:727341125909:web:06bd30ee2423fb72a2191c"
  };
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);



function upload(){

//Getting select image
var ourFile = document.getElementById('document').files[0];

//Getting image name

var DocumentName = ourFile.name;

//firebase storage refernce /path where image will be stored

var storageRef = firebase.storage().ref('images/' +DocumentName);

//uploading image

var uploadTask = storageRef.put(ourFile);
uploadTask.on('state_changed',function(snapshot){

//observe state change events lie progress,resume etc

//get task progress by including number of bytes uploaded

//number of bytes code
var progress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;

var progressText = document.getElementById('UploadProgress').innerHTML = 'upload is '+progress+"% done";
//console.log('upload is '+progress+"done");
},function (error){

    console.log(error.message);
},function(){
 //handling successful upload
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                console.log(downloadURL);
        });

    });
}