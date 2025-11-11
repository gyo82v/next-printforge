"use client"

import Link from "next/link"
import logoIcon from "@/public/printforge-logo-icon.svg"
import logo from "@/public/printforge-logo.svg"
import { usePathname } from "next/navigation"

export default function Header(){
    const pathname = usePathname()
    const link = `font-bold text-neutral-500 text-sm 
                  transition-transform transition-colors duration-300 ease-in-out
                  hover:scale-105 active:scale-95 hover:text-orange-400 `
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
                <Link 
                  href="/3d-models" 
                  className={`${link} ${pathname.startsWith("/3d-models") ? "text-orange-400" : "text-neutral-500"}`}
                >
                    3D MODELS
                </Link>
                <Link 
                  href="/about" 
                  className={`${link} ${pathname === "/about" ? "text-orange-400" : "text-neutral-500"}`}
                >
                    ABOUT
                </Link>
            </nav>
        </header>
    )
}