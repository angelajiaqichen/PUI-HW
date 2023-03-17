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
// If no cart exists in the storage, create an empty cart array.

let cart = new Array();

function retrieveFromLocalStorage() {

    if (localStorage.getItem('storedCart') != null) {

        // get cart string from local storage

         const cartString = localStorage.getItem('storedCart');

        // turn cart string back into Javascript cart array

        cart = JSON.parse(cartString);

    } else {

        cart = new Array();

    }

}

// Convert the updated cart to JSON, save it in the local storage, 
// and print the current contents of the cart in local storage after saving.

function saveToLocalStorage() {

    // convert cart array into string of text

    const cartString = JSON.stringify(cart);

    // save cart string to local storage

    localStorage.setItem('storedCart', cartString);
}