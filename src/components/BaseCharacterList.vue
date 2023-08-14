<script setup>
import { useCharacterStore } from "@/stores/character.js";
import { defineProps } from "vue";
import Popper from "vue3-popper";
import { Icon } from "@iconify/vue";

const props = defineProps({
  list: Array,
  title: String,
});

const characterStore = useCharacterStore();
</script>

<template>
  <div
    class="bg-white flex mx-40 m-8 flex-col p-7 gap-4 shadow-sm overflow-y-scroll h-80 max-md:m-5 max-md:gap-3 max-md:p-1 max-sm:m-4 max-sm:gap-1"
  >
    <h2 class="font-bold max-md:ml-3">{{ title }}</h2>
    <div
      class="flex justify-between border-t border-gray-300 pt-3 font-bold text-sm gap-20 max-md:gap-8 max-md:m-0 max-md:p-1 max-lg:gap-16 max-sm:gap-4"
    >
      <span>Picture</span>
      <span>Character name</span>
      <span>Tv shows</span>
      <span>Add to favorites</span>
    </div>
    <div
      class="flex justify-between items-center mr-20 max-md:text-sm max-md:p-2 max-md:mr-9 max-lg:m-1 max-sm:gap-4"
      v-for="{ _id, imageUrl, tvShows, name } in list"
      :key="_id"
      :data-test="`favorite-character-${_id}`"
    >
      <img :src="imageUrl" alt="Disney characters" class="w-16" />
      <span class="w-20" data-test="favorite-character-name">{{ name }}</span>
      <Popper hover arrow placement="top" :content="tvShows.join('\r\n')">
        <Icon icon="ph:television-light" width="24" v-if="tvShows.length > 0" />
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
