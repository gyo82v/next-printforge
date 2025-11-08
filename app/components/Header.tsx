import Link from "next/link"

export default function Header(){
    const header = `flex justify-between items-center p-4 sm:px-10`
    const div = ``
    const nav = `flex gap-8`
    const link = `font-bold text-neutral-500 text-sm`
    return(
        <header className={header}>
            <Link href="/" className={div}>
                <img
                  src="/printforge-logo-icon.svg"
                  className="block sm:hidden h-8 w-8"
                  alt="mobile icon"
                />
                <img
                  src="/printforge-logo.svg"
                  className="hidden sm:block h-10 w-40"
                  alt="desktop icons"
                />
            </Link>
            <nav className={nav}>
                <Link href="/" className={link}>3D MODELS</Link>
                <Link href="about" className={link}>ABOUT</Link>
            </nav>
        </header>
    )
}