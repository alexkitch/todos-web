import { Todo } from '@api/Todo'
import axios from 'axios'
import { useQuery } from 'react-query'

export const useGetTodos = () => {
    const { data: todos, isLoading } = useQuery<Todo[]>('todos', () =>
        axios.get('http://localhost:5005/todos').then((res) => res.data)
    )

    return { todos, isLoading }
}
