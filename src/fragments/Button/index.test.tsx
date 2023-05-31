import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '.';

describe('<Button />', () => {
  it('should render Button with default props', () => {
    render(<Button>Click me</Button>);

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      border: none;
      color: inherit;
      background-color: inherit;
    `);
  });

  it('should render Button with custom props', () => {
    render(
      <Button hasBorder color="red" bgColor="blue">
        Custom Button
      </Button>
    );

    const button = screen.getByText('Custom Button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(`
      border: 1px solid red;
      color: red;
      background-color: blue;
    `);
  });
});
