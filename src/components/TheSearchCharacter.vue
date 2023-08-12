<script setup>
import { Icon } from "@iconify/vue";
import { useCharacterStore } from "@/stores/character.js";
import { ref, computed } from "vue";

const characterStore = useCharacterStore();
const search = ref("");
const searchLowerCase = computed(() => search.value.toLowerCase());

const filteredCharacters = computed(() =>
  characterStore.favoriteCharacters.filter(({ name }) =>
    name.toLowerCase().includes(searchLowerCase.value)
  )
);
</script>

<template>
  <section class="flex justify-center mt-26">
    <div class="flex flex-col items-center p-5 gap-6">
      <Icon icon="mingcute:user-search-line" color="gray" width="40" />
      <h2 class="text-gray-500 text-lg">Look through your favorites:</h2>
      <input
        class="p-2 w-96 border border-gray-200 rounded mb-6"
        placeholder="Search character..."
        type="text"
        v-model="search"
      />
      <h1 class="font-bold text-2xl">My favorites characters</h1>
      <div
        class="font-bold h-96 gap-6 flex flex-col border overflow-y-scroll rounded-md shadow-md mb-40 bg-mystic"
      >
        <div
          class="flex gap-36 items-center border-b border-gray-400 p-8"
          v-for="{ _id, imageUrl, tvShows, name } in filteredCharacters"
          :key="_id"
        >
          <img :src="imageUrl" alt="Disney characters" class="w-12" />
          <span class="text-sm text-gray-500 w-12">{{ name }}</span>
          <Icon icon="ph:television-light" v-if="tvShows.length > 0" />
          <Icon icon="system-uicons:cross" v-else />
          <Icon
            class="cursor-pointer"
            icon="fxemoji:star"
            color="gray"
            @click="characterStore.toggleFavoriteCharacterById(_id)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
