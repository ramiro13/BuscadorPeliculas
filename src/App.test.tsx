import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText('Prueba tecnica Ramiro');
  expect(linkElement).toBeInTheDocument();
  const linkElement2 = screen.getByText('Busca tu pelicula favorita');
  expect(linkElement2).toBeInTheDocument();
  const linkElement3 = screen.getByText('Ver peliculas favorita');
  expect(linkElement3).toBeInTheDocument();
});
