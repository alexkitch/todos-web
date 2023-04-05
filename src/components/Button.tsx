import { PlusIcon } from '@components/icons/PlusIcon'

export interface ButtonProps {
    children?: React.ReactNode
    onClick?: () => void
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            className="mx-auto flex items-center justify-center rounded-xl w-12 h-12 bg-neutral-500 hover:bg-neutral-700"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}
