// HW 4
// get selected item 
// let glazeElement = document.querySelector('#glazingDropdown'); 
// let packElement = document.querySelector('#packDropdown');

// URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

const rollImage = document.querySelector(".detailimage");
rollImage.src = 'products/' + rollType + '-cinnamon-roll.jpg';
// console.log(rollType);

const headerElement = document.querySelector(".title");
headerElement.innerText = rollType +' Cinnamon Roll';

const rollPrice = document.querySelector(".detailTotalPrice"); 
const basePrice = rolls[rollType].basePrice; // get baseprice from rollsData
rollPrice.innerText = "$ " + basePrice; 
let cart = []; // init cart

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
  const currentPrice = (2.49 + glazingChange) * numPacks; 
  displayPrice.innerText = '$ ' + parseFloat(currentPrice).toFixed(2); //keeps two decimal places
  // https://www.w3schools.com/jsref/jsref_tofixed.asp
}
  
function packTrigger(element){
  const displayPrice = document.querySelector('.detailTotalPrice');
  const packChange = element.value; 
  const glazingPrice = document.querySelector('#glazingDropdown').value; 
  const currentPrice = (2.49 + parseFloat(glazingPrice)) * packChange; 
  displayPrice.innerText = '$ ' + parseFloat(currentPrice).toFixed(2); 
}

// // HW 4

class Roll {
  constructor(rollType, rollGlazing, packSize, basePrice) {
    this.type = rollType;
    this.glazing =  rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

function onSelectValueChange() {
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

let addToCart = document.querySelector("#cartbutton"); 
addToCart.addEventListener('click', onSelectValueChange);

// function addToCart(){
//   const addRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
//   cart.push(addRoll);
//   console.log(cart);
//   displayTotal();
// }


// const addToCartButton = document.querySelector('#cartbutton .highlight');
// addToCartButton.onclick = addToCart;
// // console.log(addToCartButton)
