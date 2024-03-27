<script setup>
defineProps({
  show: Boolean
})
</script>

<template>
  <transition
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="show" class="fixed z-10 overflow-y-auto top-0 w-full left-0" id="modal">
      <div
        class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <slot name="overlay"></slot>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
