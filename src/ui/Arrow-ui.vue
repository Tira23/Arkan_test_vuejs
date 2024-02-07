<script setup lang="ts">
defineProps<{
  url: string
  classname:string
}>()
</script>

<template>
  <div :class=classname>
    <img :src="url" alt="arrow" >
  </div>
</template>
