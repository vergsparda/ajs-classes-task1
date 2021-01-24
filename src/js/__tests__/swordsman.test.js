import Swordsman from '../swordman';

test ('create check', () => {
  const result = new Swordsman ('Артур');
  expect(result).toEqual({
    name: 'Артур',
    type: 'Swordsman',
    level: 1,
    attack: 40,
    defense: 10,
    health: 100,
  });
  expect(result).not.toBe({
    name: 'Артур',
    type: 'Swordsman',
    level: 1,
    attack: 40,
    defense: 10,
    health: 100,

  })
})