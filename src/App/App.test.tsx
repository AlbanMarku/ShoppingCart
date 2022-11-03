import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { WrappedApp, App } from './App';

describe('app', () => {
  it('renders hello word', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello');
  });
});
