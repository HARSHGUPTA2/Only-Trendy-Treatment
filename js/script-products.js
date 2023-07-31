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

let products = [
    {
        name: 'Adidas',
        size: 9,
        price: 2399,
        imageUrl: 'https://rukminim2.flixcart.com/image/832/832/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
    },
    {
        name: 'Goldmine',
        size: 8,
        price: 1999,
        imageUrl: 'https://rukminim2.flixcart.com/image/612/612/l1xwqkw0/shoe/3/p/q/8-zigzag-wh-8-brainer-white-original-imagdeamrbec6xgf.jpeg?q=70',
    },
    // Add more products here...
];

// Wrap the getData function in a Promise
function getData() {
    return new Promise((resolve, reject) => {
        firebase.database().ref("products").on('value', snapshot => {
            snapshot.forEach(childSnapshot => {

                childData = childSnapshot.val(); // fetching data stored in one of the nodes

                products.push({
                    name: childData.name,
                    price: childData.price,
                    size: childData.size,
                    imageUrl: childData.image,
                });
            });

            resolve(); // Resolve the Promise after data retrieval and processing is complete
        }, reject); // In case of any error, reject the Promise
    });
}

// Use the Promise to ensure getData completes before calling generateProductList
getData().then(() => {
    generateProductList();
});

// Function to generate the product list items
function generateProductList() {
    const productListContainer = document.querySelector('.container');
    productListContainer.innerHTML = '';
    products.forEach(product => {
        // Create the main div container for the product card
        const productItem = document.createElement('div');
        productItem.classList.add('item-card');

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
        const whatsappUrl = `https://wa.me/919910877162/?text=${encodeURIComponent(`Hello! I want to order ${product.name} (Size: ${product.size}) for ₹${product.price}.`)}`;
        orderButton.onclick = function () {
            window.open(whatsappUrl, '_blank');
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