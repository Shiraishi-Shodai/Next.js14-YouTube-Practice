import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";

export async function GET(req:Request, {params}: {params: {id: string}}) {
    const BBSid = params.id;
    const bbsDetailData = await prisma.post.findUnique({
        where: {
            id: parseInt(BBSid)
        }
    })
    return NextResponse.json(bbsDetailData);
    
}