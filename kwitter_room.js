
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC46oomKzULUi3OEQGt_LwWPuQZAEFD4Gs",
      authDomain: "kwitter-f4379.firebaseapp.com",
      databaseURL: "https://kwitter-f4379-default-rtdb.firebaseio.com",
      projectId: "kwitter-f4379",
      storageBucket: "kwitter-f4379.appspot.com",
      messagingSenderId: "404434423907",
      appId: "1:404434423907:web:bee09547a1e968b9002856"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome, " + user_name

function add_room(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding new room"
      })
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name -"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='rederect(this.id)' >"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
//innerHTML= what we write into the div tag
function rederect(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
      image.png
}
// she say hola como estas she say konnichiwa she say pardon my french i say bonjour madame then she say
