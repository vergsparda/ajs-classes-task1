import Daemon from '../daemon';

test ('create check', () =>{
  const result = new Daemon('Lusifer');
  expect(result).toEqual({
    name: 'Lusifer',
    type: 'Daemon',
    level: 1,
    attack: 10,
    defense: 40,
    health: 100,
  });
  expect(result).not.toBe({
    name: 'Lusifer',
    type: 'Daemon',
    level: 1,
    attack: 10,
    defense: 40,
    health: 100,
  });
});
