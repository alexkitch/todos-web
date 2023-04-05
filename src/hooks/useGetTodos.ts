import { Todo } from '@api/Todo'
import axios from 'axios'
import { useQuery } from 'react-query'

export const useGetTodos = () => {
    const { data: todos = [], isLoading } = useQuery<Todo[]>(
        'todos',
        async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            return await axios
                .get('http://localhost:5005/todos')
                .then((res) => res.data)
        }
    )

    return { todos, isLoading }
}
