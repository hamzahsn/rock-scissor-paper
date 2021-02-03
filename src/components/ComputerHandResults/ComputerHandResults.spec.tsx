// import React from 'react'
// import { screen, render, fireEvent, waitFor, act } from '@testing-library/react'
// import { ComputerHandResults } from './ComputerHandResults'

// describe('Render computer hand component with desired behaviors', () => {
//   beforeEach(() => {
//     render(<ComputerHandResults />)
//   })
//   test('Render computer hand elements correctly', () => {
//     expect(screen.getByTestId('weapon-image')).toBeInTheDocument()
//     expect(screen.getByTestId('second-number')).toBeInTheDocument()
//     expect(screen.getByTestId('submit-button')).toBeInTheDocument()
//     expect(screen.getByRole('button')).toHaveTextContent('PROCESS')
//   })

//   test('Getting error when inputs are invalid', async () => {
//     const firstNumber = screen.getByTestId('first-number') as HTMLInputElement
//     const secondNumber = screen.getByTestId('second-number') as HTMLInputElement
//     const formSubmit = screen.getByTestId('submit-button')

//     act(() => {
//       fireEvent.change(firstNumber, { target: { value: 20 } })
//       fireEvent.change(secondNumber, { target: { value: 1 } })
//       fireEvent.click(formSubmit)
//     })

//     await waitFor(() => {
//       expect(screen.getByTestId('firstNumber-error')).toBeInTheDocument()
//     })
//   })

//   test('Getting error when inputs are invalid', async () => {
//     const firstNumber = screen.getByTestId('first-number')
//     const secondNumber = screen.getByTestId('second-number')
//     const formSubmit = screen.getByTestId('submit-button')

//     window.alert = jest.fn(() => ({}))
//     act(() => {
//       fireEvent.change(firstNumber, { target: { value: 1 } })
//       fireEvent.change(secondNumber, { target: { value: 9 } })
//       fireEvent.click(formSubmit)
//     })

//     await waitFor(() => {
//       expect(window.alert).toBeTruthy()
//     })
//   })
// })
