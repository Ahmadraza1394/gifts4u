// Both new arrival and products adding to cart are handling from here

document.addEventListener("DOMContentLoaded", () => {
  const addToCartIcons = document.querySelectorAll(".box .lowerContent a");

  addToCartIcons.forEach((icon) => {
    icon.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default link action

      const productBox = icon.closest(".box");
      const productName = productBox.querySelector("h3").textContent;
      const productPrice = productBox.querySelector(".price").textContent;
      const productImageSrc = productBox.querySelector(".image img").src;

      const cartItem = {
        name: productName,
        price: productPrice,
        image: productImageSrc,
      };

      addItemToCart(cartItem);
      updateCartDisplay();
    });
  });

  function addItemToCart(item) {
    let cart = getCart();
    const existingItem = cart.find((cartItem) => cartItem.name === item.name);
    if (existingItem) {
      existingItem.quantity++;
      existingItem.productPrice = existingItem.quantity * existingItem.price;
    } else {
      item.quantity = 1;
      item.totalPrice = item.price;
      cart.push(item);
    }

    saveCart(cart);
  }

  function getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function deleteItemFromCart(index) {
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
  }

  function updateCartDisplay() {
    const cartContainer = document.getElementById("cartContainer");
    const cartContent = cartContainer.querySelector(".cartContent");
    const cartItems = JSON.parse(localStorage.getItem("cart"));

    // Clear the default cart empty message and image
    cartContent.innerHTML = "";

    // Iterate over the items in the cart and add them to the cart container
    cartItems.forEach((item) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                <p>${item.name} - ${item.price}</p>
            `;
      cartContent.appendChild(cartItemElement);
    });
  }
});
