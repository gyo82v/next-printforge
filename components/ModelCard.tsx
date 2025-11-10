import { FaRegHeart } from "react-icons/fa"
import type { ModelCardProps } from "@/types"
import Link from "next/link"
import Image from "next/image"
import hero from "@/public/hero-image-square.png"
import Pill from "./Pill"

export default function Modelcard({data}:ModelCardProps){
    const wrapper = ` rounded-lg shadow-lg sm:max-w-80 
                      transition-transform transition-colors transition-shadow duration-300 ease-in-out
                      hover:scale-105 active:scale-95 hover:shadow-xl hover:opacity-80`
    const imgStyle = `rounded-t-lg sm:max-h-70`
    const section = ` rounded-b-lg p-4 
                     flex flex-col gap-3`
    const h1 = `font-bold text-2xl`
    const p = `text-neutral-600 text-lg`
    const div = `flex items-center gap-1 text-neutral-500`

    return(
        <article className={wrapper}>
            <Link href={`/3d-models/${data.id}`}>
              <Image src={hero} width={724} height={724} className={imgStyle} alt="logo" />
              <section className={section}>
                  <h1 className={h1}>{data.name}</h1>
                  <p className={p}>{data.description}</p>
                  <div className="my-2">
                      <Pill>{data.category}</Pill>
                  </div>
                  <div className={div}>
                      <FaRegHeart />
                      <p>{data.likes}</p>
                  </div>
              </section>
            </Link>
        </article>
    )
}