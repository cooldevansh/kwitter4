
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCzLN0HzuNeOw_ad1Kk8jRNM6a_UBuO7kA",
      authDomain: "classtest-a5abb.firebaseapp.com",
      databaseURL: "https://classtest-a5abb-default-rtdb.firebaseio.com",
      projectId: "classtest-a5abb",
      storageBucket: "classtest-a5abb.appspot.com",
      messagingSenderId: "54590184475",
      appId: "1:54590184475:web:31c8219a5cb3746c8becbe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function tele(){
      window.location="kwitter_page.html"; 
      room=document.getElementById("room_name").value;
      room_name=localStorage.setItem("room");
}

