import React from 'react'
import { render, screen } from '@testing-library/react'
import DataDisplay from './dataDisplay'

describe('Sorter component', () => {
  
    test('renders folders, nested files and unnested files correctly', () => {
      const arrayToCheck = [
        { type: 'folder', name: 'Folder 1', files: [{ name: 'File 1' }] },
        { type: 'file', name: 'File 2' }
      ];
      render(<DataDisplay arrayToCheck={arrayToCheck} />)
      expect(screen.getByText('Folder 1')).toBeInTheDocument()
      expect(screen.getByText('File 1')).toBeInTheDocument()
      expect(screen.getByText('File 2')).toBeInTheDocument()
    })})