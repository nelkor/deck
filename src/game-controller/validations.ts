import { GameData, GameStage } from '@/types'

export const validateMove = (
  game: GameData,
  index: number,
  stage: GameStage
) => {
  if (game.winnerIndex !== null) {
    throw new Error('this game has ended')
  }

  if (game.activePlayerIndex !== index) {
    throw new Error('invalid active player')
  }

  if (game.stage !== stage) {
    throw new Error('invalid stage')
  }
}
