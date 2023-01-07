import { GameData } from '@/types'

const finishLine = '--- Вывод данных завершён ---'

export const createLogger = (game: GameData) => {
  const log: string[] = []

  return {
    printGame() {
      console.log(JSON.stringify(game, null, 2))

      return finishLine
    },
    printLog() {
      console.log(log.join('\n'))

      return finishLine
    },
    write(text: string) {
      log.push(text)
    },
  }
}
