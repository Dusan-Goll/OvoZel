import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('App displays h1 with text "OvoZel"', () => {
    render( <App/> );
    expect(screen.getByText(/OvoZel/)).toBeInTheDocument();
  });
});
