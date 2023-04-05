import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'
import { ENVIRONMENT } from '@environment/dev'

export const useDeleteTodo = () => {
    const queryClient = useQueryClient()
    const deleteTodo = useMutation<void, Error, string>(
        async (id) => {
            const response = await axios.delete(`${ENVIRONMENT.API_URL}/${id}`)
            return response.data
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries('todos')
            },
        }
    )
    return {
        deleteTodo: deleteTodo.mutate,
        isDeletingTodo: deleteTodo.isLoading,
    }
}
