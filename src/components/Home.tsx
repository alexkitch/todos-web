import { useQuery } from 'react-query'
import axios from 'axios'
import { Todo } from '@api/Todo'
import { useGetTodos } from '@hooks/useGetTodos'

export const Home = () => {
    const { todos, isLoading } = useGetTodos()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos?.map((todo) => (
                    <li key={todo.id}>{todo.description}</li>
                ))}
            </ul>
        </div>
    )
}
