export function Heading({ children }: { children: React.ReactNode }) {
    return (
        <div className="text-3xl font-bold leading-9 text-default-foreground">
            {children}
        </div>
    )
}
