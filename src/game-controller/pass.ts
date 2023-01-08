import { GameData } from '@/types'

import { validateMove } from './validations'
import { getIndexOfWinner } from './operations'
import { LogFn } from './types'

const getNextIndex = (game: GameData, index: number) =>
  index + 1 >= game.players.length ? 0 : index + 1

const tryDraw = (game: GameData, index: number, log: LogFn) => {
  const player = game.players[index]

  if (player.hasLost) {
    tryDraw(game, getNextIndex(game, index), log)

    return
  }

  game.activePlayerIndex = index

  log(`Ход переходит игроку index-${index}`)

  if (!player.deck.length) {
    player.hasLost = true

    log(`Игрок index-${index} проиграл из-за невозможности взять карту`)

    const winner = getIndexOfWinner(game)

    if (game.hasEnded) {
      log(`Игрок index-${winner} выиграл, оставшись последним`)

      return
    }

    tryDraw(game, getNextIndex(game, index), log)

    return
  }
}

const purePass = (game: GameData, index: number, log: LogFn) => {
  validateMove(game, index, 'action')
  log(`Игрок index-${index} завершил свой ход`)

  game.stage = 'drawing'

  tryDraw(game, getNextIndex(game, index), log)
}

export const createPass = (game: GameData, log: LogFn) => (index: number) =>
  purePass(game, index, log)
