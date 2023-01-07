import { createGame } from '@/create-game'
import { Candidate } from '@/types'

import { createLogger } from './logger'
import { createPass } from './pass'
import { createDraw } from './draw'

export const createGameController = (...candidates: Candidate[]) => {
  const game = createGame(candidates)
  const { printGame, printLog, write } = createLogger(game)
  const pass = createPass(game, write)
  const draw = createDraw(game, write)

  return {
    printGame,
    printLog,
    pass,
    draw,
  }
}
