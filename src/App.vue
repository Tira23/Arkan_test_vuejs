<script setup lang="ts">
import BlockArrow from "@/components/blockArrow/BlockArrow.vue";
import BlockArrowComp from "@/components/blockWithLi/BlockLiComp.vue";
import {computed, reactive} from "vue";
import {filterAllCities, left, right, start} from "@/utils/cities";
import type {ICities} from "@/interface";
import {helperForMoveCity} from "@/utils/helpers";

start()

const leftBlock = reactive<ICities[]>(left)
const rightBlock = reactive<ICities[]>(right)

function concatAllCities() {
  return [...leftBlock, ...rightBlock]
}

const leftBlockComputed = computed(() => {
  return concatAllCities().filter(city => city.isLeft)
})
const rightBlockComputed = computed(() => {
  return concatAllCities().filter(city => !city.isLeft)
})

const _moveLiToRight = () => {
  leftBlockComputed.value.forEach(helperForMoveCity)
}

const _moveLiToLeft = () => {
  rightBlockComputed.value.forEach(helperForMoveCity)
}

const _moveAll2Right = () => {
  filterAllCities(leftBlockComputed.value)
}

const _moveAll2Left = () => {
  filterAllCities(rightBlockComputed.value)
}
</script>

<template>
  <div class="section">
    <div class="wrapper">
      <BlockArrowComp
          classname="left block"
          :cities=leftBlockComputed
      />
      <BlockArrow
          :fnL2R="_moveLiToRight"
          :fnR2L="_moveLiToLeft"
          :fnAll2R="_moveAll2Right"
          :fnAll2L="_moveAll2Left"
      />
      <BlockArrowComp
          classname="right block"
          :cities=rightBlockComputed
      />
    </div>
  </div>
</template>
