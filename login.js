// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBv0-4WPF20J_qCUEdk3LzLvanU2tAEd2I",
    authDomain: "hthsstudentinfo.firebaseapp.com",
    databaseURL: "https://hthsstudentinfo.firebaseio.com",
    projectId: "hthsstudentinfo",
    storageBucket: "hthsstudentinfo.appspot.com",
    messagingSenderId: "277914498918",
    appId: "1:277914498918:web:e34709343f2683884c3aa7"
    };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

document.getElementById('select1').onclick = function(){

    uName = document.getElementById("username").value;
    passwd = document.getElementById("password").value;

    
    firebase.database().ref('id/'+uName).on('value', function(snapshot){
        temp_password = snapshot.val().password;
        if(passwd.localeCompare(temp_password) == 0){
            window.open("user.html");
        }
        else{
            window.open("info.html");
        }
    })
    //window.open("index.html")
    
}