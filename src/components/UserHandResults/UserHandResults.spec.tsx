import React from 'react'
import { screen, render } from '@testing-library/react'
import { UserHandResults } from './UserHandResults'

describe('Render UserHandResults component', () => {
  beforeEach(() => {
    render(<UserHandResults />)
  })
  test('Render User hand elements correctly', () => {
    expect(screen.getByTestId('user-hand')).toBeInTheDocument()
  })
})
