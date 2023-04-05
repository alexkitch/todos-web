import { Todo } from '@api/Todo'
import { ENVIRONMENT } from '@environment/dev'
import axios from 'axios'
import { useQuery } from 'react-query'

export const useGetTodos = () => {
    const { data: todos = [], isFetching } = useQuery<Todo[]>(
        'todos',
        async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            return await axios.get(ENVIRONMENT.API_URL).then((res) => res.data)
        },
        {
            refetchOnWindowFocus: false,
        }
    )

    return { todos, isFetchingTodos: isFetching }
}
