import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import OrderSetter from './orderSetter'

const mockUnsortedData = [
    { type: 'folder', name: 'Folder 1', files: [{ name: 'File 1', type: 'pdf', size: 10, added: '01-01-2003' }] },
    { type: 'file', name: 'File 2', type: 'doc', size: 100, added: '02-02-2010' }
  ]

describe('OrderSetter component', () => {
    test('renders the component with default props', () => {
      render(<OrderSetter unsortedData={mockUnsortedData} />)
      
      expect(screen.getByText('Sort files by:')).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: "alphabetical" })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: "size" })).toBeInTheDocument()
      expect(screen.getByRole('radio', { name: "date" })).toBeInTheDocument()
    })
    
})
