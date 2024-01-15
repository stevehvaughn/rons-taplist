'use client'
import { useState } from "react"
import BeerCard from "./beercard"
 
export default function Beerlist() {
  const [beers, setBeers] = useState([])
  const allBeers = beers.map(beer => {
    <BeerCard 
    key={beer.id}
    beer={beer}/>
  })
 
  return (
    <section>
      {allBeers}
    </section>
  )
}