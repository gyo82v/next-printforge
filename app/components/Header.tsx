import Link from "next/link"
import logoIcon from "@/public/printforge-logo-icon.svg"
import logo from "@/public/printforge-logo.svg"

export default function Header(){
    const link = `font-bold text-neutral-500 text-sm`
    return(
        <header className="flex justify-between items-center p-4 sm:px-10">
            <Link href="/">
                <img
                  src={logoIcon.src}
                  className="block sm:hidden h-8 w-8"
                  alt="mobile icon"
                />
                <img
                  src={logo.src}
                  className="hidden sm:block h-10 w-40"
                  alt="desktop icons"
                />
            </Link>
            <nav className="flex gap-8">
                <Link href="/" className={link}>3D MODELS</Link>
                <Link href="about" className={link}>ABOUT</Link>
            </nav>
        </header>
    )
}