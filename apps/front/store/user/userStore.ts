import { createActions, createGetters } from '@malolebrin/pinia-entity-store'
import { defineStore } from 'pinia'
import type { User } from 'types'
import { defaultState, userState } from './state'

export const useUserStore = defineStore('User', {
  state: () => ({
    ...userState,
  }),
  getters: {
    ...createGetters<User>(userState),
  },
  actions: {
    ...createActions<User>(userState),

    resetState() {
      this.$state = defaultState()
    },
  },
})
