import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App, {default_weather} from "../App";

import Sidebar from '../components/nav'

it('Able to open search panel', () => {
  render(<Sidebar weather={default_weather} />);
  const search = screen.getByRole('button', {name: /search/i});
  userEvent.click(search);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
})

it('Able to search the locations', () => {
  render(<App />);
  const search = screen.getByRole('button', {name: /search/i});
  userEvent.click(search);

  const input = screen.getByRole('textbox');
  userEvent.type(input, 'Pune');
  userEvent.click(screen.getByRole('button', {name: /search/i}));
  setTimeout(() => {
    expect(screen.getByRole('link', {
      name: /pune chevron_right/i
    })).toBeInTheDocument();
    console.log(screen.getByRole('link', {
      name: /pune chevron_right/i
    }))
    userEvent.click(screen.getByText('Pune').parentElement);
    expect(search).toBeInTheDocument();
    expect(screen.queryByText('Pune')).toBeInTheDocument();
    expect(screen.getByText('Shower')).not.toBeInTheDocument()
  }, 3000)
})
