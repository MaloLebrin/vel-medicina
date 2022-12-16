import { createState } from '@malolebrin/pinia-entity-store'
import type { User } from 'types'

export const defaultState = () => ({
  ...createState<User>(),
})

export const userState = defaultState()
