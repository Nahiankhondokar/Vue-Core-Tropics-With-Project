import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {
  state: () => ({
    name: '',
    sports: 0,
    members: []
  }),
  getters: {
    remainSports() {
      return this.sports - this.members.length
    }
  },
  actions: {
    async fill() {
      await import('@/team.json').then((res) => {
        let data = res.default

        /**
         * Basic state update
         */
        // this.name = data.name
        // this.sports = data.sports
        // this.members = data.members

        /**
         *  Advance way to update state
         *  Multipule state update together
         */
        // this.$patch({
        //     name : data.name,
        //     sports : data.sports,
        //     members : data.members,
        // });

        /**
         * Advance way to update state
         * This will replace whole state entirely by the response data.
         */
        this.$state = data
      })
    }
  }
})
