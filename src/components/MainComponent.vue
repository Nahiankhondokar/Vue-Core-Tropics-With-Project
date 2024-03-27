<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamMembers from '@/components/Teams/TeamMembers.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Modal from '@/components/Modal.vue'
import { useTeamStore } from '@/Stores/TeamStore.js'
import { ref } from 'vue'

let TeamJson = useTeamStore()
TeamJson.fill()
</script>

<template>
  <main class="">
    <div class="grid grid-cols-6 gap-4 h-screen">
      <!-- column 01 -->
      <Sidebar />

      <!-- column 02 -->
      <div class="col-span-5 py-10 px-10 space-y-10">
        <!-- Header section -->
        <TeamHeader />

        <!-- Body section -->
        <TeamMembers />

        <!-- Footer Section -->
        <TeamFooter />
      </div>
    </div>
  </main>
</template>

<style></style>
