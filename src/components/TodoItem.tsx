export interface TodoItemProps {
    description?: string
}

export const TodoItem = (props: TodoItemProps) => {
    return (
        <div
            className="w-full bg-purple-800 text-white p-5 rounded-xl"
            role="contentinfo"
        >
            {props.description}
        </div>
    )
}
