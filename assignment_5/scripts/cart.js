cart = []
function handleLoad() {
  cart = JSON.parse(localStorage.getItem("cart"))
  loadCartHTML()
}

function deleteItem(i) {
  cart.splice(i, 1)
  updateCart()
  loadCartHTML()
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart))
}

function updateCartCounter() {
  let cart_count = document.querySelector("#cart-number")
  let current_count = 0
  for (let i = 0; i < cart.length; i++) {
    current_count += cart[i].num_bottles
  }
  if (current_count> 0) {
    cart_count.innerHTML = current_count
    cart_count.classList.remove('cart-empty')
  } else {
    cart_count.classList.add('cart-empty')
  }
}

function loadCartHTML() {
  let container = document.querySelector("#cart-container")
  updateCartCounter()
  container.innerHTML = ""
  let i = 0
  let price = 0
  for (const item of cart) {
    var newItem = document.createElement("div")
    let hr = document.createElement("hr")
    newItem.id = "item_" + i
    price += item.unit_price * item.num_bottles
    newItem.innerHTML = `
      <div class="flex-row">
        <img src="${item.image_url}" class="cart-thumbnail"/>
        <div class="flex-column">
          <h1 class="semi-bold">GREEN FUEL</h1>
          <p>Flavor: ${item.flavor.charAt(0).toUpperCase() + item.flavor.slice(1)}</p>
        </div>
      </div>
      <div class="item-pricing flex-column space-between">
        <div>
          <p>
          <input type="text" id="bottles" label="bottles" maxlength="3" value="${item.num_bottles}">
            bottles/month
          </p>
          <p>$${item.unit_price}/bottle</p>
          <p class="bold">Total: $${item.unit_price * item.num_bottles}/month</p>
        </div>
        <button type="button" id="delete_${i}" onclick=deleteItem(${i})>Delete</button>
      </div>
    `
    newItem.classList.add("flex-row", "space-between", "margin-vertical-15")
    container.appendChild(newItem)
    container.appendChild(hr)
    i ++
  }
  document.querySelector("#subtotal").innerHTML = "Subtotal: $" + price.toFixed(2)
  document.querySelector("#tax").innerHTML = "Tax: $" + (price*0.05).toFixed(2)
  document.querySelector("#total").innerHTML = "Total: $" + (price*1.05).toFixed(2)
}