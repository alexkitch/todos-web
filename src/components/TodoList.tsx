import { LoadingSpinner } from './LoadingSpinner'

export interface TodoListProps {
    addButton?: React.ReactNode
    children?: React.ReactNode
    suspense?: boolean
}

export const TodoList = (props: TodoListProps) => {
    return (
        <section className="h-full flex-1 relative flex flex-col">
            <ul className="flex-1 space-y-2 overflow-y-auto">
                {props.children}
            </ul>
            <div className="pt-10">{props.addButton}</div>

            {props.suspense && (
                <div
                    role="progressbar"
                    className="absolute top-0 left-0 w-full h-full bg-neutral-300 bg-opacity-50 flex justify-center items-center"
                >
                    <LoadingSpinner />
                </div>
            )}
        </section>
    )
}
