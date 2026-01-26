import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const data = await req.json();
    const username = data.username;
    const password = data.password;

    const user = await prisma.user.create({
        data: {
            username,
            password
        }
    })

    return NextResponse.json({
        message: "you have been signedup successfully ✅",
        user
    })

}