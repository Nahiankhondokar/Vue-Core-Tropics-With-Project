<script setup>
import Textarea from './Textarea.vue'
import { ref } from 'vue'

let comment = ref('text value')
</script>

<template>
  <h1>hello</h1>
  <Textarea v-model="comment" style="width: 100%; height: 100px" />
</template>
