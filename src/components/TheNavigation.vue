<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <nav
    class="bg-black text-white flex gap-2 p-5 items-center max-md:text-sm max-md:px-3 max-md:max-w-4xl"
  >
    <Icon icon="tabler:brand-disney" color="white" width="30" />
    <h1 class="uppercase font-bold text-xl tracking-wide max-md:text-sm">
      Disney
    </h1>
    <div class="gap-8 flex ml-20 max-sm:gap-7 max-sm:ml-0">
      <RouterLink to="/" class="hover:text-gray-400 max-sm:ml-5"
        >Home</RouterLink
      >
      <RouterLink to="/favorites" target="_blank" class="hover:text-gray-400"
        >My favorites</RouterLink
      >
    </div>
  </nav>
</template>

<style></style>
