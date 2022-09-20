import { defineStore } from 'pinia'
import type { ISettingsFormData } from '@/components/sandbox/types/ISettingsForm'
import { ref } from 'vue'
import {
  useGetLocalStorageItem,
  useSetLocalStorageItem
} from '@/composables/localStorage'

export const useSandboxStore = defineStore('sandbox', () => {
  const elementSettingsData = ref({
    width: null,
    height: null,
    borderRadius: null,
    backgroundColor: null
  } as ISettingsFormData)

  const test = useGetLocalStorageItem('settingsData')
  if (test) {
    elementSettingsData.value = JSON.parse(test)
  }

  const updateElementSettingsData = (payload: ISettingsFormData) => {
    elementSettingsData.value = payload
    useSetLocalStorageItem('settingsData', payload)
  }

  return {
    elementSettingsData,
    updateElementSettingsData
  }
})
