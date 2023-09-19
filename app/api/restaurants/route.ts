import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const restaurants = await prisma.restaurant.findMany();
    return NextResponse.json(restaurants);

}

export async function POST(request: Request) {
    const json = await request.json();

    const created = await prisma.restaurant.create({
        data: {
            ...json
        }
    })

    return new NextResponse(JSON.stringify(created), {
        status: 201
    })
}

