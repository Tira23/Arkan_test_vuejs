<script setup lang="ts">
defineProps<{
  src: string
  classname:string
}>()
</script>

<template>
  <div :class=classname>
    <img :src=src alt="arrow" >
  </div>
</template>
