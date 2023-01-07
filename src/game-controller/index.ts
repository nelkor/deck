import { createGame } from '@/create-game'
import { Candidate } from '@/types'

import { createLogger } from './logger'
import { createPass } from './pass'

export const createGameController = (...candidates: Candidate[]) => {
  const game = createGame(candidates)
  const { printGame, printLog } = createLogger(game)
  const pass = createPass(game)

  return {
    printGame,
    printLog,
    pass,
  }
}
