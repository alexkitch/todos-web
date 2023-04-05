import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Button } from './Button'

describe('Button component', () => {
    test('renders the children', () => {
        // Act
        render(<Button>Test</Button>)
        // Assert
        expect(screen.getByRole('button').textContent).toBe('Test')
    })
})
