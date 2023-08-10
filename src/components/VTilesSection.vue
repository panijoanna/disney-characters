<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";
import { ref } from "vue";
import axios from "axios";

const props = defineProps({
  title: String,
});

const characters = ref([]);

const fetchCharacterData = async () => {
  try {
    const response = await axios.get(
      "https://api.disneyapi.dev/character?pageSize=100"
    );
    characters.value = response.data;
  } catch (error) {
    error.value = error;
  }
};

fetchCharacterData();
</script>

<template>
  <div
    class="bg-white flex mx-40 m-8 flex-col p-7 gap-4 shadow-sm overflow-y-scroll h-80"
  >
    <h1 class="font-bold">{{ title }}</h1>
    <div
      class="flex justify-between border-t border-gray-300 p-3 font-bold text-sm"
    >
      <span>Picture</span>
      <span>Character name</span>
      <span>Tv shows</span>
      <span>Favorites</span>
    </div>
    <div
      else-if
      class="flex justify-between items-center mr-7"
      v-for="character in characters.data"
      :key="character.id"
    >
      <img :src="character.imageUrl" alt="Disney characters" class="w-16" />
      <span class="w-20">{{ character.name }}</span>
      <Icon
        icon="ph:television-light"
        width="24"
        v-if="character.tvShows.length > 0"
      />
      <Icon icon="system-uicons:cross" v-else width="24" />
      <Icon icon="guidance:star" color="gray" width="24" height="24" />
    </div>
  </div>
</template>
