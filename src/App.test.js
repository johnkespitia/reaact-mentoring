import { render, screen } from '@testing-library/react';
import App , {sum} from './App';
import { Provider } from 'react-redux'
import store from './Redux/store'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});

test('renders learn react link', () => {
  render(<Provider store={store}>
      <App/>
  </Provider>);
  const linkElement = screen.getByText(/Login/);
  expect(linkElement).toBeInTheDocument();
});

test('show toolbar', () => {
  render(<Provider store={store}>
    <App/>
</Provider>);
  const linkElement = screen.getByText(/Demo App/);
  expect(linkElement).toBeInTheDocument();
});