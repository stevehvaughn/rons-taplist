import { NextResponse, NextRequest } from "next/server";

export async function GET() {
 return NextResponse.json({name: "Steve"})
}
 
export async function HEAD(request) {}
 
export async function POST(request) {}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}