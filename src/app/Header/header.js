'use client'
import Image from "next/image"
import logo from '../../../public/images/m-logo.jpeg'
 
export default function Header() {
 
  return (
    <header>
        <Image 
            src={logo} 
            alt="Brewery logo"
            height={200}
            width={200}/>
        <h1>Ron's Taplist</h1>
    </header>
  )
}