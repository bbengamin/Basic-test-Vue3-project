<template>
  <v-app>
    <v-main>
      <HeaderComponent />
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '@/components/layout/HeaderComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent
  }
})
</script>
