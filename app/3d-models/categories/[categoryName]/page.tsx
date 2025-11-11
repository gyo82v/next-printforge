import type { CategoryPageProps } from "@/types";
import { getModels } from "@/lib/models";
import Modelcard from "@/components/ModelCard";

export default async function categoryPage({params}:CategoryPageProps){
    const {categoryName} = await params
    const models = await getModels({category: categoryName})
    const wrapper = ` w-11/12 mx-auto px-4 py-8 flex flex-col gap-6 
                     sm:flex-wrap sm:flex-row justify-center`

    const modelArr = models.map(m => (
        <Modelcard data={m} key={m.id}/>
    ))
    return(
        <main className={wrapper}>
            {modelArr}
        </main>
    )

}