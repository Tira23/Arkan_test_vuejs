<script setup lang="ts">
import type {ICities} from "@/interface";
import {toggleChoseCity} from "@/utils/helpers";

defineProps<{
  classname?: string
  cities: ICities[]
}>()

</script>

<template>
  <div :class=classname>
    <ul>
      <li
          v-for="city in cities"
          :key="city.id"
          @click="toggleChoseCity(city)"
          :class="{selectLine: city.isChose}"
      >
        {{ city.title }}
      </li>
    </ul>
  </div>
</template>
