// Sample product data. Replace this with your actual product data.
const products = [
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
        const whatsappUrl = `https://wa.me/919199322688/?text=Hello%20bro!`;
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
