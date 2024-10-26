// @ts-expect-error ignore the next line
import React from 'react'
import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('it should display hello world', () => {
    render(<App />)
    expect(screen.getByText(/hello world/i)).toBeInTheDocument()
    expect(screen.getByText(/hello world/i)).toBeVisible()
  })
})
