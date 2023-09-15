import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {prisma} from '@/app/_utils/prismaSingleton';
import {User} from '@prisma/client';

export function GET(request: NextRequest) {
    
}

export async function POST(request: NextRequest) {
    try{
    const reqBody = await request.json();
    // console.log(reqBody);
    const createUser= await prisma.user.create({
        // Object Destructing
        data:{
            ...reqBody
        }
    });
    return NextResponse.json({createUser}, { status: 201 });
    }catch(e){
        return NextResponse.json({e}, { status: 500 });
    }
    
}