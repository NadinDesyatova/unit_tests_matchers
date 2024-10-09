export default function (characters_array) {
  characters_array.sort((current, next) => next.health - current.health);
  return characters_array
};
