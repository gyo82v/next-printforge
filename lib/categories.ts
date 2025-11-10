import categories from "@/data/categories.json"
import type { Category } from "@/types" 

export function getAllCategories():Category[]{
    return categories
}

export function getCategoriesBySlug(slug:string){
    const category = categories.find((c:Category) => c.slug === slug)
    if(!category)throw new Error(`category with slug:${slug} not found`)
    return category
}

export function getDisplayNameFromSlug(slug:string):string{
    const category = getCategoriesBySlug(slug)
    return category.displayName
}