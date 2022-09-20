<template>
  <div>
    <div
      v-for="number in ELEMENTS_COUNT"
      :key="number"
      :style="elementSettings"
      class="mb-2"
    />
  </div>
</template>

<script lang="ts" setup>
import { useSandboxStore } from '@/stores/sandbox'
import { computed } from 'vue'

const ELEMENTS_COUNT = 10
const sandboxStore = useSandboxStore()

const elementSettings = computed(() => {
  return {
    width: sandboxStore.elementSettingsData.width + 'px',
    height: sandboxStore.elementSettingsData.height + 'px',
    'border-radius': sandboxStore.elementSettingsData.borderRadius + 'px',
    'background-color': sandboxStore.elementSettingsData.backgroundColor
  }
})
</script>
