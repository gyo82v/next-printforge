import { FaCopy , FaGlobeAmericas, FaFlag } from "react-icons/fa";

type Props = {
    title : string,
    icon: string,
    children : string,
    border? : boolean
}

export default function FeatureCard({title, icon, border, children}:Props){
  
    const iconType = icon === "globe" ? <FaGlobeAmericas className="h-5 w-5" /> :
                     icon === "flag" ? <FaFlag className="h-5 w-5" /> :
                     icon === "paper" ? <FaCopy className="h-5 w-5" /> : ""
                     
    return(
        <article className={`flex flex-col gap-2 ${border ? "sm:border-r sm:border-neutral-400 sm:pr-4" : ""}`}>
            <div className="flex items-center gap-1">
                {iconType}
                <h3 className="font-bold text-lg">{title}</h3>
            </div>
            <p className="text-neutral-500 text-sm">
                {children}
            </p>
        </article>
    )
}