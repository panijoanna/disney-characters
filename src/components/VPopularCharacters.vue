<script setup>
import BaseContainer from "./BaseContainer.vue";
</script>

<template>
  <section class="flex justify-center items-center flex-col p-8">
    <h1 class="text-2xl font-bold p-7">Most popular Disney Characters</h1>
    <div class="flex gap-8">
      <BaseContainer>
        <img />
        <h1>Character name</h1>
        <span>Films</span>
        <span>Tv shows</span>
      </BaseContainer>
      <BaseContainer>
        <img />
        <h1>Character name</h1>
        <span>Films</span>
        <span>Tv shows</span>
      </BaseContainer>
      <BaseContainer>
        <img />
        <h1>Character name</h1>
        <span>Films</span>
        <span>Tv shows</span>
      </BaseContainer>
    </div>
  </section>
</template>
