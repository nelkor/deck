import { createGame } from '@/create-game'
import { Candidate } from '@/types'

import { createLogger } from './logger'
import { createPass } from './pass'

export const createGameController = (...candidates: Candidate[]) => {
  const game = createGame(candidates)
  const { printGame, printLog, write } = createLogger(game)
  const pass = createPass(game, write)

  return {
    printGame,
    printLog,
    pass,
  }
}
