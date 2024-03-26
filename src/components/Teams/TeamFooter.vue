<script setup>
defineProps({
  TeamJson: Object
})
</script>

<template>
  <section class="footer bg-gray-100 p-3 text-center font-bold text-xl">
    <h3>{{ TeamJson.name }} - {{ TeamJson.sports }} Member Team</h3>
  </section>
</template>
