import { Todo } from '@api/Todo'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { ENVIRONMENT } from '@environment/dev'

export const useCreateTodo = () => {
    const queryClient = useQueryClient()
    const postTodo = useMutation<Todo, Error, string>(
        async (description) => {
            const response = await axios.post<Todo>(ENVIRONMENT.API_URL, {
                description,
            } as Todo)
            return response.data
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('todos')
            },
        }
    )
    return { createTodo: postTodo.mutate, isCreatingTodo: postTodo.isLoading }
}
