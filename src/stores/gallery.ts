import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  useGetLocalStorageItem,
  useSetLocalStorageItem
} from '@/composables/localStorage'
import { useStringToBoolean } from '@/composables/types'

export const useGalleryStore = defineStore('gallery', () => {
  const showGallery = ref(true)

  const showGalleryLocalStorage = useGetLocalStorageItem('showGallery')
  if (showGalleryLocalStorage) {
    showGallery.value = useStringToBoolean(showGalleryLocalStorage)
  }

  function toggleShowGallery() {
    showGallery.value = !showGallery.value
    useSetLocalStorageItem('showGallery', showGallery.value.toString())
  }

  return {
    showGallery,
    toggleShowGallery
  }
})
