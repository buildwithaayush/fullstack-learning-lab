import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
   const {searchParams} = new URL(req.url);
   const username = searchParams.get("username")

   if(!username){
      return NextResponse.json(
    { message: "username is required" },
    { status: 400 }
  );
  
   }

    const user = await prisma.user.findFirst({
        where: {
            username
        }
    })
    const name = user?.username
    const password = user?.password
    return NextResponse.json({
        message: "userfound",
        name,
        password
    })
}