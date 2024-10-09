import Character from './js/character.js';
import sort_health from './js/sort_health.js';

const characters_array = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80}
];

const magician = new Character('Маг',90);
magician.health_status();

sort_health(characters_array);
