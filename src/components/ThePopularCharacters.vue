<script setup>
import { useCharacterStore } from "@/stores/character.js";

const characterStore = useCharacterStore();
</script>

<template>
  <section class="flex justify-center items-center flex-col mt-6">
    <h1 class="text-3xl font-bold p-10 max-md:text-lg">
      Most popular Disney Characters
    </h1>
    <div class="flex gap-5 max-md:flex-col max-md:gap-5 max-xl:gap-6">
      <div
        v-for="{
          imageUrl,
          name,
          tvShows,
          films,
        } in characterStore.mostPopularCharacters"
      >
        <div
          class="bg-white shadow-md w-72 flex flex-col text-lg p-3 rounded hover:scale-105 transition-transform duration-500 max-xl:w-56"
        >
          <img :src="imageUrl" class="rounded mb-5" />
          <span class="font-bold">{{ name }}</span>
          <span>Films: {{ films.length }}</span>
          <span>Tv shows: {{ tvShows.length }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
