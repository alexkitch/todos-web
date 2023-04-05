import './Button.css'

export interface ButtonProps {
    children?: React.ReactNode
    colour?: 'primary' | 'secondary' | 'danger' | 'neutral' | 'success'
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    size?: 'small' | 'medium' | 'large'
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            role="button"
            type={props.type}
            className={`mx-auto flex items-center justify-center rounded-xl shadow-md ${
                props.colour || 'primary'
            } button-${props.size || 'medium'}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}
