export interface CardInPlay {
  baseId: number
  idInPlay: number
}

export interface Candidate {
  deck: number[]
  hand: number[]
}

export interface Player {
  deck: CardInPlay[]
  hand: CardInPlay[]
  hasLost: boolean
}

type GameStage = 'action' | 'drawing'

export interface Game {
  players: Player[]
  activePlayerIndex: number
  stage: GameStage
  hasEnded: boolean
}
