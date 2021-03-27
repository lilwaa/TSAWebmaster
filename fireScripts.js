// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC-SKqjmvVNfPzRU_jY21q_imdEqTR91ho",
    authDomain: "user-195f3.firebaseapp.com",
    databaseURL: "https://user-195f3-default-rtdb.firebaseio.com",
    projectId: "user-195f3",
    storageBucket: "user-195f3.appspot.com",
    messagingSenderId: "935098523482",
    appId: "1:935098523482:web:1c6a71d77668e7233f5d63"
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
    firebase.database().ref('user/' + email).set({
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