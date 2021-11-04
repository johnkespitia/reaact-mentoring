import { render, screen } from '@testing-library/react';
import Toolbar from './Toolbar';
import { Provider } from 'react-redux'
import store from '../Redux/store'
import { BrowserRouter } from 'react-router-dom';
test('renders learn react link', () => {
  render(<Provider store={store}>
    <BrowserRouter><Toolbar /></BrowserRouter></Provider>);
  const linkElement = screen.getByText(/Demo App/);
  expect(linkElement).toBeInTheDocument();
});
