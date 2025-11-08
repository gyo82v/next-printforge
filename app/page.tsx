import Image from "next/image";
import Link from "next/link";
import heroRound from "@/public/hero-image.png"

export default function Home() {
  const main = `flex-1 flex flex-col sm:justify-center text-neutral-700 sm:px-10`
  const sectionWrapper = `flex  flex-col max-w-7xl mx-auto
                          sm:flex-row sm:items-center sm:gap-6`
  const section = `p-4 flex flex-1 flex-col gap-6 mt-10 mb-10  `
  const h1 = `font-bold text-5xl`
  const optionalP = `hidden sm:block font-semibold text-neutral-500 text-sm -mb-4`
  const p = `font-semibold text-lg text-neutral-500`
  const link = `border-2 border-neutral-700 w-40 text-center font-bold py-2 sm:mt-10
                transition-transform duration-300 ease-in-out
                hover:scale-105 active:scale-95`
  const imageStyle = `sm:w-11/12 flex-1`
  return (
    <main className={main}>
      <section className={sectionWrapper}>
        <section className={section}>
          <p className={optionalP}>YOUR GO-TO PLATFORM FRON 3DPRINTING FILES</p>
          <h1 className={h1}>Discover what's possible with 3D printing</h1>
          <p className={p}>
            Join our community of creators and explore a vast
            library of user-submitted models.
          </p>
          <Link className={link} href="/">BROWSE MODELS</Link>
        </section>
        <Image
          src={heroRound}
          alt="logo"
          width="1206"
          height="1201"  
          className={imageStyle}   
        />
      </section>
    </main>
  );
}





/*
 <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />



*/