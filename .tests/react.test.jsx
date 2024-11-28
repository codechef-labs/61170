import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

describe('App Component', () => {
  it('1. displays welcome message when isLoggedIn is true', () => {
    render(<App />)
    expect(screen.getByText('Welcome to React Lessons')).toBeInTheDocument()
  })
})
