import { useMemo } from 'react'
import { Todo } from '@api/Todo'
import { useGetTodos } from '@hooks/useGetTodos'
import { TodoList } from '@components/TodoList'
import { TodoItem } from '@components/TodoItem'
import { Button } from '@components/Button'
import { PlusIcon } from '@components/icons/PlusIcon'
import { useCreateTodo } from '@hooks/useCreateTodo'
import { useDeleteTodo } from '@hooks/useDeleteTodo'
import { DeleteIcon } from './icons/DeleteIcon'

export const Home = () => {
    const { todos, isFetchingTodos } = useGetTodos()
    const { createTodo } = useCreateTodo()
    const { deleteTodo } = useDeleteTodo()

    const pendingItems = useMemo(
        () => todos.filter((todo: Todo) => todo.isPending),
        [todos]
    )
    const completedItems = useMemo(
        () => todos.filter((todo: Todo) => !todo.isPending),
        [todos]
    )

    const handleDeleteTodo = (todo: Todo) => {
        deleteTodo(todo.id)
    }

    const handleCreateTodo = () => {
        createTodo('New todo')
    }

    const renderTodoList = (todos: Todo[], canAddTodos: boolean) => {
        return (
            <TodoList
                suspense={isFetchingTodos}
                addButton={
                    canAddTodos && (
                        <Button onClick={handleCreateTodo}>
                            <PlusIcon />
                        </Button>
                    )
                }
            >
                {todos.map((todo: Todo) => (
                    <TodoItem
                        key={todo.id}
                        description={todo.description}
                        deleteButton={
                            <Button onClick={() => handleDeleteTodo(todo)}>
                                <DeleteIcon />
                            </Button>
                        }
                    />
                ))}
            </TodoList>
        )
    }

    return (
        <div className="w-4/5 bg-purple-300 mx-auto h-screen p-10 flex space-x-10">
            {renderTodoList(pendingItems, true)}
            {renderTodoList(completedItems, false)}
        </div>
    )
}
