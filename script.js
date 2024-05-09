
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  //import firebase from 'firebase/app';
//   import 'firebase/database'; // Make sure to import the database module


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCLIMZ_tiYJ98Tf2gwL2SQI3fv0kLVQG7Q",
    authDomain: "feedbackform-a60a1.firebaseapp.com",
    databaseURL: "https://feedbackform-a60a1-default-rtdb.firebaseio.com",
    projectId: "feedbackform-a60a1",
    storageBucket: "feedbackform-a60a1.appspot.com",
    messagingSenderId: "847495324728",
    appId: "1:847495324728:web:45c1d38bc92b57346672cd"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //regrence my database
  
  const feedbackformDB = firebase.database().ref('feedbackform')
  
  document.getElementById('feedbackform').addEventListener('submit', submitform)

  function submitform(e){
    e.preventDefault();

    var name = getElementVal('name');
    var phone = getElementVal('phone');
    var emailid = getElementVal('email');
    var satisfaction = getElementVal('satisfaction')
    var msg = getElementVal('feedback')
    
    savemsg(name,phone,emailid,satisfaction,msg);

    document.querySelector('.alert').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';

    }, 4000);
    document.getElementById('feedbackform').reset();
  }

const savemsg = (name, phone, emailid, satisfaction, msg) => {
  var newfeedbackfrom = feedbackformDB.push();

  newfeedbackfrom.set({
    name: name,
    phone: phone,
    email: emailid,
    satisfactionlevel: satisfaction,
    feedbackmessege: msg
  });
}
const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("feedback-form");

//     form.addEventListener("submit", function (e) {
//         e.preventDefault();

//         const name = document.getElementById("name").value;
//         const phone = document.getElementById("phone").value;
//         const email = document.getElementById("email").value;
//         const satisfaction = document.getElementById("satisfaction").value;
//         const feedback = document.getElementById("feedback").value;

        
//         console.log("Name: " + name);
//         console.log("Phone: " + phone);
//         console.log("Email: " + email);
//         console.log("Overall Satisfaction: " + satisfaction);
//         console.log("Specific Feedback: " + feedback);

        
//         alert("Successfully Submitted!");

        
//         form.reset();
//     });
// });
