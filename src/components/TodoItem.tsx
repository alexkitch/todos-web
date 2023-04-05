import { Button } from './Button'
import { DeleteIcon } from './icons/DeleteIcon'

export interface TodoItemProps {
    deleteButton?: React.ReactNode
    description?: string
}

export const TodoItem = (props: TodoItemProps) => {
    return (
        <li className="w-full bg-purple-800 text-white p-5 rounded-xl cursor-pointer flex items-center">
            <p className="flex-1" role="contentinfo">
                {props.description}
            </p>
            {props.deleteButton}
        </li>
    )
}
