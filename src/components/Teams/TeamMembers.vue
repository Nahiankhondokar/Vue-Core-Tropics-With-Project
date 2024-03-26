<script setup>
import TeamMember from '@/components/Teams/TeamMember.vue'
import TeamJson from '@/team.json'

defineProps({
  TeamJson
})
</script>

<template>
  <section class="body-section">
    <div class="relative overflow-x-auto rounded-lg">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <!-- Team member Component -->
          <TeamMember
            v-for="member in TeamJson.members"
            :name="member.name"
            :email="member.email"
            :image="member.image"
            :status="member.status"
          />
        </tbody>
      </table>
      <p
        class="text-right text-xl font-medium"
        v-show="TeamJson.members.length === TeamJson.sports"
      >
        Extra text
      </p>
    </div>
  </section>
</template>
