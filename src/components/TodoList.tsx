import { LoadingSpinner } from './LoadingSpinner'

export interface TodoListProps {
    children?: React.ReactNode
    suspense?: boolean
}

export const TodoList = (props: TodoListProps) => {
    return (
        <section className="h-full flex-1 relative">
            {props.children}
            {props.suspense && (
                <div className="absolute top-0 left-0 w-full h-full bg-neutral-300 bg-opacity-50 flex justify-center items-center">
                    <LoadingSpinner />
                </div>
            )}
        </section>
    )
}
