import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Sidebar and main content are rendering', () => {
  render(<App />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});
