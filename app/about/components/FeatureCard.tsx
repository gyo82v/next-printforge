import { FaCopy , FaGlobeAmericas, FaFlag } from "react-icons/fa";

type Props = {
    title : string,
    icon: string,
    children : string,
    border? : boolean
}

export default function FeatureCard({title, icon, border, children}:Props){
    const wrapper = `flex flex-col gap-2 
                     ${border ? "sm:border-r sm:border-neutral-400 sm:pr-4" : ""}`
    const div = `flex items-center gap-1`
    const h3 = `font-bold text-lg`
    const iconsStyle = `h-5 w-5`
    const p = `text-neutral-500 text-sm`

    const iconType = icon === "globe" ? <FaGlobeAmericas className={iconsStyle} /> :
                     icon === "flag" ? <FaFlag className={iconsStyle} /> :
                     icon === "paper" ? <FaCopy className={iconsStyle} /> : ""
    return(
        <article className={wrapper}>
            <div className={div}>
                {iconType}
                <h3 className={h3}>{title}</h3>
            </div>
            <p className={p}>
                {children}
            </p>
        </article>
    )
}