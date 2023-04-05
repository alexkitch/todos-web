import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { TodoList } from './TodoList'

describe('TodoList component', () => {
    test.each([
        [true, true],
        [false, false],
    ])('loading spinner visibility is %s when suspense is %s', (suspense) => {
        // Act
        render(<TodoList suspense={suspense} />)
        // Assert
        const spinner = screen.queryByRole('progressbar')
        if (suspense) {
            expect(spinner).toBeTruthy()
        } else {
            expect(spinner).toBeFalsy()
        }
    })
})
