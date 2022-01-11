import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TempButton from '../components/toggle_buttons'
import Main from '../components/main'
import {default_weather} from '../App'

it("renders without crashing", () => {
  render(<TempButton />);
  render(<Main weather={default_weather} />);
})

it('Default unit celsius', async () => {
  render(<Main weather={default_weather} />)
  const temp = await screen.findAllByText(/\d+°C/)
  expect(temp.length).toBeGreaterThan(0)
  expect(() => {
    screen.getAllByText(/\d+°F/)
  }).toThrow()
})

it('Unit can be changed', async () => {
  render(<Main weather={default_weather} />)
  userEvent.click(screen.getByRole('button', {name: '°F'}))
  let temp = await screen.findAllByText(/\d+°F/)
  expect(temp.length).toBeGreaterThan(0)
  
  expect(() => {
    screen.getAllByText(/\d+°C/)
  }).toThrow()

  userEvent.click(screen.getByRole('button', {name: '°C'}))
  temp = await screen.findAllByText(/\d+°C/)
  expect(temp.length).toBeGreaterThan(0)
  
  expect(() => {
    screen.getAllByText(/\d+°F/)
  }).toThrow()
})
