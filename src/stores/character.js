import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useCharacterStore = defineStore("character", () => {
  const characters = ref([]);
  const favoriteCharacterIds = ref(new Set());
  const mostPopularCharacters = ref([]);

  const toggleFavoriteCharacterById = (id) => {
    if (favoriteCharacterIds.value.has(id)) {
      favoriteCharacterIds.value.delete(id);
    } else {
      favoriteCharacterIds.value.add(id);
    }
  };

  const favoriteCharacters = computed(() =>
    characters.value.filter(({ _id }) => favoriteCharacterIds.value.has(_id))
  );

  const sortPopularCharacters = () => {
    mostPopularCharacters.value = characters.value
      .filter((character) => character.films.length)
      .sort((a, b) => b.films.length - a.films.length)
      .slice(0, 3);
  };

  const loadCharacterData = async () => {
    const response = await axios.get(
      "https://api.disneyapi.dev/character?pageSize=100"
    );
    characters.value = response.data.data;
    sortPopularCharacters();
  };

  loadCharacterData();

  return {
    characters,
    toggleFavoriteCharacterById,
    favoriteCharacterIds,
    favoriteCharacters,
    mostPopularCharacters,
  };
});
