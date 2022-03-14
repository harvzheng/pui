function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "an icon of a panda";
  this.image = "images/panda.svg";
}
function Goose(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "an icon of a goose";
  this.image = "images/goose.svg";
}
function Hamster(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = "an icon of a hamster";
  this.image = "images/hamster.svg";
}

animal = [new Panda("Po", 6), new Goose("Chucky", 4), new Hamster("Buster", 2)]
animal_names = ["Joe", "Jackson", "Jarles", "Jamie", "Julian", "Jayden", "John"]

function generateRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex)
}

function generateRandomName() {
  return animal_names[generateRandomIndex(animal_names.length)]
}

function generateRandomAge(maxAge = 10) {
  floor = 1
  ceiling = maxAge
  return generateRandomIndex(maxAge - floor) + floor
}

function generateRandomAnimal(maxIndex) {
  random_animal = animal[generateRandomIndex(animal.length)]
  if (random_animal instanceof Panda) {
    return new Panda(generateRandomName(), generateRandomAge())
  } else if (random_animal instanceof Goose) {
    return new Goose(generateRandomName(), generateRandomAge())
    
  } else if (random_animal instanceof Hamster) {
    return new Hamster(generateRandomName(), generateRandomAge())
  }
}

function onLoad() {
  loadNewAnimal()
}

function loadNewAnimal() {
  var animal = generateRandomAnimal()
  var text = document.getElementById("animal_text")
  var title = document.getElementById("animal_name")
  var img = document.getElementById("animal_image")
  img.setAttribute("src", animal.image)
  img.setAttribute("alt", animal.image_alt)
  title.innerHTML = animal.name + " the " + animal.constructor.name
  if (animal.age === 1) {
    text.innerHTML = animal.age + " year old "
  } else {
    text.innerHTML = animal.age + " years old "
  }
}