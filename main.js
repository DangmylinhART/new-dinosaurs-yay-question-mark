//////////create
const makeDino = function (species, period, carnivore, extinct) {
if (extinct === undefined ){         // set extinct as default
  extinct = false
}
  const dino = {}
  dino.species = species,
    dino.period = period,
    dino.carnivore = carnivore,
    dino.extinct = extinct
  return dino
}
let test = makeDino('Eoraptor', 'Triassic', true, false)
test;

let test2 = makeDino('Brachiosaurus', 'Jurassic', false, true)
test2



////////////////make singular
const makeSingular = function (dinosaur) {
  const newDinosaur = {}
  // find if dino has US
  let isContainUs = dinosaur.species.substr(-dinosaur.species.length).includes('us')
  if (isContainUs === true) {
    // if True --> delete 'US' slice(start, end)
    newDinosaur.species = dinosaur.species.slice(0,-2)
    newDinosaur.period = dinosaur.period,
      newDinosaur.carnivore = dinosaur.carnivore,
      newDinosaur.extinct = dinosaur.extinct
  } else {
    newDinosaur.species = dinosaur.species,
      newDinosaur.period = dinosaur.period,
      newDinosaur.carnivore = dinosaur.carnivore,
      newDinosaur.extinct = dinosaur.extinct
  }
  return newDinosaur
}

const dino = {
  species: 'Brachiosaurus',
  period: 'Jurassic',
  carnivore: false,
  extinct: true
};
const dino1 = {
  species: 'Eoraptor',
  period: 'Triassic',
  carnivore: true,
  extinct: false
}

const remove = makeSingular(dino)
remove

//////// teacher fix
const makeSingular2 = function (dinosaur) {
  if (dinosaur.species.endsWith('us')) {
    return makeDino(dinosaur.species.slice(0, -2), dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  } else {
    return dinosaur
  }
}
let test99 = makeSingular2(dino)
test99;

///////////////////trunCate
const truncateSpecies = function (animal) {
  //get length, if length > 7 --> cut.substr(start, end) + '...'
  if (animal.species.length > 7) {
    animal.species = animal.species.substr(0, 7) + '...'
  }
  return animal
}

const dino2 = {
  species: 'Brachiosaurus',
  period: 'Jurassic',
  carnivore: false,
  extinct: true
};
let test5 = truncateSpecies(dino2)
test5;


////////////////////make extinct
const makeExtinct = function (animal) {
  if (animal.species.length > 7) {
    animal.species = animal.species + '...'
  }
  animal.extinct = true
  return animal
}


const dino3 = {
  species: 'Brachiosaurus',
  period: 'Jurassic',
  carnivore: false,
  extinct: true
};

const dino4 = {
  species: 'T-Rex',
  period: 'Cretaceous',
  carnivore: true,
  extinct: true
};

let test6 = makeExtinct(dino4)
test6;

//////////////teacher fix
const makeExtinct2 = function (dinosaur) {
  return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, true)
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}