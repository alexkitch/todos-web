export interface TodoItemProps {
    description?: string
}

export const TodoItem = (props: TodoItemProps) => {
    return (
        <div className="w-full h-12 bg-neutral-400 rounded-lg mb-2">
            {props.description}
        </div>
    )
}
