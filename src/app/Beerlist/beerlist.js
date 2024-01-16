'use client'
import { useState, useEffect } from "react"
import BeerCard from "./beercard"
// import mLogo from "../../../public/images/m-logo.jpeg"
 
export default function Beerlist() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/beers');
        if (response.ok) {
          const responseData = await response.json();
          setBeers(responseData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (err) {
        console.err('An unexpected error occurred', err);
      }
    };
    fetchData();
  }, [])

  const allBeers = beers.map(beer => (
    <BeerCard 
    key={beer.id}
    beer={beer}/>
  ))

  console.log(beers)

 
  return (
    <section>
      {allBeers}
    </section>
  )
}