import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            id: parseInt(id, 10)
        }
    });
    return NextResponse.json(restaurant);
}

export async function PUT (request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const json = await request.json();
    const updated = await prisma.restaurant.update({
        where: {
            id: parseInt(id, 10)
        },
        data: json
    })
    return NextResponse.json(updated);
}

export async function PATCH (request: Request, { params } : { params: {id: string } }) {
    const id = params.id;
    const json = await request.json();
    const updated = await prisma.restaurant.update({
        where: {
            id: parseInt(id, 10)
        },
        data: json
    })
    return NextResponse.json(updated);
}

export async function DELETE (request: Request, { params } : { params: {id: string } }) {
    const id = params.id;
    const deleted = await prisma.restaurant.delete({
        where: {
            id: parseInt(id, 10)
        }
    })
    return NextResponse.json(deleted);
}