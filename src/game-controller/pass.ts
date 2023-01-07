import { GameData } from '@/types'

import { validateMove } from './validations'

const purePass = (game: GameData, index: number) => {
  validateMove(game, index, 'action')
}

export const createPass = (game: GameData) =>
  (index: number) => purePass(game, index)
