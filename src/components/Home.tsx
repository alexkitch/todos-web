import { Todo } from '@api/Todo'
import { useGetTodos } from '@hooks/useGetTodos'
import { TodoList } from '@components/TodoList'
import { TodoItem } from '@components/TodoItem'

export const Home = () => {
    const { todos, isLoading } = useGetTodos()
    return (
        <div className="w-4/5 bg-orange-300 mx-auto h-screen p-10 flex">
            <TodoList suspense={isLoading}>
                {todos.map((todo: Todo) => (
                    <TodoItem key={todo.id} description={todo.description} />
                ))}
            </TodoList>
            <TodoList suspense={isLoading} />
        </div>
    )
}
