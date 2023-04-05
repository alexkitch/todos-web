import { Button } from '@components/Button'
import { DeleteIcon } from '@components/icons/DeleteIcon'
import { TodoEditor } from './TodoEditor'

export interface TodoItemProps {
    deleteButton?: React.ReactNode
    editButton?: React.ReactNode
    toggleButton?: React.ReactNode
    description?: string
    isEditing?: boolean
    onChange?: (newValue: string) => void
}

export const TodoItem = (props: TodoItemProps) => {
    const colour = props.isEditing ? 'bg-purple-500' : 'bg-purple-800'

    return (
        <li
            className={`w-full text-white p-5 rounded-xl cursor-pointer flex space-x-4 ${colour}`}
        >
            {props.isEditing && (
                <TodoEditor
                    initialValue={props.description}
                    onSubmit={props.onChange}
                />
            )}
            {!props.isEditing && (
                <>
                    <p
                        className="flex-1 text-lg select-none"
                        role="contentinfo"
                    >
                        {props.description}
                    </p>
                    <div className="flex flex-col space-y-2">
                        {props.deleteButton}
                        {props.editButton}
                        {props.toggleButton}
                    </div>
                </>
            )}
        </li>
    )
}
