// Sample Products Data
const products = [
    { id: 1, name: "Laptop", price: 899.99 },
    { id: 2, name: "Smartphone", price: 499.99 },
    { id: 3, name: "Headphones", price: 29.99 },
    { id: 4, name: "Camera", price: 299.99 }
  ];
  
  // Cart data
  let cart = [];
  
  // Load products on page load
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts();
    updateCartCount();
  });
  
  // Function to display products
  function displayProducts() {
    const productList = document.querySelector(".product-list");
    productList.innerHTML = ""; // Clear existing products
  
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
  
      productList.appendChild(productCard);
    });
  }
  
  // Function to add a product to the cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(p => p.id === productId);
  
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    updateCartCount();
    updateCart();
  }
  
  // Function to update the cart count
  function updateCartCount() {
    const cartCount = document.getElementById("cart-count");
    const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
    cartCount.textContent = totalItems;
  }
  
  // Function to update cart details
  function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
  
    cartItems.innerHTML = ""; // Clear cart
  
    let totalCost = 0;
  
    cart.forEach(product => {
      totalCost += product.price * product.quantity;
  
      const cartItem = document.createElement("div");
  
      cartItem.innerHTML = `
        <p>${product.name} x${product.quantity} - $${(product.price * product.quantity).toFixed(2)}</p>
        <button onclick="removeFromCart(${product.id})">Remove</button>
        <button onclick="changeQuantity(${product.id}, 1)">+</button>
        <button onclick="changeQuantity(${product.id}, -1)">-</button>
      `;
  
      cartItems.appendChild(cartItem);
    });
  
    cartTotal.textContent = `Total: $${totalCost.toFixed(2)}`;
  }
  
  // Function to change the quantity of items in the cart
  function changeQuantity(productId, delta) {
    const product = cart.find(p => p.id === productId);
    product.quantity += delta;
  
    if (product.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCart();
      updateCartCount();
    }
  }
  
  // Function to remove a product from the cart
  function removeFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    updateCart();
    updateCartCount();
  }
  
  // Function to toggle the cart visibility
  function toggleCart() {
    const cartSection = document.getElementById("cart");
    cartSection.classList.toggle("hidden");
  }
  
  // Checkout function (just a placeholder)
  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thank you for your purchase!");
      cart = []; // Clear the cart
      updateCart();
      updateCartCount();
      toggleCart();
    }
  }
  