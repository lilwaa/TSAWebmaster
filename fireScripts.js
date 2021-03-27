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

//Prepare Data
var fName, lName, phone, dob, address, username, password, email, info

function dataPrep(){
    fName = document.getElementById('fName').value;
    lName = document.getElementById('lName').value;
    phone = document.getElementById('phone').value;
    dob = document.getElementById('dob').value;
    address = document.getElementById('address').value;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    email = document.getElementById('email').value;
    info = document.getElementById('textarea1').value;
}

//Submit button
document.getElementById('insert').onclick = function(){
    dataPrep();

    //Create folder in FB, email as primary key
    firebase.database().ref('id/'+ fName).set({
        first_name: fName,
        last_name: lName,
        phone: phone,
        date_birth: dob,
        address: address,
        username: username,
        password: password,
        email: email,
        medical_info: info
    });
  
}

