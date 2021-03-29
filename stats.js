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
var uName, height, weight, tDate

function dataPrep(){
    uName = document.getElementById('username').value;
    height = document.getElementById('height').value;
    weight = document.getElementById('weight').value;
    tDate = document.getElementById('date').value;
    todDate = tDate.replaceAll('/', '');
}


document.getElementById('insert').onclick = function(){
    dataPrep();

    //Create folder in FB
    firebase.database().ref('stat/'+uName+'/'+todDate).set({
        username: uName,
        height: height, 
        weight: weight, 
        date: todDate 
    });
  
}


document.getElementById('find').onclick = function(){
    dataPrep();

    var year = todDate.toString();
    
    

    firebase.database().ref('stat/'+uName+'/'+year).on('value', function(snapshot){
        
        const showDate = document.getElementById('dateVal');
        const showWeight = document.getElementById('weightVal');
        const showHeight = document.getElementById('heightVal');

        showDate.textContent = snapshot.val().date;
        showHeight.textContent = snapshot.val().height;
        showWeight.textContent = snapshot.val().weight;
        
    })
    
}


    

