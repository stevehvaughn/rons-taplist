'use client'
import Image from "next/image"

export default function BeerCard({beer}) {
    const {image, name, style, brewery, description, abv, ibu} = beer;

    return (
        <div>
            <Image 
            src={image} 
            alt="Logo for beer" 
            width={100} 
            height={100}/>
            <div>
                <h2>{name}</h2>
                <h4>{style}</h4>
                <h4>{brewery}</h4>
                <p>{description}</p>
            </div>
            <span>{abv}%</span>
            <span>{ibu}</span>
        </div>
    )
}