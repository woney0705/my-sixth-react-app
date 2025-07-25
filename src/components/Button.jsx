

export default function Button({children, type, className, onClick, disabled=false}) {
    return (
        <button type={type} className={"btn " + className} {...(onClick ? {onClick}: {}) } disabled={disabled} >
            {children}
        </button>
    )
}