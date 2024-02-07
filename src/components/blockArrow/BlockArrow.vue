<script setup lang="ts">
import ArrowUi from "@/ui/Arrow-ui.vue";

defineProps<{
  fnL2R: () => void
  fnR2L: () => void
  fnAll2R: () => void
  fnAll2L: () => void
}>()
</script>

<template>
  <div class="blockWithArrows">
    <ArrowUi
        classname="arrowToRight arrowCenter arrowButton"
        src="src/assets/png/1.png"
        @click="fnL2R"
    />
    <ArrowUi
        classname="arrowToLeft arrowCenter arrowButton"
        src="src/assets/png/1.png"
        @click="fnR2L"
    />
    <ArrowUi
        classname="doubleArrowToRight arrowCenter arrowButton"
        src="src/assets/png/2.png"
        @click="fnAll2L"
    />
    <ArrowUi
        classname="doubleArrowToLeft arrowCenter arrowButton"
        src="src/assets/png/2.png"
        @click="fnAll2R"
    />
  </div>
</template>
