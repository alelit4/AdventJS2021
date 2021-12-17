const sheepCounter = (sheep) => {
  const redSheep = sheep.filter((aSheep) => aSheep.color === 'rojo');
  const redSheepWithN = redSheep.filter((aRedSheep) => aRedSheep.name.toLowerCase().includes('n'));
  return redSheepWithN;
};

export default sheepCounter;
