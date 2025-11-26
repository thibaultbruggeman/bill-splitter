<script setup lang="ts">
const props = defineProps({
  showReset: Boolean,
})
</script>

<template>
  <nav>
    <ul>
      <li><strong>Bill Splitter</strong></li>
    </ul>
    <ul>
      <button v-if="props.showReset" @click="$emit('reset')">RESET</button>
    </ul>
  </nav>
</template>
