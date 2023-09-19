import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request,
    { params : { id , menuId } }: { params: { id: string , menuId: string } }) {
    const menus = await prisma.menu.findFirst({
        where: {
            id: Number(menuId),
            restaurantId: Number(id)
        }
    });
    return NextResponse.json(menus);
}

export async function PUT (request: Request, 
    { params : { menuId } }: { params: { id: string , menuId: string } }) {
    const json = await request.json();
    const updated = await prisma.menu.update({
        where: {
            id: Number(menuId)
        },
        data: json
    })
    return NextResponse.json(updated);
}

export async function PATCH (request: Request,
    { params : { menuId } }: { params: { id: string , menuId: string } }) {
    const json = await request.json();
    const updated = await prisma.menu.update({
        where: {
            id: Number(menuId)
        },
        data: json
    })
    return NextResponse.json(updated);
}

export async function DELETE (request: Request,
    { params : { menuId } }: { params: { id: string , menuId: string } }) {
    const deleted = await prisma.menu.delete({
        where: {
            id: Number(menuId)
        }
    })
    return NextResponse.json(deleted);
}