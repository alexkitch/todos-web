import { Todo } from '@api/Todo'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { ENVIRONMENT } from '@environment/dev'

export const useEditTodo = () => {
    const queryClient = useQueryClient()
    const putTodo = useMutation<Todo, Error, Todo>(
        async (todo) => {
            const response = await axios.put<Todo>(ENVIRONMENT.API_URL, todo)
            return response.data
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('todos')
            },
        }
    )
    return { editTodo: putTodo.mutate, isEditingTodo: putTodo.isLoading }
}
