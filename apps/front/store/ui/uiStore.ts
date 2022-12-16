import { defineStore } from 'pinia'
import { defaultUiState, uiState } from './state'

export const useUiStore = defineStore('ui', {
  state: () => ({ ...uiState }),
  getters: {
    getIsLoading: state => state.isLoading > 0,
  },
  actions: {
    resetUIState() {
      this.$state = defaultUiState()
    },
    incLoading() {
      this.isLoading++
    },
    decLoading() {
      this.isLoading--
    },
  },
})
