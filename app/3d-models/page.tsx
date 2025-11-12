import { getAllModels } from "@/lib/models"
import Form from "next/form"

import Modelcard from "@/components/ModelCard"

type Props = {searchParams : {query : string}}

export default async function ModelsPage({searchParams}:Props) {
    const query = (await searchParams)?.query || ""
    const data = await getAllModels()
    const wrapper = ` w-11/12 mx-auto px-4 py-8 flex flex-col gap-6 
                     sm:flex-wrap sm:flex-row justify-center`
    const input = `bg-neutral-100 w-full p-3 rounded-lg text-lg font-semibold shadow-lg border border-neutral-500
                   transition-transform transition-colors transition-shadow duration-300 ease-in-out 
                   hover:border-orange-400 focus:ring-2 focus:ring-orange-400 focus:bg-neutral-200 
                   focus:scale-105 focus:shadow-xl focus:outline-none`
    const filteredData = query ? data.filter(d => d.name.toLowerCase().includes(query.toLowerCase()) || 
                                          d.description.toLowerCase().includes(query.toLowerCase())) : data

    const modelArr = filteredData.map(m => (
        <Modelcard key={m.id} data={m} />
    ))

    return(
        <main>
            <Form action="/3d-models" className="w-11/12 md:max-w-6xl px-5 md:px-0 mx-auto">
              <input 
                type="text"
                name="query"
                placeholder="e.g. dragon"
                autoComplete="off"
                defaultValue={query}
                className={input}
                aria-label="enter name to starts search"            
              />
            </Form>
            <div className={wrapper}>
            {modelArr}
            </div>
        </main>
    )
    
}