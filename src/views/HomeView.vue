<template>
  <v-container>
    <section>
      <v-expand-transition>
        <v-row v-if="galleryStore.showGallery" class="mb-5">
          <v-col v-for="number in COUNT_IMAGES" :key="number" cols="auto">
            <v-img
              :lazy-src="`https://placeimg.com/150/150/people?image=${
                number * 5 + 100
              }`"
              :src="`https://placeimg.com/150/150/people?image=${
                number * 5 + 100
              }`"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="150"
              min-width="150"
            >
              <template #placeholder>
                <v-row align="center" class="fill-height ma-0" justify="center">
                  <v-progress-circular color="grey lighten-5" indeterminate />
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-expand-transition>
    </section>
    <div>
      <v-btn
        color="deep-purple accent-4"
        @click="galleryStore.toggleShowGallery"
      >
        {{ !!galleryStore.showGallery ? 'Hide' : 'Show' }}
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts" setup>
import { useGalleryStore } from '@/stores/gallery'

const COUNT_IMAGES = 10
const galleryStore = useGalleryStore()
</script>
