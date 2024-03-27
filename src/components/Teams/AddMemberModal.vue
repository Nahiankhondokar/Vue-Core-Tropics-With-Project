<script setup>
import Modal from '@/components/Modal.vue'
import { ref } from 'vue'
import { useTeamStore } from '@/Stores/TeamStore.js'

let TeamJson = useTeamStore()
let modalShow = ref(false)
</script>

<template>
  <!-- Modal add button -->
  <button
    class="bg-green-500 px-5 py-3 rounded-lg text-white font-medium disabled:bg-gray-500"
    :disabled="!TeamJson.remainSports"
    @click="modalShow = true"
  >
    Add Member ({{ TeamJson.remainSports }} Sports Left)
  </button>

  <!-- Add Modal teleporting for set this modal at the bottom of DOM-->
  <Teleport to="body">
    <Modal :show="modalShow">
      <!-- Sloat one -->
      <template #overlay>
        <div class="fixed inset-0 transition-opacity">
          <div class="absolute inset-0 bg-gray-900 opacity-75" />
        </div>
      </template>

      <!-- Sloat two -->
      <template #default>
        <div
          class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <form action="">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label class="font-medium text-gray-800">Name</label>
              <input type="text" class="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
              <label class="font-medium text-gray-800">Email</label>
              <input type="text" class="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
              <label class="font-medium text-gray-800">Image</label>
              <input type="text" class="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
              <label class="font-medium text-gray-800">Status</label>
              <input type="text" class="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3" />
            </div>
          </form>
          <div class="bg-gray-200 px-4 py-3 text-right">
            <button
              type="button"
              class="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
              @click="modalShow = false"
            >
              <i class="fas fa-times"></i> Cancel
            </button>
            <button
              type="button"
              class="py-2 px-4 bg-blue-500 text-white rounded font-medium hover:bg-blue-700 mr-2 transition duration-500"
            >
              <i class="fas fa-plus"></i> Create
            </button>
          </div>
        </div>
      </template>
    </Modal>
  </Teleport>
</template>
