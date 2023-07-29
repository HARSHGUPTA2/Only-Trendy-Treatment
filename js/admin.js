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