import Image from "next/image";
import Link from "next/link";
import hero from "./images/hero.png"

export default function Home() {
  const main = `flex flex-1 flex-col items-center text-neutral-700  
                sm:flex-row sm:justify-center sm:px-10`
  const section = `p-4 flex flex-col gap-6 mt-10 mb-10 `
  const h1 = `font-bold text-5xl`
  const optionalP = `hidden sm:flex font-semibold text-neutral-500 text-sm -mb-4`
  const p = `font-semibold text-lg text-neutral-500`
  const link = `border-2 border-neutral-700 w-40 text-center font-bold py-2 
                transition-transform duration-300 ease-in-out
                hover:scale-105 active:scale-95`
  const imageStyle = `w-full h-full`
  return (
    <main className={main}>
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
        src={hero}
        alt="logo"
        width="401"
        height="401"  
        className={imageStyle}   
      />
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