import CategoriesNavbar from "@/components/CategoriesNavbar"
import { getAllCategories } from "@/lib/categories"
import type { ReactNode } from "react"
import type { Category } from "@/types"

type Props = {
  children : ReactNode
}

export default function CategoriesLayout({children}:Props){
    const categories:Category[] = getAllCategories()
    return(
        <div className="flex flex-col sm:flex-row sm:items-center sm:my-auto">
            <CategoriesNavbar categories={categories} />
            {children}
        </div>
    )

}