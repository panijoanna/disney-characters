import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useCharacterStore = defineStore("character", () => {
  const characters = ref([]);
  const favoriteCharacterIds = ref(new Set());

  const toggleFavoriteCharacterById = (id) => {
    if (favoriteCharacterIds.value.has(id)) {
      favoriteCharacterIds.value.delete(id);
    } else {
      favoriteCharacterIds.value.add(id);
    }
  };

  const loadCharacterData = async () => {
    const response = await axios.get(
      "https://api.disneyapi.dev/character?pageSize=100"
    );
    characters.value = response.data.data;
  };

  loadCharacterData();

  return {
    characters,
    toggleFavoriteCharacterById,
    favoriteCharacterIds,
  };
});
