import Image from "next/image"
import hero from "./images/hero.png"

export default function About(){
    const sectionMain = ``
    const section1 = ``
    const section2 = ``
    const subSection1 = ``
    const subSection2a = ``
    const subSection2b = ``
    const imgDiv = ``
    const heroImg = ``
    return(
        <main className="flex-1 flex flex-col text-neutral-700">
            <section className={sectionMain}>
                <section className={section1}>
                    <div className={imgDiv}>
                        <Image
                          src={hero}
                          width={401}
                          height={401}
                          className={heroImg}
                          alt="logo"
                        />
                    </div>
                    <section className={subSection1}>
                        <p>ABOUT PRINFORGE</p>
                        <h1>Empowering makers worlswide</h1>
                        <p>
                            Founded in 2023, PrintForge has quickly become the go-to platform
                            for 3D printing enthusiasts, makers, and professional designers
                            to share and discover amazing STL files for 3D printing.
                        </p>
                        <p>
                            Our mission is to foster a vibrant community where creativity meets
                            technology, enabling anyone to bring their ideas to life through 3D printing.
                        </p>
                    </section>
                </section>
                <section className={section2}>
                    <section className={subSection2a}>
                        <p>components here</p>
                        <p>components here</p>
                        <p>components here</p>
                    </section>
                    <section className={subSection2b}>
                        <h2>Our vision</h2>
                        <p>
                            At PrintForge, we believe that 3D printing is revolutionizing the
                            way we create, prototype, and manufacture. Our platform serves as
                            a bridge between designers and makers, enabling the sharing of knowledge
                            and creativity that pushes the boundaries of what's possible with 3D printing.
                        </p>
                        <p>
                            Whether you're a hobbyist looking for your next weekend project, an educator
                            seeking teaching materials, or a professional designer wanting to share
                            your creations, PrintForge provides the tools and community to support
                            your journey in 3D printing.
                        </p>
                    </section>
                </section>
            </section>
        </main>
    )
}