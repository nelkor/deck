import { generateId } from './unique-id'
import { takeCards } from './cards-operations'
import { Candidate, GameData, Player, CardInPlay } from './types'

export const createGame = (candidates: Candidate[]): GameData => {
  const players: Player[] = candidates.map(candidate => {
    const deck: CardInPlay[] = candidate.deck.map(baseId => ({
      baseId,
      idInPlay: generateId(),
    }))

    const hand = takeCards(deck, candidate.hand)

    return {
      deck,
      hand,
      hasLost: false,
    }
  })

  return {
    players,
    activePlayerIndex: 0,
    round: 1,
    stage: 'action',
    winnerIndex: null,
  }
}
