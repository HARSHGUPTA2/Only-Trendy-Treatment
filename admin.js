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

let adminCreateProduct = async (id, name, img, price, passowrd) => {
    if(passowrd !== '1234') return;
    try {
        await firebase.initializeApp(firebaseConfig);
    } catch (error) {
        console.error("Firebase initialization error:", error);
    }

    if (firebase.apps.length === 0) {
        console.error("Firebase was not initialized properly.");
    } else {

        var database = await firebase.database();


        var dataToSend = {
            name: name,
            img: img,
            price: price,
        };


        var path = `product${id}`;

        function send() {
            database.ref(path).set(dataToSend)
                .then(function () {
                    console.log("Data sent successfully!");
                })
                .catch(function (error) {
                    console.error("Error sending data:", error);
                });
        }
    }
}