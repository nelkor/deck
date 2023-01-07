import { GameData } from '@/types'

export const getIndexOfWinner = (game: GameData) => {
  const alivePlayers = game.players.filter(player => !player.hasLost)

  game.hasEnded = alivePlayers.length === 1

  return game.players.indexOf(alivePlayers[0])
}
