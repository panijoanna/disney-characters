import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useCharacterStore = defineStore("character", () => {
  const characters = ref([]);

  const loadCharacterData = async () => {
    try {
      const response = await axios.get(
        "https://api.disneyapi.dev/character?pageSize=100"
      );
      characters.value = response.data.data;
    } catch (error) {
      error.value = error;
    }
  };

  loadCharacterData();

  return {
    characters,
  };
});
