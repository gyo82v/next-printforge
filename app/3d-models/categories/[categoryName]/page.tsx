import type { CategoryPageProps } from "@/types";
import { getCategoriesBySlug } from "@/lib/categories";

export default async function categoryPage({params}:CategoryPageProps){
    const {categoryName} = await params
    const category = getCategoriesBySlug(categoryName)
    return(
        <p>{category.displayName}</p>
    )

}