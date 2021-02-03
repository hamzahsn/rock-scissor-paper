import React from 'react'
import { screen, render } from '@testing-library/react'
import { PlayerInfo } from './PlayerInfo'

const mockPlayerInfo = {
  name: 'Hamza',
  score: 1,
  weapon: 1
}

describe('Render Player component', () => {
  beforeEach(() => {
    render(<PlayerInfo player={mockPlayerInfo} />)
  })
  test('Render Player info elements correctly', () => {
    expect(screen.getByTestId('player-name')).toBeInTheDocument()
    expect(screen.getByTestId('player-score')).toBeInTheDocument()
  })
})
