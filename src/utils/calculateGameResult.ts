export function calculateWinner(firstPlayer: number, secondPlayer: number) {
  let winningPlayer = 2
  if (firstPlayer !== secondPlayer) {
    if (Math.abs(firstPlayer) === Math.abs(secondPlayer)) {
      winningPlayer = Math.max(firstPlayer, secondPlayer)
    } else {
      winningPlayer = Math.min(firstPlayer, secondPlayer)
    }
    return winningPlayer
  }
}
