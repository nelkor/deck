import { createGame } from './create-game'
import { Candidate } from './types'

export const createGameController = (...candidates: Candidate[]) => {
  const game = createGame(candidates)

  const checkGameCompletion = () => {
    const alivePlayersCount = game.players.reduce(
      (acc, cur) => acc + (cur.hasLost ? 0 : 1),
      0
    )

    if (alivePlayersCount === 1) {
      game.hasEnded = true
    }

    return game.hasEnded
  }

  const validateIndex = (index: number) => {
    if (game.activePlayerIndex !== index) {
      throw new Error('not your move')
    }
  }

  const pass = (index: number) => {
    validateIndex(index)

    if (game.stage !== 'action') {
      throw new Error('invalid stage for pass')
    }

    if (++game.activePlayerIndex >= game.players.length) {
      game.activePlayerIndex = 0
    }

    game.stage = 'drawing'

    const activePlayer = game.players[game.activePlayerIndex]

    if (!activePlayer.deck.length) {
      activePlayer.hasLost = true

      if (!checkGameCompletion()) {
        pass(game.activePlayerIndex)
      }
    }
  }

  return {
    print() {
      console.log(JSON.stringify(game, null, 2))
    },
    pass,
  }
}
