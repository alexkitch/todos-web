import { Button } from '@components/Button'
import { TickIcon } from '@components/icons/TickIcon'
import { useRef } from 'react'

export interface TodoEditorProps {
    initialValue?: string
    onSubmit?: (value: string) => void
}

export const TodoEditor = (props: TodoEditorProps) => {
    let inputRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        props.onSubmit?.(inputRef.current?.value || props.initialValue || '')
    }

    return (
        <form className="w-full flex space-x-4" onSubmit={handleSubmit}>
            <textarea
                ref={inputRef}
                defaultValue={props.initialValue}
                rows={8}
                className="flex-1 text-black"
            />
            <Button type="submit">
                <TickIcon />
            </Button>
        </form>
    )
}
