const product = { name: "Laptop", price: 5000, brand: "Dell" };
const cart = ["Mouse", "Keyboard", "Monitor", "Webcam"];

//Destructure name and price from product in single line
const { name, price, brand } = product;
console.log(`Cost of ${name} is ${price}`);

// Rest operator - using 3 dots and is placed as last item of array or object.
const [firstItem, ...others] = cart;
console.log(`First Item of the Array: ${firstItem}`);
console.log(`Rest of the array items are: ${others}`);

// Spread operator - using 3 dots and is placed as first item of an array or object.
const newProduct = { ...product, price: 4500 };
const { name: name1, price: price1, brand: brand1 } = newProduct;
console.log(`Old Product Array: ${name}, ${price}, ${brand}`);
console.log(`New Product Array: ${name1}, ${price1}, ${brand1}`);
