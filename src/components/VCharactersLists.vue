<script setup>
import VListsTile from "./VListsTile.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <section class="my-36">
    <h1 class="text-3xl font-bold p-5 flex justify-center">
      What are your favorite characters?
    </h1>
    <VListsTile title="Disney Characters" />
    <div class="flex items-center justify-center flex-col gap-4">
      <Icon icon="mingcute:user-search-line" color="gray" width="40" />
      <h2 class="text-gray-500 text-lg">Look through your favorites:</h2>
      <input
        class="p-2 w-1/3 border border-gray-200 rounded"
        placeholder="Search character..."
        type="text"
      />
    </div>
    <VListsTile title="My Favorites" />
  </section>
</template>
