<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  modelValue: String
})

let emit = defineEmits(['update:modelValue'])

function update(e) {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <textarea v-text="modelValue" @keyup="update"></textarea>
</template>
