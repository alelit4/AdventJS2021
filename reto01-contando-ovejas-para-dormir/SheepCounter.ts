const sheepNameIncludes = (sheep, letter) => sheep.name.toLowerCase().includes(letter);

const sheepCounter = (sheep) => {
  const redSheep = sheep.filter((aSheep) => aSheep.color === 'rojo');
  const redSheepWithNAndA = redSheep.filter((aRedSheep) => sheepNameIncludes(aRedSheep, 'n') && sheepNameIncludes(aRedSheep, 'a'));
  return redSheepWithNAndA;
};

export default sheepCounter;
