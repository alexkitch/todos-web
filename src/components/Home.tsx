import { useMemo, useState } from 'react'
import { Todo } from '@api/Todo'
import { useGetTodos } from '@hooks/useGetTodos'
import { TodoList } from '@components/TodoList'
import { TodoItem } from '@components/TodoItem/TodoItem'
import { Button } from '@components/Button/Button'
import { PlusIcon } from '@components/icons/PlusIcon'
import { useCreateTodo } from '@hooks/useCreateTodo'
import { useDeleteTodo } from '@hooks/useDeleteTodo'
import { DeleteIcon } from '@components/icons/DeleteIcon'
import { EditIcon } from '@components/icons/EditIcon'
import { useEditTodo } from '@hooks/useEditTodo'
import { TickIcon } from '@components/icons/TickIcon'
import { ToggleIcon } from '@components/icons/ToggleIcon'

export const Home = () => {
    const { todos, isFetchingTodos } = useGetTodos()
    const { createTodo } = useCreateTodo()
    const { deleteTodo } = useDeleteTodo()
    const { editTodo } = useEditTodo()
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

    const pendingItems = useMemo(
        () => todos.filter((todo: Todo) => todo.isPending),
        [todos]
    )
    const completedItems = useMemo(
        () => todos.filter((todo: Todo) => !todo.isPending),
        [todos]
    )

    const handleEndEditTodo = (todo: Todo, description: string) => {
        setEditingTodo(null)
        editTodo({
            ...todo,
            description,
        })
    }

    const handleToggleTodoCompletion = (todo: Todo) => {
        setEditingTodo(null)
        editTodo({
            ...todo,
            isPending: !todo.isPending,
        })
    }

    const renderTodoList = (todos: Todo[], pending: boolean) => {
        return (
            <TodoList
                suspense={isFetchingTodos}
                addButton={
                    pending && (
                        <Button
                            onClick={() => createTodo('')}
                            colour="success"
                            size="large"
                        >
                            <PlusIcon />
                        </Button>
                    )
                }
            >
                {todos.map((todo: Todo) => (
                    <TodoItem
                        key={todo.id}
                        description={todo.description}
                        isEditing={editingTodo === todo}
                        isComplete={!pending}
                        onChange={(description: string) =>
                            handleEndEditTodo(todo, description)
                        }
                        deleteButton={
                            <Button
                                onClick={() => deleteTodo(todo.id)}
                                colour="danger"
                            >
                                <DeleteIcon />
                            </Button>
                        }
                        editButton={
                            <Button
                                onClick={() => setEditingTodo(todo)}
                                colour="secondary"
                            >
                                <EditIcon />
                            </Button>
                        }
                        toggleButton={
                            <Button
                                onClick={() => handleToggleTodoCompletion(todo)}
                                colour="neutral"
                            >
                                <ToggleIcon />
                            </Button>
                        }
                    />
                ))}
            </TodoList>
        )
    }

    return (
        <div className="w-full xl:w-8/12 bg-gradient-to-b from-neutral-200 to-neutral-400 mx-auto h-screen p-10 flex space-x-10">
            {renderTodoList(pendingItems, true)}
            {renderTodoList(completedItems, false)}
        </div>
    )
}
