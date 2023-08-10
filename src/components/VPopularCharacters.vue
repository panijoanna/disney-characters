<script setup>
import VContainer from "./VContainer.vue";
</script>

<template>
  <section class="flex justify-center items-center flex-col mt-16">
    <h1 class="text-3xl font-bold p-10">Most popular Disney Characters</h1>
    <div class="flex gap-8">
      <VContainer>
        <img />
        <h1>Character name</h1>
        <span>Films</span>
        <span>Tv shows</span>
      </VContainer>
      <VContainer>
        <img />
        <h1>Character name</h1>
        <span>Films</span>
        <span>Tv shows</span>
      </VContainer>
      <VContainer>
        <img />
        <h1>Character name</h1>
        <span>Films</span>
        <span>Tv shows</span>
      </VContainer>
    </div>
  </section>
</template>
