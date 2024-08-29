import React from 'react'
import { render, screen, fireEvent, within } from '@testing-library/react'
import OrderSetter from './orderSetter'

const mockUnsortedData = [
    { type: 'folder', name: 'Folder 1', size: 5, files: [{ name: 'File 1', type: 'pdf', size: 10, added: '01-01-2003' }] },
    { type: 'file', name: 'File 2', type: 'doc', size: 100, added: '02-02-2010' },
    { type: 'file', name: 'File 3', type: 'gif', size: 50, added: '03-03-2010' }
  ]

describe('OrderSetter component', () => {
    test('renders the component with default props', () => {
        render(<OrderSetter unsortedData={mockUnsortedData} />)

        expect(screen.getByText('Sort files by:')).toBeInTheDocument()
        expect(screen.getByRole('radio', { name: "alphabetical" })).toBeInTheDocument()
        expect(screen.getByRole('radio', { name: "size" })).toBeInTheDocument()
        expect(screen.getByRole('radio', { name: "date" })).toBeInTheDocument()
    })

    test('displays files by size when size is selected in the state', () => {
        const mockDataDisplay = jest.fn();
        render(<OrderSetter unsortedData={mockUnsortedData}/>)

        const sizeButton = screen.getByRole('radio', { name: 'size' })
        fireEvent.click(sizeButton)

        const counterContainer = screen.getByTestId('fileDisplay');

        const items = within(counterContainer).getAllByRole('listitem');

        expect(items[0]).toHaveTextContent('File 1pdf');
        expect(items[1]).toHaveTextContent('File 3gif');
    });

    test('displays files by date when date is selected in the state', () => {
        const mockDataDisplay = jest.fn();
        render(<OrderSetter unsortedData={mockUnsortedData}/>)

        const sizeButton = screen.getByRole('radio', { name: 'date' })
        fireEvent.click(sizeButton)

        const counterContainer = screen.getByTestId('fileDisplay');

        const items = within(counterContainer).getAllByRole('listitem');

        expect(items[0]).toHaveTextContent('File 1pdf');
        expect(items[1]).toHaveTextContent('File 2doc');
    });

    test('displays files in alphabetical order when alphabetical is selected in the state', () => {
        const mockDataDisplay = jest.fn();
        render(<OrderSetter unsortedData={mockUnsortedData}/>)

        const sizeButton = screen.getByRole('radio', { name: 'alphabetical' })
        fireEvent.click(sizeButton)

        const counterContainer = screen.getByTestId('fileDisplay');

        const items = within(counterContainer).getAllByRole('listitem');

        expect(items[0]).toHaveTextContent('File 1pdf');
        expect(items[1]).toHaveTextContent('File 2doc');
    });
});