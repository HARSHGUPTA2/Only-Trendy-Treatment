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
 // Access the database
var database = firebase.database();

// Read data from a specific path
let products;
var ref = database.ref('/');
ref.once('value', function(snapshot) {
  var data = snapshot.val();
  // Use the retrieved data
  console.log(data);
  products = data
});

products = [
    {
        id: 1,
        name: 'Adidas',
        size: 9,
        price: 2399,
        imageUrl: 'images/shoes-img-1.jpg',
    },
    {
        id: 2,
        name: 'Goldmine',
        size: 8,
        price: 1999,
        imageUrl: 'images/shoes-img-1.jpg',
    },
    // Add more products here...
];

// Function to generate the product list items
function generateProductList() {
    const productListContainer = document.querySelector('.container');
    productListContainer.innerHTML = '';
    products.forEach(product => {
        // Create the main div container for the product card
        const productItem = document.createElement('div');
        productItem.classList.add('item-card');
        productItem.id = `product-${product.id}`;

        // Create the image element
        const imgElement = document.createElement('img');
        imgElement.src = product.imageUrl;
        imgElement.alt = product.name;

        // Create the div for product details (name, size, price)
        const productDetails = document.createElement('div');

        const h3Element = document.createElement('h3');
        h3Element.textContent = product.name;

        const pSize = document.createElement('p');
        pSize.innerHTML = `Size: <b>${product.size}</b>`;

        const h5Element = document.createElement('h5');
        h5Element.innerHTML = `<i class='bx bx-rupee'></i>${product.price}`;

        // Create the button for ordering on WhatsApp
        const orderButton = document.createElement('button');
        orderButton.classList.add('whatsappOrderButton');
        orderButton.textContent = 'ORDER ON WHATSAPP';

        // Add the click event to open WhatsApp with a custom message
        const whatsappUrl = `https://wa.me/919199322655/?text=Hello%20bro!`;
        orderButton.onclick = function () {
            window.location.href = whatsappUrl;
        };

        // Append the elements to build the structure
        productDetails.appendChild(h3Element);
        productDetails.appendChild(pSize);
        productDetails.appendChild(h5Element);

        productItem.appendChild(imgElement);
        productItem.appendChild(productDetails);
        productItem.appendChild(orderButton);

        productListContainer.appendChild(productItem);
    });
}

function sortByPrice() {
    products.sort((a, b) => a.price - b.price);
    generateProductList();
}

document.getElementById('sortByPriceButton').addEventListener('click', sortByPrice);

// Initial product list generation
generateProductList();
