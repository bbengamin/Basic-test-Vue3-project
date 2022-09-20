<template>
  <v-form ref="form" v-model="settingsForm.valid" @submit.prevent="submit">
    <div v-for="field in formFields" :key="field.label">
      <v-color-picker
        v-if="field.type === 'color'"
        v-model="settingsForm.data[field.vModelField]"
        dot-size="25"
        swatches-max-height="200"
      />
      <v-text-field
        v-else
        v-model="settingsForm.data[field.vModelField]"
        :label="field.label"
        :rules="field.validationRules"
        :type="field.type"
      />
    </div>
    <v-btn class="mr-4 mt-5" color="success" type="submit">Confirm</v-btn>
    <v-btn class="mr-4 mt-5" color="error" @click="reset">Reset Form</v-btn>
  </v-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { ISettingsFormData } from '@/components/sandbox/types/ISettingsForm'
import type { IForm } from '@/common/types/IForm'
import { useSandboxStore } from '@/stores/sandbox'

interface IField {
  vModelField: string
  validationRules?: any[]
  type?: string
  label?: string
  required?: boolean
}

interface ISettingsFormActions {
  validate(): Promise<{
    valid: boolean
  }>
  reset(): any
}

const validationRules = {
  required: [(value: any) => !!value || 'Required']
}
const settingsForm = ref<IForm<ISettingsFormData>>({
  valid: true,
  data: {
    width: null,
    height: null,
    borderRadius: null,
    backgroundColor: null
  }
})

const formFields: IField[] = [
  {
    vModelField: 'width',
    validationRules: validationRules.required,
    type: 'number',
    label: 'Width',
    required: true
  },
  {
    vModelField: 'height',
    validationRules: validationRules.required,
    type: 'number',
    label: 'Height',
    required: true
  },
  {
    vModelField: 'borderRadius',
    validationRules: validationRules.required,
    type: 'number',
    label: 'Border Radius',
    required: true
  },
  {
    vModelField: 'backgroundColor',
    validationRules: validationRules.required,
    type: 'color',
    label: 'Background Color',
    required: true
  }
]

const sandboxStore = useSandboxStore()

let form = ref<ISettingsFormActions | null>(null)

const submit = async () => {
  const validationResponse = await form.value?.validate()
  if (validationResponse && validationResponse.valid) {
    sandboxStore.updateElementSettingsData({ ...settingsForm.value.data })
  }
}
const reset = () => {
  form.value?.reset()
}
</script>
