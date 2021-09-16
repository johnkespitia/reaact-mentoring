import { render, screen } from '@testing-library/react';
import Toolbar from './Toolbar';

test('renders learn react link', () => {
  render(<Toolbar />);
  const linkElement = screen.getByText("Hello World");
  expect(linkElement).toBeInTheDocument();
});
