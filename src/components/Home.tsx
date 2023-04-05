import { Todo } from '@api/Todo'
import { useGetTodos } from '@hooks/useGetTodos'
import { TodoList } from '@components/TodoList'
import { TodoItem } from '@components/TodoItem'
import { useMemo } from 'react'

export const Home = () => {
    const { todos, isLoading } = useGetTodos()

    const pendingItems = useMemo(
        () => todos.filter((todo: Todo) => todo.isPending),
        [todos]
    )
    const completedItems = useMemo(
        () => todos.filter((todo: Todo) => !todo.isPending),
        [todos]
    )

    return (
        <div className="w-4/5 bg-purple-300 mx-auto h-screen p-10 flex space-x-10">
            <TodoList suspense={isLoading}>
                {pendingItems.map((todo: Todo) => (
                    <TodoItem key={todo.id} description={todo.description} />
                ))}
            </TodoList>
            <TodoList suspense={isLoading}>
                {completedItems.map((todo: Todo) => (
                    <TodoItem key={todo.id} description={todo.description} />
                ))}
            </TodoList>
        </div>
    )
}
