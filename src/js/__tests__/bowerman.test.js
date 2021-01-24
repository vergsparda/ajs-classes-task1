import Bowerman from '../bowerman';

test ('create check Bowerman', () =>{
  const result = new Bowerman('Лучник');
  expect(result).toEqual({
    name: 'Лучник',
    type: 'Bowerman',
    level: 1,
    attack: 25,
    defense: 25,
    health: 100
  });
  expect(result).not.toBe({
    name: 'Лучник',
    type: 'Bowerman',
    level: 1,
    attack: 25,
    defense: 25,
    health: 100
  });
});
