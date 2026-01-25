import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    const data = await req.json();
    const username = data.username
    const password = data.password

    console.log(username , password);



    return NextResponse.json({
        message: "you have been signed up"
    })
}