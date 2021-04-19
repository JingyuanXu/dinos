
// Create Dino Constructor

function DinoConstructor(
  species,
  weight,
  height,
  diet,
  where,
  when,
  fact,
  imagePath
) {
  this.species = species;
  this.weight = weight;
  this.height = height, 
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
  this.imagePath = imagePath;
}

// Create Dino Objects
// Generate Tiles for each Dino in Array
 function dinoObj(dinosJson) {
  let newDinoArray = [];
  dinosJson.forEach((x) => {
    switch (x.species) {
      case "Triceratops":
      x.imagePath = `triceratops.png`;
      break;
      case "Tyrannosaurus Rex":
      x.imagePath = `tyrannosaurus rex.png`;
      break;
      case "Anklyosaurus":
      x.imagePath = `anklyosaurus.png`;
      break;
      case "Brachiosaurus":
      x.imagePath = `brachiosaurus.png`;
      break;
      case "Stegosaurus":
      x.imagePath = `stegosaurus.png`;
      break;
      case "Elasmosaurus":
      x.imagePath = `elasmosaurus.png`;
      break;
      case "Pteranodon":
      x.imagePath = `pteranodon.png`;
      break;
      case "Pigeon":
        x.imagePath = `pigeon.png`;
        break;
      default:
        x.imagePath = ``;
  }
      newDino = new DinoConstructor(
          x.species,
          x.weight,
          x.height,
          x.diet,
          x.where,
          x.when,
          x.fact,
          x.imagePath
      )
      console.log(newDino)
      newDinoArray.push(newDino);
  });
  return newDinoArray;
}
const dinoArray = dinoObj(dinosJson.Dinos)
// Create Human Object
// Use IIFE to get human data from form
function humanObj() {
  let human = {
    name:document.getElementById("name").value,
    weight: document.getElementById("weight").value,
    diet: document.getElementById("diet").value,
    height: parseInt(document.getElementById("feet").value) * 12 + parseInt(document.getElementById("inches").value),
    imagePath: `human.png`
  }
  return human;
}
const humanData = humanObj();
// Create Dino Compare Method 1
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareWeight(dinos) {
  if (parseInt(dinos.weight) > parseInt(humanData.weight)) {
      return `${dinos.species} is heavier than you`;
  } else {
      return `${dinos.species} is ligher than you`;
  }
}

// Create Dino Compare Method 2
// NOTE: Weight in JSON file is in lbs, height in inches.
function compareHeight(dinos) {
  if (parseInt(dinos.height) > parseInt(humanData.height)) {
    return `${dinos.species} is higher than you`;
    } else {
    return `${dinos.species} is lower than you`;
  }
}
// Create Dino Compare Method 3
// NOTE: Weight in JSON file is in lbs, height in inches.

function compareDiet(dinos) {
  if (dinos.diet == humanData.diet) {
    return `You and ${dinos.species} has same diet`;
    } else {
    return `You and ${dinos.species} has different diet`;
  }

}


// Add tiles to DOM
function addDinoTile(dino) {
  const tile = document.createElement('div');
  tile.classList.add('grid-item');
  tile.innerHTML = `
  <h3>${dino.species}</h3>
  <img src="images/${dino.imagePath}">
  `;
  if (dino.species !== "Pigeon") {
      tile.innerHTML += `<p>${dino.when}, in ${dino.where}, ${dino.fact} Compare with you: ${compareDiet(dino)}, ${compareHeight(dino)},${compareWeight(dino)}</p>`;
  } else if (dino.species === "Pigeon") {
      tile.innerHTML += `<p>${dino.fact}</p>`;
  }
  return tile;
}

function addHumanTile(humanData) {
  const tile = document.createElement('div');
  tile.classList.add('grid-item');
  tile.innerHTML = `
  <h3>${humanData.name}</h3>
  <img src="images/${humanData.imagePath}">
  `;
  return tile;
}

function addUI(){
  document.querySelector('form').style.display = 'none';
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < 9; i++) {
    if (i < 4) {
      fragment.appendChild(addDinoTile(dinoArray[i]));
    } else if (i == 4){
      fragment.appendChild(addHumanTile(humanData));
    }  else if (i > 4) {
      fragment.appendChild(addDinoTile(dinoArray[i-1]));
    } 
    document.getElementById('grid').appendChild(fragment);
  }
}


// Remove form from screen

// On button click, prepare and display infographic
function submit() {

  // const errorMessage = document.getElementById('error');
  // if (humanData.name === "" || humanData.height <= 0 || humanData.weight <= 0 ) {
  //     errorMessage.innerHTML = '<p>Your input is invaild</p>';
  //     return;
  // } 
  addUI();
}
