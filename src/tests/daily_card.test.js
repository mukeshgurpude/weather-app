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
})

xit('Default unit celsius', async () => {
  render(<Main weather={default_weather} />)
  const button = screen.getByRole('BUTTON', {name: '°C'})
  userEvent.click(button)
  const temp = await screen.findAllByText(/\d+°C/)
  expect(temp.length).toBeGreaterThan(0)
})
