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
  firebase.initializeApp(firebaseConfig2);

//Prepare Data
var fName, lName, phone, dob, address, username, password, email, gender, height, weight, info

function dataPrep(){
    fName = document.getElementById('fName').value;
    lName = document.getElementById('lName').value;
    phone = document.getElementById('phone').value;
    dob = document.getElementById('dob').value;
    address = document.getElementById('address').value;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    gender = document.getElementById('gender').value;
    height = document.getElementById('height').value;
    weight = document.getElementById('weight').value;
    info = document.getElementById('textarea1').value;
}


//Submit button
document.getElementById('insert').onclick = function(){
    
    dataPrep();

    //Create folder in FB, email as primary key
    firebase.database().ref('id/'+username).set({
        first_name: fName,
        last_name: lName,
        phone: phone,
        date_birth: dob,
        address: address,
        username: username,
        password: password,
        email: email,
        gender: gender,
        height: height,
        weight: weight,
        medical_info: info
    });
  
}

