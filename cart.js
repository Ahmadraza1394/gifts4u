document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cartContent");

  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Update cart display
  const updateCartDisplay = () => {
    cartContainer.innerHTML = "";

    if (cartItems.length === 0) {
      cartContainer.innerHTML = `
          <img src="pic/empty-cart.png" class="emptyCart">
          <h3>Your Cart is Empty</h3>  
          <a href="products.html" class="button">Shop now</a>
        `;
    } else {
      cartItems.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
     
       <img src="${item.image}" alt="${item.name}" width="50" height="50">
       <p>${item.name} - ${item.price}  </p>
       <p>   Quantity: ${item.quantity} </p>
       <button class="delete-btn" data-index="${cartItems.indexOf(
         item
       )}">❌</button>
      
          `;
        cartContainer.appendChild(cartItem);
      });
    }
  };

  // Initial display update
  updateCartDisplay();

  // Empty the Cart
  const btnempty = document.getElementById("btnempty");
  btnempty.addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  // Empty the Cart on checkout
  const checkout = document.getElementById("checkout");
  checkout.addEventListener("click", () => {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  // Delete item
  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.dataset.index;
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      updateCartDisplay();
    }
  });
  // Increment the Cart Item
});
