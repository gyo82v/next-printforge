import { FaRegHeart } from "react-icons/fa"
import type { Model } from "@/types"

type Props = {
    data : Model
}

export default function Modelcard({data}:Props){
    const wrapper = ``
    const imgStyle = ``
    const section = ``
    const h1 = ``
    const p = ``
    const btn = ``
    const div = ``
    const iconStyle = ``
    const likes = ``

    return(
        <article className={wrapper}>
            <img src={data.image} className={imgStyle} />
            <section className={section}>
                <h1 className={h1}>{data.name}</h1>
                <p className={p}>{data.description}</p>
                <button className={btn}>3D printer</button>
                <div className={div}>
                    <FaRegHeart className={iconStyle} />
                    <p className={likes}>{data.likes}</p>
                </div>
            </section>
        </article>
    )
}