<template>
  <v-app-bar color="deep-purple accent-4" dark>
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" bottom temporary>
    <v-list>
      <v-list-item v-for="tab in tabs" :key="tab.title" :to="tab.to">
        {{ tab.title }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tabs = [
  {
    title: 'Home',
    to: {
      name: 'home'
    }
  },
  {
    title: 'Sandbox',
    to: {
      name: 'sandbox'
    }
  }
]

const drawer = ref(false)
</script>
