// Step 1: Create an inventory array
let inventory = [];

// Step 2: Create store items
let item1 = {
  name: 'Laptop',
  model: 'XPS 13',
  cost: 1200,
  quantity: 5
};

let item2 = {
  name: 'Smartphone',
  model: 'iPhone 12',
  cost: 1000,
  quantity: 10
};

let item3 = {
  name: 'Tablet',
  model: 'iPad Pro',
  cost: 800,
  quantity: 7
};

// Step 3: Add items to the inventory array
inventory.push(item1, item2, item3);

// Step 4: Log the inventory array to the console
console.log('Initial Inventory:');
console.log(inventory);

// Step 5: Access and log quantity of the third item
console.log('Quantity of the third item:');
console.log(inventory[2].quantity);

// Step 6: Event handling for logging inventory on button click
const logInventoryBtn = document.getElementById('logInventoryBtn');
logInventoryBtn.addEventListener('click', function() {
  console.log('Inventory logged from button click:');
  console.log(inventory);
});
