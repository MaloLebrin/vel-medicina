export interface UiState {
  isLoading: number
}

export const uiState: UiState = defaultUiState()

export function defaultUiState() {
  return {
    isLoading: 0,
  }
}
