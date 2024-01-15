'use client'
import { useState } from "react"
import BeerCard from "./beercard"
 
export default function Beerlist() {
  const [beers, setBeers] = useState([{
    id: 1,
    image: "",
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