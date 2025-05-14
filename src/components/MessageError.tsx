export type MessageErrorProps = {
    error: string
}

export function MessageError({ error }: MessageErrorProps) {
    return (
        <p className="p-1 mt-3 text-center uppercase text-red-500 border border-red-500 font-semibold text-sm rounded-lg">{error}</p>
    )
}
