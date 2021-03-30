function openForm() {
    document.getElementById("myForm1").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm1").style.display = "none";
  }



/* Book appointment functions*/
function doctorOne(){
  if(window.confirm("Confirmation: Booking an appointment at 8am-10am")){
      document.getElementById("confirm").innerHTML= "Congrats, your appointment with Dr. Szava-Kovats is booked at 8am-10am. You will be receiving an email with the meet link shortly";
  }
}
function doctorTwo(){
  if(window.confirm("Confirmation: Booking an appointment at 10am-12pm")){
    document.getElementById("confirm").innerHTML= "Congrats, your appointment with Dr. Fauci is booked at 10am-12pm. You will be receiving an email with the meet link shortly";
 
  }
}
function doctorThree(){
  if(window.confirm("Confirmation: Booking an appointment at 2pm-4pm")){
    document.getElementById("confirm").innerHTML= "Congrats, your appointment with Dr. Chu is booked at 2pm-4pm. You will be receiving an email with the meet link shortly";
 
  }
}
function doctorFour(){
  if(window.confirm("Confirmation: Booking an appointment at 4pm-6pm")){
    document.getElementById("confirm").innerHTML= "Congrats, your appointment with Dr. Larson is booked at 4pm-6pm. You will be receiving an email with the meet link shortly";
 
  }
}
