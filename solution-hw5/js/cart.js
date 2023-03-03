// HW 4

// had to copy this from rollsData.js for dropdown values to appear
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
  // get selected item 
  // URL
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const rollType = params.get("roll");
  
  
  // if (rollType !== null) { //TypeError: Cannot set properties of null (setting 'src')
  //   const rollImage = document.querySelector(".detailimage");
  //   rollImage.src = 'products/' + rollType + '-cinnamon-roll.jpg';
  //   const headerElement = document.querySelector(".title");
  //   headerElement.innerText = rollType +' Cinnamon Roll';
  //   const rollPrice = document.querySelector(".detailTotalPrice"); 
  //   const basePrice = rolls[rollType].basePrice; // get baseprice from rollsData
  //   rollPrice.innerText = "$ " + basePrice; // office hours - without this the price wouldnt update
  // }
  
  const rollImage = document.querySelector(".detailimage");
  rollImage.src = 'products/' + rollType.toLowerCase() + '-cinnamon-roll.jpg';
  console.log(rollType);
  
  const headerElement = document.querySelector(".title");
  headerElement.innerText = rollType +' Cinnamon Roll';
  // console.log(headerElement);
  
  const rollPrice = document.querySelector(".detailTotalPrice"); 
  const basePrice = rolls[rollType].basePrice; // get baseprice from rollsData
  rollPrice.innerText = "$ " + basePrice; // office hours - without this the price wouldnt update
  let cart = []; // init cart
  
  
  // HW 3
  // Add JavaScript objects to represent price adaptations based on user selections. 
  // They are listed below. You may hard-code these objects. 
  const glazingOptions = [
      {
        glazingOption: 'Keep original',
        priceAdaptation: 0,
      },
      {
        glazingOption: 'Sugar milk',
        priceAdaptation: 0,
      },
      {
        glazingOption: 'Vanilla milk',
        priceAdaptation: 0.5,
      },
      {
        glazingOption: 'Double chocolate',
        priceAdaptation: 1.5,
      },
  ];
  
  const packSizeOptions = [
      {
        packSizeOption: '1',
        priceAdaptation: 1,
      },
      {
        packSizeOption: '3',
        priceAdaptation: 3,
      },
      {
        packSizeOption: '6',
        priceAdaptation: 5,
      },
      {
        packSizeOption: '12',
        priceAdaptation: 10,
      },
  ];
  
  // Populate drop-down field options
  for (let i = 0; i < glazingOptions.length; i++){
      // create each option
      var option = document.createElement('option');
      option.text = glazingOptions[i].glazingOption; 
      option.value = glazingOptions[i].priceAdaptation; 
      const select = document.querySelector('#glazingDropdown'); 
      select.appendChild(option);
  }
  
  for (let i = 0; i < packSizeOptions.length; i++){
      var option = document.createElement('option');
      option.text = packSizeOptions[i].packSizeOption; 
      option.value = packSizeOptions[i].priceAdaptation; 
      const select = document.querySelector('#packDropdown'); 
      select.appendChild(option);
  }
  
  
  function glazingTrigger(element){
    const displayPrice = document.querySelector('.detailTotalPrice');
    const glazingChange = parseFloat(element.value); 
    const numPacks = document.querySelector('#packDropdown').value; 
    const currentPrice = (basePrice + glazingChange) * numPacks; 
    displayPrice.innerText = '$ ' + parseFloat(currentPrice).toFixed(2); //keeps two decimal places
    // https://www.w3schools.com/jsref/jsref_tofixed.asp
  }
    
  function packTrigger(element){
    const displayPrice = document.querySelector('.detailTotalPrice');
    const packChange = element.value; 
    const glazingPrice = document.querySelector('#glazingDropdown').value; 
    const currentPrice = (basePrice + parseFloat(glazingPrice)) * packChange; 
    displayPrice.innerText = '$ ' + parseFloat(currentPrice).toFixed(2); 
  }
  
  // HW 4
  
  class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
      this.type = rollType;
      this.glazing =  rollGlazing;
      this.size = packSize;
      this.basePrice = basePrice;
    }
  }
  
  // cart functionality
  
  function addToCartButton() {
    const newRoll = new Roll();
    newRoll.type = rollType;   
    var currGlazing = document.querySelector('#glazingDropdown'); 
    newRoll.glazing = currGlazing.options[currGlazing.selectedIndex].text; 
    var currSize = document.querySelector('#packDropdown'); 
    newRoll.size = currSize.options[currSize.selectedIndex].text; 
    newRoll.basePrice = basePrice; 
    cart.push(newRoll); 
  
    console.log(cart); 
  }
  
  let addToCart = document.querySelector("#detailbutton"); 
  addToCart.addEventListener('click', addToCartButton);
  
  