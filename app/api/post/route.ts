import prisma from "@/lib/prismaClient";
import { BBS } from "../../types/types";
import { NextRequest, NextResponse } from "next/server";
import { RotateCwSquare } from "lucide-react";

export async function GET(req: NextRequest) {
  const allBBS: BBS[] = await prisma.post.findMany();
  return NextResponse.json(allBBS); // JSONを返す場合のNextResponse.json()も、戻り値はNextResponseのインスタンス
}

export async function POST(req: NextRequest) {
  const {username, title, content} = await req.json();
  const response = {message: ""};
  
  await prisma.post.create({
    data: {
      username,
      title,
      content,
    },
  }).then(()=> {
    response.message = "挿入完了"
  }).catch((err)=> {
    response.message = err;
  })

  return NextResponse.json(response);
}
