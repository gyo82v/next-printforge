import { getAllModels } from "@/lib/models"

import Modelcard from "@/components/ModelCard"

export default async function ModelsPage() {
    const data = await getAllModels()
    const wrapper = ` w-11/12 mx-auto px-4 py-8 flex flex-col gap-6 
                     sm:flex-wrap sm:flex-row justify-center`

    const modelArr = data.map(m => (
        <Modelcard key={m.id} data={m} />
    ))

    return(
        <main className={wrapper}>
            {modelArr}
        </main>
    )
    
}