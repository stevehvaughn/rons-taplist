'use client'
import { useState } from "react"
import BeerCard from "./beercard"
import mLogo from "../../../public/images/m-logo.jpeg"
 
export default function Beerlist() {
  const [beers, setBeers] = useState([{
    id: 1,
    image: mLogo,
    name: "Pils",
    style: "Pilsner",
    brewery: "Matteson Brewing",
    description: "Delicious pilsner",
    abv: 4,
    ibu: 80
  }])
  const allBeers = beers.map(beer => (
    <BeerCard 
    key={beer.id}
    beer={beer}/>
  ))

 
  return (
    <section>
      {allBeers}
    </section>
  )
}