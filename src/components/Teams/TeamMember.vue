<script setup>
defineProps({
  name: String,
  email: String,
  image: String,
  status: String
})
</script>

<template>
  <tr class="bg-gray-200 border-b gap-x-2">
    <td class="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
      <img :src="image" alt="" class="w-10 h-10 rounded-lg" />
      <h3 class="text-2xl font-bold">{{ name }}</h3>
    </td>
    <td class="px-6 py-4 font-medium text-xl">{{ email }}</td>
    <td class="px-6 py-4 text-green-500 font-bold text-lg">
      <a href="">{{ status }}</a>
    </td>
  </tr>
</template>

<style></style>
