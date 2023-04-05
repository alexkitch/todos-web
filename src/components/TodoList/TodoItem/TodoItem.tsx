import { TodoEditor } from '@components/TodoList/TodoItem/TodoEditor/TodoEditor'
import './TodoItem.css'

export interface TodoItemProps {
    deleteButton?: React.ReactNode
    editButton?: React.ReactNode
    toggleButton?: React.ReactNode
    description?: string
    isEditing?: boolean
    isComplete?: boolean
    onChange?: (newValue: string) => void
}

export const TodoItem = (props: TodoItemProps) => {
    const backgroundClass = `todo-item${props.isComplete ? '-complete' : ''}`
    return (
        <li
            className={`w-full text-white p-5 rounded-xl flex space-x-4 ${backgroundClass}`}
        >
            {props.isEditing && (
                <TodoEditor
                    initialValue={props.description}
                    onSubmit={props.onChange}
                />
            )}
            {!props.isEditing && (
                <>
                    <p className="flex-1 text-lg" role="contentinfo">
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
