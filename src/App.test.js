import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders OrderSetter component', () => {
  render(<App />)

  const orderSetter = screen.getByTestId('orderSetter')
  expect(orderSetter).toBeInTheDocument()
});
