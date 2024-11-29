import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'

describe('App', () => {
  it('1. should show welcome message when logged in', () => {
    const { container } = render(<App />)
    const welcomeMessage = container.querySelector('div')
    expect(welcomeMessage).toHaveTextContent('Welcome to React Lessons')
  })
})