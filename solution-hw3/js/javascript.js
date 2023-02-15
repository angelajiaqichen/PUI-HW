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

// Populate the options of drop-down fields with const objects
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