import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders the menu items correctly', () => {
    render(<Footer />);
    const homeMenuItem = screen.getByText('Home');
    const userMenuItem = screen.getByText('Pessoa Usuária');
    const professionalMenuItem = screen.getByText('Profissional');

    expect(homeMenuItem).toBeInTheDocument();
    expect(userMenuItem).toBeInTheDocument();
    expect(professionalMenuItem).toBeInTheDocument();
  });

  it('renders the social media icons correctly', () => {
    render(<Footer />);
    const facebookIcon = screen.getByRole('img', { name: 'Facebook Logo' });
    const instagramIcon = screen.getByRole('img', { name: 'Instagram Logo' });
    const linkedinIcon = screen.getByRole('img', { name: 'Linkedin Logo' });

    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();
  });

  it('renders the subtitle correctly', () => {
    render(<Footer />);
    const subtitle = screen.getByText('Desafio front-end lacrei');
    expect(subtitle).toBeInTheDocument();
  });
});