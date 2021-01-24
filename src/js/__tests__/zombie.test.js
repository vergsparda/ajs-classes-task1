import Zombie from '../zombie';

test ('create check', () => {
const result = new Zombie('leon.s');
expect(result).toEqual({
  name: 'leon.s',
  type: 'Zombie',
  level: 1,
  attack: 40,
  defense: 10,
  health: 100,
});
expect(result).not.toBe({
  name: 'leon.s',
  type: 'Zombie',
  level: 1,
  attack: 40,
  defense: 10,
  health: 100,
});
});