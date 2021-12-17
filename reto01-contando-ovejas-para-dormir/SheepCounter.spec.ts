import sheepCounter from './SheepCounter';

describe('SheepCounter', () => {
  const sheep = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
  ];

  const redSheep = [
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' },
  ];

  it('should return only red sheep', () => {
    const filteredSheep = sheepCounter(sheep);

    expect(filteredSheep).toStrictEqual(redSheep);
  });
});
