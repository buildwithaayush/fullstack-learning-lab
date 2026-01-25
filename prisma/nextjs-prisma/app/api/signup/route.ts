import { NextRequest, NextResponse } from "next/server";
import {prisma} from "@/lib/prisma";
export async  function POST(req: NextRequest){
    const data = await req.json();
    const username = data.username;
    const password = data.password;

  const user =  await prisma.user.create({
    data: {
        username,
        password
    }
   });

   return NextResponse.json({
    message:"signed up successfuly ✅",
    user
   })



}