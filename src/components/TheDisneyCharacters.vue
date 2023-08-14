<script setup>
import { useCharacterStore } from "@/stores/character.js";
import BaseCharacterList from "./BaseCharacterList.vue";

const characterStore = useCharacterStore();
</script>

<template>
  <section class="mt-40 max-md:mt-12">
    <h1 class="text-3xl font-bold p-5 flex justify-center max-md:text-lg">
      What are your favorite characters?
    </h1>
    <BaseCharacterList
      :list="characterStore.characters"
      title="Disney Characters"
    />
  </section>
</template>
