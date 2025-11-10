import { FaRegHeart } from "react-icons/fa"
import type { ModelDetailPageProps } from "@/types"


export default async function ModelDetailPage({params}:ModelDetailPageProps){
    const id = await params
    console.log("id:", id)
    return(
        <main>
            <h1>{id.id}</h1>
        </main>
    )
}