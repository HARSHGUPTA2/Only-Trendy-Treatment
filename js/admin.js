var firebaseConfig = {
   apiKey: "AIzaSyCIWXi9GrS6byc_eBEee9QeAZjcuJf1Hxs",
   authDomain: "shop-st.firebaseapp.com",
   databaseURL: "https://shop-st-default-rtdb.firebaseio.com",
   projectId: "shop-st",
   storageBucket: "shop-st.appspot.com",
   messagingSenderId: "630265001609",
   appId: "1:630265001609:web:921d37e6923ca4b8edf858",
   measurementId: "G-CBW6C7G22J"
};
firebase.initializeApp(firebaseConfig);
p_name = "";
function send() {
   p_img = document.getElementById("inputProductImageLink").value;
   p_price = document.getElementById("inputProductPrice").value;
   p_name = document.getElementById("inputProductName").value;
   p_size = document.getElementById("inputProductsize").value;
   firebase.database().ref('products').push({
      name: p_name,
      price: p_price,
      image: p_img,
      size: p_size
   }); 
   alert("Data sent!");
}

function getData() {
   firebase.database().ref("products").on('value', function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
         childKey = childSnapshot.key;
         childData = childSnapshot.val();
         if (childKey != "purpose") {
            firebase_message_id = childKey;
            message_data = childData;
            //Start code
            name1 = message_data['p_name'];
            price = message_data['p_price'];
            img = message_data['p_img'];
            size = message_data['p_size'];

            //write html code in following veriable
            name_with_tag = "";
            like_button = "";
            span_with_tag = "";
            message_with_tag = "";
            //till here
            row = name_with_tag + message_with_tag + like_button + span_with_tag;
            document.getElementById("output").innerHTML += row;
            //document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+row;
            //End code
         }
      });
   });
}
getData();