import { takeCards } from '@/cards-operations'
import { GameData } from '@/types'

import { validateMove } from './validations'
import { LogFn } from './types'

export const pureDraw = (
  game: GameData,
  index: number,
  baseId: number,
  log: LogFn
) => {
  validateMove(game, index, 'drawing')

  const player = game.players[index]
  const [card] = takeCards(player.deck, [baseId])

  player.hand.push(card)

  game.stage = 'action'

  log(`Игрок index-${index} взял с верха колоды карту id-${card.idInPlay}`)
}

export const createDraw =
  (game: GameData, log: LogFn) => (index: number, baseId: number) =>
    pureDraw(game, index, baseId, log)
