import { TestScheduler } from 'jest';
import Magician from '../magician';

test ('create check', () => {
  const result = new Magician ('Vergil');
  expect(result).toEqual({
    name: 'Vergil',
    type: 'Magician',
    level: 1,
    attack: 10,
    defense: 40,
    health: 100,
  });
  expect(result).not.toBe({
    name: 'Vergil',
    type: 'Magician',
    level: 1,
    attack: 10,
    defense: 40,
    health: 100,
  });
});