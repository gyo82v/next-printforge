import type { PillProps } from "@/types"

export default function Pill({className="", children}:PillProps){
    const span = `border border-neutral-600 rounded-full py-2 px-3 ${className || ""}`
    return(
        <span className={span}>
            {children}
        </span>
    )
}