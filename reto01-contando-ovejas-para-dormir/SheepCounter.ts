const sheepCounter = (sheep) => {
  const redSheep = sheep.filter((aSheep) => aSheep.color === 'rojo');
  const redSheepWithNAndA = redSheep.filter((aRedSheep) => {
    return aRedSheep.name.toLowerCase().includes('n') && aRedSheep.name.toLowerCase().includes('a');
  });
  return redSheepWithNAndA;
};

export default sheepCounter;
