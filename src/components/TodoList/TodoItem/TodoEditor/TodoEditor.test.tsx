import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import { TodoEditor } from './TodoEditor'

describe('TodoItem component', () => {
    test('renders the textbox with initial value set', () => {
        // Act
        render(<TodoEditor initialValue="Test description" />)
        // Assert
        const textbox = screen.getByRole('textbox')
        expect(textbox).toBeTruthy()
        expect(textbox.textContent).toBe('Test description')
    })

    test('triggers the submit callback when the form is submitted', () => {
        // Arrange
        const onSubmit = vi.fn()
        // Act
        render(<TodoEditor onSubmit={onSubmit} />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        // Assert
        expect(onSubmit).toHaveBeenCalled()
    })
})
