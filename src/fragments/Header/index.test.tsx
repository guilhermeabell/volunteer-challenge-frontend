import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '.'

describe('Header', () => {
  it('renders the title correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )

    const titleElement = screen.getByTestId('header-title')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.textContent).toBe('Lacrei')
  })
})
