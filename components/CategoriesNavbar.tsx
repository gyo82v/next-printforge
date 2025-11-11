import Link from "next/link"
import type { Category } from "@/types"

type Props = {
    categories : Category[]
}

export default function CategoriesNavbar({categories}:Props){
    const nav = `flex sm:flex-col gap-2 overflow-x-auto  whitespace-nowrap 
                 sm:overflow-visible scrollbar-hide px-2 pb-10 pt-2 
                 sm:px-20 sm:pb-0 sm:pt-40`
    const link = `uppercase text-neutral-400 text-xs sm:text-lg flex-shrink-0
                  font-semibold`
    const linksNav = categories.map((c:Category) => (
        <Link 
          href={`/3d-models/categories/${c.slug}`} 
          key={c.slug} 
          className={link}
        >
            {c.displayName}
        </Link>
    ))
    return(
        <nav className={nav}>
            <Link href="/3d-models" className={link}>All</Link>
            {linksNav}
        </nav>
    )
}