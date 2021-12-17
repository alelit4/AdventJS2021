const sheepCounter = (sheep) => {
  const redSheep = sheep.filter((aSheep) => aSheep.color === 'rojo');
  return redSheep.filter((aRedSheep) => aRedSheep.name.includes('n') || aRedSheep.name.includes('N'));
};

export default sheepCounter;
