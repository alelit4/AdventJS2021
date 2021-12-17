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

  const redSheepWithNAndA = [
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
  ];

  it('should return only red sheep and name that contains letters "n" and "a"', () => {
    const filteredSheep = sheepCounter(sheep);

    expect(filteredSheep).toStrictEqual(redSheepWithNAndA);
  });
});
