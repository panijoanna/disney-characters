<script setup>
import { Icon } from "@iconify/vue";
import { useCharacterStore } from "@/stores/character.js";

const characterStore = useCharacterStore();
const search = ref("");
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
      />
      <h1 class="font-bold text-2xl">My favorites characters</h1>
      <div class="h-80 font-bold gap-16 flex border p-6 shadow-md mb-40">
        <span>Picture</span>
        <span>Character name</span>
        <span>Tv shows</span>
        <span>Add to favorites</span>
      </div>
    </div>
  </section>
</template>
