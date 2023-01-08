import { CardInPlay } from './types'

export const takeCards = (
  cards: CardInPlay[],
  baseIds: number[]
): CardInPlay[] =>
  baseIds.map(baseId => {
    const index = cards.findIndex(card => card.baseId === baseId)

    if (index === -1) {
      throw new Error('attempt to take a non-existent card')
    }

    return cards.splice(index, 1)[0]
  })
