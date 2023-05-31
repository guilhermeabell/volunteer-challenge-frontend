import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from '.'

describe('<Button />', () => {
  it('should render Button with default props', () => {
    render(<Button>Click me</Button>)

    const button = screen.getByText('Click me')
    expect(button).toBeInTheDocument()
  })
})
