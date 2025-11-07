import Image from "next/image"
import hero from "./images/hero.png"
import FeatureCard from "./components/FeatureCard"

export default function About(){
    const sectionMain = `flex flex-col gap-10`
    const section1 = `flex flex-col gap-4`
    const section2 = `flex flex-col gap-10`
    const subSection1 = `flex flex-col gap-6`
    const subSection2a = `flex flex-col gap-4 border-y border-neutral-400 py-8`
    const subSection2b = `flex flex-col`
    const imgDiv = ``
    const heroImg = ``
    const p = `relative font-semibold text-neutral-500 pb-6 
               after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:h-[1px] 
               after:w-[60%] after:-translate-x-1/2 after:bg-neutral-400`
    return(
        <main className="flex-1 flex flex-col text-neutral-700 p-4">
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
                        <p className="text-neutral-500 text-sm font-semibold">ABOUT PRINFORGE</p>
                        <h1 className="font-bold text-5xl">Empowering makers worlswide</h1>
                        <p className="font-semibold text-neutral-500">
                            Founded in 2023, PrintForge has quickly become the go-to platform
                            for 3D printing enthusiasts, makers, and professional designers
                            to share and discover amazing STL files for 3D printing.
                        </p>
                        <p className="font-semibold text-neutral-500">
                            Our mission is to foster a vibrant community where creativity meets
                            technology, enabling anyone to bring their ideas to life through 3D printing.
                        </p>
                    </section>
                </section>
                <section className={section2}>
                    <section className={subSection2a}>
                        <FeatureCard title="100K+ Models" icon="paper">
                          Access our vast library of community-created 3D models, 
                          from practical tools to artistic creations.
                        </FeatureCard>
                        <FeatureCard title="Active Community" icon="globe">
                          Join thousands of makers who share tips, provide feedback,
                          and collaborate on projects.
                        </FeatureCard>
                        <FeatureCard title="free to Use" icon="flag">
                          Most models are free to download, with optional premium features
                          for power users.
                        </FeatureCard>
                    </section>
                    <section className={subSection2b}>
                        <h2 className="font-bold text-4xl mb-6">Our vision</h2>
                        <p className={p}>
                            At PrintForge, we believe that 3D printing is revolutionizing the
                            way we create, prototype, and manufacture. Our platform serves as
                            a bridge between designers and makers, enabling the sharing of knowledge
                            and creativity that pushes the boundaries of what's possible with 3D printing.
                        </p>
                        <p className="font-semibold text-neutral-500 pt-6">
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