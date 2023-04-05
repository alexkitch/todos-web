import { useQuery } from 'react-query'
import axios from 'axios'
import { Todo } from '@api/Todo'
import { useGetTodos } from '@hooks/useGetTodos'
import { TodoList } from './TodoList'

export const Home = () => {
    const { todos, isLoading } = useGetTodos()
    return (
        <div className="w-4/5 bg-neutral-300 mx-auto min-h-screen p-10">
            <TodoList />
            <TodoList />
        </div>
    )
}
