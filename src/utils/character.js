export const retrieveMostPopularCharacters = (characters) => {
  return characters
    .filter((character) => character.films.length)
    .sort((a, b) => b.films.length - a.films.length)
    .slice(0, 3);
};
