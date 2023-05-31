import { render, screen } from '@testing-library/react';
import Main from '.';

describe('Main', () => {
  const props = {
    title: 'Main Title',
    subtitle: 'Main Subtitle',
    imageSrc: 'image.jpg',
    imageAlt: 'Image',
    hasBorderLeft: true,
  };

  it('renders the title and subtitle correctly', () => {
    render(<Main {...props} />);
    const titleElement = screen.getByText('Main Title');
    const subtitleElement = screen.getByText('Main Subtitle');

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the image correctly', () => {
    render(<Main {...props} />);
    const imageElement = screen.getByAltText('Image');

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'image.jpg');
  });

  it('applies the hasBorderLeft style when hasBorderLeft prop is true', () => {
    render(<Main {...props} />);
    const subtitleElement = screen.getByText('Main Subtitle');

    expect(subtitleElement).toHaveStyle('border-left: 1px solid');
  });

  it('does not render the subtitle when not provided', () => {
    const { container } = render(
      <Main {...props} subtitle={''} />
    );
    const subtitleElement = screen.queryByText('Main Subtitle');

    expect(subtitleElement).not.toBeInTheDocument();
    expect(container.firstChild).not.toContainHTML('Main Subtitle');
  });
});
