<script></script>

<template>
  <main class=" ">
    <div class="grid grid-cols-6 gap-4">
      <!-- column 01 -->
      <div class="bg-gray-200 py-10">
        <h3 class="text-gray-500 font-bold text-xl text-center md:text-4xl md:font-mediumn">
          Demo
        </h3>
        <div class="box my-10 space-y-5">
          <div class="box-item w-16 h-16 bg-gray-300 mx-auto rounded-lg"></div>
          <div class="box-item w-16 h-16 bg-gray-300 mx-auto rounded-lg"></div>
          <div class="box-item w-16 h-16 bg-gray-300 mx-auto rounded-lg"></div>
          <div class="box-item w-16 h-16 bg-gray-300 mx-auto rounded-lg"></div>
          <div class="box-item w-16 h-16 bg-gray-300 mx-auto rounded-lg"></div>
        </div>
      </div>

      <!-- column 02 -->
      <div class="border col-span-5 py-10 px-10">
        <!-- Header section -->
        <div class="header-section flex flex-row justify-between">
          <div class="add-button">
            <button class="bg-gray-500 px-5 py-3 rounded-lg text-white">
              Add Member (0 Sports Left)
            </button>
          </div>
          <div class="team-count flex gap-1 flex-row justify-center items-center">
            <img
              src="https://media.istockphoto.com/id/496261720/vector/smiling-emoticon-with-smiling-eyes.jpg?s=612x612&w=0&k=20&c=bp-70mH9FIM4fBaEY7ke7FG4Gs0bJEowIpgk2as8Nc4="
              alt=""
              class="w-6 h-6"
            />
            <div class="team-title-with-number relative pr-5">
              <h3 class="text-xl font-medium text-gray-400">Team member</h3>
              <div
                class="flex justify-center items-center w-6 h-6 bg-green-500 rounded-full absolute bottom-5 right-0"
              >
                <p class="font-normal text-white">10</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Body section -->
      </div>
    </div>
  </main>
</template>

<style></style>
