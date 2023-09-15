import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function GET(request: NextRequest) {
    
}

export async function POST(request: NextRequest) {
    const reqBody = await request.json();
    console.log(reqBody);
    return NextResponse.json({ reqBody }, { status: 201 });
}