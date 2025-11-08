import { getAllModels } from "@/lib/models"

import Modelcard from "@/components/ModelCard"

export default async function ModelsPage() {
    const data = await getAllModels()
    console.log("data:", data)

    const modelArr = data.map(m => (
        <Modelcard key={m.id} data={m} />
    ))

    return(
        <main className="mx-auto px-4 py-8">
            {modelArr}
        </main>
    )
    
}