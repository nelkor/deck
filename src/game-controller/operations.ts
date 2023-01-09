import { GameData } from '@/types'

export const setPlayerToLose = (game: GameData, index: number) => {
  game.players[index].hasLost = true

  const alivePlayers = game.players.filter(player => !player.hasLost)

  game.winnerIndex =
    alivePlayers.length === 1 ? game.players.indexOf(alivePlayers[0]) : null
}
