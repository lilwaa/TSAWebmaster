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

var firebaseConfig2 = {
    apiKey: "AIzaSyBSk-jIkc7Xjk-K8TNKzhpRqakpMZ5prrs",
    authDomain: "wearablesensor-36b85.firebaseapp.com",
    databaseURL: "https://wearablesensor-36b85-default-rtdb.firebaseio.com",
    projectId: "wearablesensor-36b85",
    storageBucket: "wearablesensor-36b85.appspot.com",
    messagingSenderId: "1008471952867",
    appId: "1:1008471952867:web:229e59e9d14eab489024d6",
    measurementId: "G-6PH3P75TQ2"
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
            window.alert("User does not exist. If you are a new user, please register.")
        }
    })
    
}