import Character from '../character.js';

test.each([
  ['мечник', 80, 'healthy'],
  ['маг', 50, 'wounded'],
  ['лучник', 10, 'critical']
])(
  ('should health status of character %s with health %i'), 
  (name, health, expected) => {
  const character = new Character(name, health);
  const result = character.health_status();

  expect(result).toBe(expected);
});
