<script setup>
import { Icon } from "@iconify/vue";
import { useCharacterStore } from "@/stores/character.js";
import Popper from "vue3-popper";

const characterStore = useCharacterStore();
</script>

<template>
  <section class="mt-40">
    <h1 class="text-3xl font-bold p-5 flex justify-center">
      What are your favorite characters?
    </h1>
    <div
      class="bg-white flex mx-40 m-8 flex-col p-7 gap-4 shadow-sm overflow-y-scroll h-80"
    >
      <h2 class="font-bold">Disney Characters</h2>
      <div
        class="flex justify-between border-t border-gray-300 pt-3 font-bold text-sm"
      >
        <span>Picture</span>
        <span>Character name</span>
        <span>Tv shows</span>
        <span>Add to favorites</span>
      </div>
      <div
        class="flex justify-between items-center mr-20"
        v-for="{ _id, imageUrl, tvShows, name } in characterStore.characters"
        :key="_id"
      >
        <img :src="imageUrl" alt="Disney characters" class="w-16" />
        <span class="w-20">{{ name }}</span>
        <Popper hover arrow placement="top" :content="tvShows.join('\r\n')">
          <Icon
            icon="ph:television-light"
            width="24"
            v-if="tvShows.length > 0"
          />
          <Icon icon="system-uicons:cross" v-else width="24" />
        </Popper>
        <Icon
          class="cursor-pointer"
          icon="guidance:star"
          color="gray"
          width="24"
          height="24"
          @click="characterStore.toggleFavoriteCharacterById(_id)"
          v-if="!characterStore.favoriteCharacterIds.has(_id)"
        />
        <Icon
          class="cursor-pointer"
          icon="fxemoji:star"
          width="24"
          @click="characterStore.toggleFavoriteCharacterById(_id)"
          v-else
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.popper[data-v-5784ed69]) {
  background: #000;
  white-space: pre;
  opacity: 0.8;
  max-width: 160px;
  padding: 5px 10px;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
}

:deep(.popper[data-v-5784ed69] #arrow::before) {
  background: #000;
}

:deep(.popper[data-v-5784ed69]:hover),
:deep(.popper[data-v-5784ed69]:hover > #arrow::before) {
  background: #000;
}
</style>
