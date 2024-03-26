<script setup>
defineProps({
  TeamJson: Object
})
</script>

<template>
  <div class="header-section flex flex-row justify-between">
    <div class="add-button">
      <button
        class="bg-green-500 px-5 py-3 rounded-lg text-white font-medium disabled:bg-gray-500"
        :disabled="TeamJson.members.length === TeamJson.sports"
      >
        Add Member ({{ TeamJson.sports - TeamJson.members.length }} Sports Left)
      </button>
    </div>
    <div class="team-count flex gap-1 flex-row justify-center items-center">
      <img
        src="https://media.istockphoto.com/id/496261720/vector/smiling-emoticon-with-smiling-eyes.jpg?s=612x612&w=0&k=20&c=bp-70mH9FIM4fBaEY7ke7FG4Gs0bJEowIpgk2as8Nc4="
        alt=""
        class="w-6 h-6"
      />
      <div class="team-title-with-number relative pr-5">
        <h3 class="text-xl font-medium text-gray-600">{{ TeamJson.name }} Team</h3>
        <div
          class="flex justify-center items-center w-6 h-6 bg-green-500 rounded-full absolute bottom-5 right-0"
        >
          <p class="font-normal text-white">{{ TeamJson.sports }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
