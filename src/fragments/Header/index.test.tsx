import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders the title correctly', () => {
    render(<Header />);
    const titleElement = screen.getByText('Lacrei');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the navigation menu items correctly', () => {
    render(<Header />);
    const homeMenuItem = screen.getByRole('link', { name: 'Home' });
    const userMenuItem = screen.getByText('Pessoa Usuária');
    const professionalMenuItem = screen.getByText('Profissional');

    expect(homeMenuItem).toBeInTheDocument();
    expect(userMenuItem).toBeInTheDocument();
    expect(professionalMenuItem).toBeInTheDocument();
  });
});
