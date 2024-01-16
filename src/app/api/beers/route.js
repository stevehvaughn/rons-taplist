import { NextResponse, NextRequest } from "next/server";
import { beers } from "@/app/utils/allBeers";
import fs from 'fs/promises';
import path from 'path';

const filePath = path.resolve(process.cwd(), 'src/app/utils/allBeers.js');

export async function GET() {
 return NextResponse.json(beers)
}
 
export async function HEAD(request) {}
 
export async function POST(newBeer) {
    console.log(NextResponse.json(newBeer.body))
    try {
      // Parse incoming JSON data from the request body
      const newBeerData = newBeer.body;
  
      // Update the 'beers' array with the new data
      beers.push(newBeerData);
  
      // Write the updated data back to the file
      await fs.writeFile(filePath, `export const beers = ${JSON.stringify(beers)};`);
  
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ success: false, error: 'Error processing the request' });
    }
  }
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}