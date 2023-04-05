import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { Button } from './Button'

describe('Button component', () => {
    test('renders the children', () => {
        // Act
        render(<Button>Test</Button>)
        // Assert
        expect(screen.getByRole('button').textContent).toBe('Test')
    })

    test('calls the onClick callback when clicked', () => {
        // Arrange
        const onClick = vi.fn()
        // Act
        render(<Button onClick={onClick} />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        // Assert
        expect(onClick).toHaveBeenCalled()
    })
})
