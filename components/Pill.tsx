type Props = {
    children : string
}

export default function Pill({children}:Props){
    const span = `border border-neutral-600 rounded-full py-2 px-3`
    return(
        <span className={span}>
            {children}
        </span>
    )
}