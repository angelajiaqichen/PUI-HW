const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};



// HW 6
// When the page loads, attempt to retrieve the cart from the local storage. 

let cart = new Array();

function retrieveCart() {
    if (localStorage.getItem('storedCart') != null) {
        const cartStored = localStorage.getItem('storedCart');
        cart = JSON.parse(cartStored);
    } 
    else { // If no cart exists in the storage, create an empty cart array.
        cart = new Array();
    }
}

// Convert the updated cart to JSON, save it in the local storage, 
// and print the current contents of the cart in local storage after saving.

function saveCart() {
    const cartStored = JSON.stringify(cart);
    localStorage.setItem('storedCart', cartStored);
}