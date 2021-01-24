import Undead from '../undead';

test ( 'create check', () => {
  const result = new Undead('Василий')
  expect(result).toEqual({
    name: 'Василий',
    type: 'Undead',
    level: 1,
    attack: 25,
    defense: 25,
    health: 100,
  });
  expect(result).not.toBe({
    name: 'Василий',
    type: 'Undead',
    level: 1,
    attack: 25,
    defense: 25,
    health: 100,

  })
})