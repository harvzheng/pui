var subscription = true
var num_bottles = 1
var total = 0
var price = 4
var flavor_index = 0
var flavor = "green apple"
const flavors = ["green apple", "strawberry", "pink lemonade", "glacier"]
const flavor_images = ["assets/product-green.png", "assets/green-red.jpg", "assets/green-pink.webp", "assets/green-blue.jpg"]
var cart = []

function Order(flavor, subscription, num_bottles, unit_price, image_url) {
  this.flavor = flavor
  this.subscription = subscription
  this.num_bottles = num_bottles
  this.unit_price = unit_price
  this.image_url = image_url
}

function handleFlavor(i) {
  flavor_index = i
  flavor = flavors[i]
  product_image = document.querySelector(".product-image")
  product_image.src = flavor_images[i]
}

function handleSubscription() {
  subscription = document.querySelector("#subscription").checked
  updateSubscription()
}
function handleBottles() {
  num_bottles = parseInt(document.querySelector("#bottles").value)
  updateBottles()
}
function updateSubscription () {
  let sub_bottles = document.querySelector("#sub-bottles")
  let sub_price = document.querySelector("#sub-price")
  if (!subscription) {
    sub_bottles.classList.add('not-visible')
    sub_price.classList.add('not-visible')
  } else {
    sub_bottles.classList.remove('not-visible')
    sub_price.classList.remove('not-visible')
  }
}

function updateBottles() {
  let sub_price = document.querySelector("#total-price")
  sub_price.innerHTML = "$" + price*num_bottles
}

function addToCart() {
  order = new Order(flavor, subscription, num_bottles, price, flavor_images[flavor_index])
  updateCart(order)
}

function updateCart(order) {
  let cart_count = document.querySelector("#cart-number")
  let current_count = parseInt(cart_count.innerHTML)
  if (current_count + order.num_bottles > 0) {
    cart.push(order)
    localStorage.setItem("cart", JSON.stringify(cart))
    cart_count.innerHTML = current_count + order.num_bottles
    cart_count.classList.remove('cart-empty')
  } else {
    cart_count.classList.add('cart-empty')
  }
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
/* used from https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload */
window.onload = function() {
  cart = JSON.parse(localStorage.getItem("cart"))
  updateCartCounter()
}