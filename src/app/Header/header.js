'use client'
import Image from "next/image"
 
export default function Header() {
    const logo = "";
 
  return (
    <header>
        <Image 
            src={logo} 
            alt="Brewery logo"/>
        <h1>Ron's Taplist</h1>
    </header>
  )
}