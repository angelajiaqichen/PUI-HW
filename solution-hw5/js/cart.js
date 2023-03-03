class Roll {
  constructor(rollType, rollGlazing, packSize, rollPrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = rollPrice;

      this.element = null; 
  }
}

// create empty cart
const cart  = new Set(); 

// calculate total price in cart                               
function calculateCartTotal(roll){
  const glazing = roll.glazing;  
  const packSize = roll.size; 
  let glazingAdd = 0; 
  let packSizeMult = 0; 
  // get roll type
  if (glazing == 'Keep original'){
    glazingAdd = 0; 
  }
  else if (glazing == 'Sugar milk'){
    glazingAdd = 0; 
  }
  else if (glazing == 'Vanilla milk'){
    glazingAdd = 0.5; 
  }
  else if (glazing == 'Double chocolate'){
    glazingAdd = 1.5; 
  }
  // get pack size
  if (packSize == 1){
    packSizeMult = 1; 
  }
  else if (packSize == 3){
    packSizeMult = 3; 
  }
  else if (packSize == 6){
    packSizeMult = 5; 
  }
  else if (packSize == 12){
    packSizeMult = 10; 
  }
  return ((roll.basePrice + glazingAdd) * packSizeMult).toFixed(2); 
}


// make four new Roll objects and add them to cart
function addRollToCart(rollType, rollGlazing, packSize, rollPrice){
  const roll = new Roll(rollType, rollGlazing, packSize, rollPrice); 
  cart.add(roll); 
  return roll; 
}

const rollA = addRollToCart("Original", "Sugar milk", 1, 2.49); 
const rollB = addRollToCart("Walnut", "Vanilla milk", 12, 3.49); 
const rollC = addRollToCart("Raisin", "Sugar milk", 3, 2.99); 
const rollD = addRollToCart("Apple", "Keep original", 3, 3.49);

let cartCurrTotal = 0; 

for (const roll of cart){
  createElement(roll); 
}

// works with remove
function deleteRoll(roll){
  roll.element.remove(); 
  cart.delete(roll); 
  console.log("deleted roll")
}

//takes a Roll instance as an argument, and appends the appropriate DOM elements to the shopping cart page

function createElement(roll){
  const template = document.querySelector('#carttemplate')
  const clone = template.content.cloneNode(true); 
  roll.element = clone.querySelector('.cartitem');
  updateElement(roll); 

  // remove item from cart
  const removeButton = roll.element.querySelector('.remove'); 
  removeButton.addEventListener('click', () => {
    // cannot delete if cart is already empty
    console.log(cart.length)
    if(cart.size > 0){
      deleteRoll(roll);
      cartCurrTotal -= parseFloat(calculateCartTotal(roll)); 
      const cartTotalPrice = document.querySelector('.carttotal'); 
      cartTotalPrice.innerText = '$ ' + cartCurrTotal.toFixed(2);
    }
  });
 
  const rollListElement = document.querySelector('.cartitems'); 
  rollListElement.append(roll.element)
  cartCurrTotal += parseFloat(calculateCartTotal(roll)); 
  const cartTotalPrice = document.querySelector('.carttotal'); 
  cartTotalPrice.innerText = '$ ' + parseFloat(cartCurrTotal.toFixed(2)); 
  // parsefloat prevents empty cart from displaying "$ -0.00" as total
}

// update roll information
function updateElement(roll){
  const rollImageElement = roll.element.querySelector('.cartimage'); 
  rollImageElement.src = './products/' + roll.type.toLowerCase() + '-cinnamon-roll.jpg'; 
  const rollTypeElement = roll.element.querySelector('#type'); 
  rollTypeElement.innerText = roll.type + ' Cinnamon Roll'; 
  const rollGlazingElement = roll.element.querySelector('#glazing'); 
  rollGlazingElement.innerText = 'Glazing: ' + roll.glazing; 
  const rollPackSizeElement = roll.element.querySelector('#pack-size');
  rollPackSizeElement.innerText = 'Pack Size: ' + roll.size; 
  const itemPrice = roll.element.querySelector('.cartproductprice'); 
  itemPrice.innerText = '$ ' + calculateCartTotal(roll); 
}
