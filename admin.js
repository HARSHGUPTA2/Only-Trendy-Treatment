var firebaseConfig = {
    apiKey: "AIzaSyCIWXi9GrS6byc_eBEee9QeAZjcuJf1Hxs",
  authDomain: "shop-st.firebaseapp.com",
  databaseURL: "https://shop-st-default-rtdb.firebaseio.com",
  projectId: "shop-st",
  storageBucket: "shop-st.appspot.com",
  messagingSenderId: "630265001609",
  appId: "1:630265001609:web:921d37e6923ca4b8edf858",
  measurementId: "G-CBW6C7G22J"};

  firebase.initializeApp(firebaseConfig);
  
     function send(){
        msg=document.getElementById("inputProductImageLink").value;
        user_name =document.getElementById("inputProductPrice").value; 
        room_name =document.getElementById("inputProductName").value;
        firebase.database().ref(room_name).push({ name:user_name, message:msg , product:room_name });
              alert("data");
       }

       
       
