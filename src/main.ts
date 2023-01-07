import { createGameController } from '@/game-controller'

const game = createGameController(
  { deck: [40, 80, 150, 160, 230, 420], hand: [40, 150, 230, 420] },
  { deck: [30, 140, 150, 920, 60], hand: [30, 150, 920, 60] },
)

Object.defineProperty(window, 'game', { get: () => game })
