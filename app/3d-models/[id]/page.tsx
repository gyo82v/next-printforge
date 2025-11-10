import { FaRegHeart } from "react-icons/fa"
import { getModelById } from "@/lib/models"
import type { ModelDetailPageProps } from "@/types"
import Pill from "@/components/Pill"
import hero from "@/public/hero-image-square.png"
import Image from "next/image"


export default async function ModelDetailPage({params}:ModelDetailPageProps){
    const {id} = await params
    const model = await getModelById(id)

    return(
        <main className="p-4  w-full">
            <article className="flex flex-col mx-auto gap-4 sm:flex-row shadow-lg
                                 mt-10 rounded-b-lg w-full max-w-6xl p-3 sm:items-center sm:gap-10">
                <figure className="aspect-square relative overflow-hidden shadow-lg rounded-lg sm:flex-1">
                    <Image 
                      src={hero} 
                      alt="logo" 
                      width={724} 
                      height={724} 
                      className="absolute object-cover w-full h-full inset-0"
                    />
                </figure>
                <section className="flex flex-col gap-8 pb-6 sm:flex-1"> 
                    <div className="flex items-center gap-1 text-neutral-500">
                        <FaRegHeart />
                        <p>{model.likes}</p>
                    </div>
                    <h1 className="font-bold text-3xl">{model.name}</h1>
                    <div>
                        <Pill>{model.category}</Pill>
                    </div>
                    <p className="text-lg">{model.description}</p>
                    <p className="text-neutral-400">
                        {`Added on ${new Date(model.dateAdded).toLocaleDateString()}`}
                    </p>
                </section>
            </article>
        </main>
    )
}