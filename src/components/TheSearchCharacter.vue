<script setup>
import { Icon } from "@iconify/vue";
import { useCharacterStore } from "@/stores/character.js";
import { ref, computed } from "vue";
import BaseCharacterList from "./BaseCharacterList.vue";

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
    <div class="flex flex-col items-center p-5 gap-6 max-lg:p-0">
      <Icon
        icon="mingcute:user-search-line"
        color="gray"
        width="40"
        class="max-sm:mt-8"
      />
      <h2 class="text-gray-500 text-lg">Look through your favorites:</h2>
      <input
        class="p-2 w-96 border border-gray-200 rounded mb-6 max-md:w-72 max-sm:w-1/2"
        placeholder="Search character..."
        type="text"
        v-model="search"
      />
      <h1 class="font-bold text-2xl max-sm:text-lg">My favorites characters</h1>
      <BaseCharacterList :list="filteredCharacters" title="Favorites" />
    </div>
  </section>
</template>
