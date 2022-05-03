import { render, screen } from '@testing-library/react';
import Search from './Search';

test('renders learn react link', () => {
  render(<Search />);
  const linkElement = screen.getByText('Volver');
  expect(linkElement).toBeInTheDocument();
});
