import {render, screen} from '@testing-library/react'
import Card from '../components/card'

describe('Card UI Tests', () => {
  test('All fields are optional', () => {
    render(<Card/>)
    expect(screen.getByRole('region')).toBeInTheDocument()
  })
  test('All contents are renderd', () => {
    const Header = () => <span>Header</span>
    const Content = () => <h2>Content</h2>
    const Footer = () => <img src='does-not-exist.png' alt='Alternate text' />
    render(<Card header={<Header/>} content={<Content/>} footer={<Footer/>} />)

    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByRole('heading', {level: 2})).toBeInTheDocument() // Content
    expect(screen.getByAltText('Alternate text')).toBeInTheDocument()
  })
})
