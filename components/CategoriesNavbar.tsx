"use client"

import Link from "next/link"
import type { Category } from "@/types"
import { usePathname } from "next/navigation"

type Props = {
    categories : Category[]
}

export default function CategoriesNavbar({categories}:Props){
    const pathname = usePathname()

    const nav = `flex sm:flex-col gap-2 overflow-x-auto  whitespace-nowrap 
                 sm:overflow-visible scrollbar-hide px-2 pb-10 pt-2 
                 sm:pr-20 sm:pl-6 sm:pb-0 sm:pt-40`
    const link = `uppercase text-xs sm:text-lg flex-shrink-0 font-semibold`

    const linksNav = categories.map((c:Category) => (
        <Link 
          href={`/3d-models/categories/${c.slug}`} 
          key={c.slug} 
          className={`${link} ${pathname === `/3d-models/categories/${c.slug}` ? "text-orange-400" : "text-neutral-400"}`}
        >
            {c.displayName}
        </Link>
    ))
    return(
        <nav className={nav}>
            <Link 
              href="/3d-models" 
              className={`${link} ${pathname === "/3d-models" ? "text-orange-400" : "text-neutral-400"}`}
              >
                All
            </Link>
            {linksNav}
        </nav>
    )
}