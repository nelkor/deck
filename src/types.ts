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

export type GameStage = 'action' | 'drawing'

export interface GameData {
  players: Player[]
  activePlayerIndex: number
  stage: GameStage
  hasEnded: boolean
}
