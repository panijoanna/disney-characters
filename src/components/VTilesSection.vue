<script setup>
import { Icon } from "@iconify/vue";
import { defineProps } from "vue";
import { ref } from "vue";
import axios from "axios";

const props = defineProps({
  title: String,
});

const characters = ref([]);

axios
  .get("https://api.disneyapi.dev/character?pageSize=100")
  .then((response) => {
    characters.value = response.data;
  });
</script>

<template>
  <div class="bg-white flex mx-44 m-8 flex-col p-7 gap-3 shadow-sm">
    <h1 class="font-bold">{{ title }}</h1>
    <div
      class="flex justify-between border-t border-gray-300 p-3 font-bold text-sm"
    >
      <span>Picture</span>
      <span>Name</span>
      <span>Favorites</span>
    </div>
    <div class="flex justify-between items-center">
      <img />
      <span>Character Name</span>
      <Icon icon="guidance:star" color="gray" width="24" height="24" />
    </div>
  </div>
</template>
