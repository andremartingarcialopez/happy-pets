export type MessageErrorProps = {
    error: string
}

export function MessageError({ error }: MessageErrorProps) {
    return (
        <p className="p-1 mt-3 text-center uppercase text-white font-semibold bg-red-700 rounded-lg">{error}</p>
    )
}
