import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { TodoItem } from './TodoItem'

describe('TodoItem component', () => {
    test('renders the description', () => {
        // Act
        render(<TodoItem description="Test description" />)
        // Assert
        expect(screen.getByRole('contentinfo').textContent).toBe(
            'Test description'
        )
    })
})
