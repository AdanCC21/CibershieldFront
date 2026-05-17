export default function Loader() {
    const divClass = "size-2 bg-(--primary-color) rounded-full animate-bounce";
    return (
        <div className="flex items-center justify-center gap-2 size-fit">
            <div className={divClass}></div>
            <div className={`${divClass} [animation-delay:0.2s]`}></div>
            <div className={`${divClass} [animation-delay:0.4s] `}></div>
        </div>
    )
}
