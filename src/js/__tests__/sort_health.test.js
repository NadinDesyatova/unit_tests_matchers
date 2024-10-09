import sort_health from "../sort_health.js";


test('should sort characters by health', () => {
  const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80}
  ];
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10}
  ];

  const result = sort_health(characters);

  expect(result).toEqual(expected);
});
