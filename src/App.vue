<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";
import VDisneyCharacters from "./components/VDisneyCharacters.vue";
import VPopularCharacters from "./components/VPopularcharacters.vue";
import VSearchCharacter from "./components/VSearchCharacter.vue";
</script>

<template>
  <TheNavigation />
  <VPopularCharacters />
  <VDisneyCharacters />
  <VSearchCharacter />
  <TheFooter />
</template>
