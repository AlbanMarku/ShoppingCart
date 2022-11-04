import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('app home', () => {
  it('renders hello word', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('I am home');
  });
});
