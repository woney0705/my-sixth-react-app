

export default function Button({children, type, className, onClick}) {
    return (
        <button type={type} className={"btn " + className} {...(onClick ? {onClick}: {}) }>
            {children}
        </button>
    )
}