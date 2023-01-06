import { createGameController } from './game-controller'

const game = createGameController(
  { deck: [4, 8, 15, 16, 23, 42], hand: [4, 15, 23, 42] },
  { deck: [3, 14, 15, 92, 6], hand: [3, 15, 92, 6] },
)

Object.defineProperty(window, 'game', { get: () => game })
