import Character from '../character';
import Undead from '../undead';

const recieved = new Character('Smith', 'Undead', 30, 30);

test('create Character', () => {
  expect(recieved).toEqual({
    name: 'Smith',
    type: 'Undead',
    level: 1,
    attack: 30,
    defense: 30,
    health: 100,
  });

  expect(recieved).not.toBe({
    name: 'Smith',
    type: 'Undead',
    level: 1,
    attack: 30,
    defense: 30,
    health: 100,
  });
});

test('levelUp', () => {
  const levelUp = recieved.levelUp();

  expect(levelUp).toEqual({
    name: 'Smith',
    type: 'Undead',
    level: 2,
    attack: 36,
    defense: 36,
    health: 100,
  });

  expect(levelUp).not.toBe({
    name: 'Smith',
    type: 'Undead',
    level: 2,
    attack: 36,
    defense: 36,
    health: 100,
  });
});

test ('damage check', () => {
  const result = recieved.damage(20);
  expect(result).toEqual({
    name: 'Smith',
    type: 'Undead',
    level: 2,
    attack: 36,
    defense: 36,
    health: 87.2,
  });
  expect(result).not.toBe({
    name: 'Smith',
    type: 'Undead',
    level: 2,
    attack: 36,
    defense: 36,
    health: 87.2,
  })
});

test('wrong name check', () => {
  expect(() => {
    new Character('A', 'Undead', 10, 40);
  }).toThrow();
  expect(() => {
    new Character('Aqwertyuiop', 'Undead', 10, 40);
  }).toThrow();
});

test('type check', () => {
  expect(() => {
    new Character('Smith', 'Undeaded', 25, 25);
  });
});

test('check levelUp to dead character', () => {
  expect(() => {
    recieved.damage(200);
    recieved.levelUp();
  }).toThrow();
});

test('check damage to dead charecter', () => {
  expect(() => {
    recieved.damage(200);
    recieved.damage(10);
  }).toThrow();
});
