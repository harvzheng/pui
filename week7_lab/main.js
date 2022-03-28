function Panda(name, age) {
  this.name = name;
  this.age = age;
  this.index = 0;
  this.image_alt = "an icon of a panda";
  this.image = "images/panda.svg";
}
function Goose(name, age) {
  this.name = name;
  this.age = age;
  this.index = 1;
  this.image_alt = "an icon of a goose";
  this.image = "images/goose.svg";
}
function Hamster(name, age) {
  this.name = name;
  this.age = age;
  this.index = 2;
  this.image_alt = "an icon of a hamster";
  this.image = "images/hamster.svg";
}

animal = [new Panda("Po", 6), new Goose("Chucky", 4), new Hamster("Buster", 2)]
cur_animal = null
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

function saveAnimal() {
  if (localStorage.getItem("savedAnimal") == null) {
    localStorage.setItem("savedAnimal", JSON.stringify(cur_animal))
    var saved = document.getElementById("saved")
    saved.innerHTML = "animal saved!"
    var save = document.getElementById("save")
    save.innerHTML = "Clear Animal"
  } else {
    localStorage.removeItem("savedAnimal")
    var saved = document.getElementById("saved")
    saved.innerHTML = "animal not saved"
    var save = document.getElementById("save")
    save.innerHTML = "Save Animal"
  }
}

function loadNewAnimal() {
  cur_animal = generateRandomAnimal()
  if(localStorage.getItem("savedAnimal") != null) {
    cur_animal = JSON.parse(localStorage.getItem("savedAnimal"))
    var saved = document.getElementById("saved")
    saved.innerHTML = "animal saved!"
    var save = document.getElementById("save")
    save.innerHTML = "Clear Animal"
  } 
  var text = document.getElementById("animal_text")
  var title = document.getElementById("animal_name")
  var img = document.getElementById("animal_image")
  img.setAttribute("src", cur_animal.image)
  img.setAttribute("alt", cur_animal.image_alt)
  title.innerHTML = cur_animal.name + " the " + animal[cur_animal.index].constructor.name
  if (cur_animal.age === 1) {
    text.innerHTML = cur_animal.age + " year old "
  } else {
    text.innerHTML = cur_animal.age + " years old "
  }
}