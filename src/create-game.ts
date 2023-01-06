import { generateId } from './unique-id'
import { takeCards } from './cards-operations'
import { Candidate, Game, Player, CardInPlay } from './types'

export const createGame = (candidates: Candidate[]): Game => {
  const players: Player[] = candidates.map(candidate => {
    const deck: CardInPlay[] = candidate.deck
      .map(baseId => ({ baseId, idInPlay: generateId() }))

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
    stage: 'action',
    hasEnded: false,
  }
}
