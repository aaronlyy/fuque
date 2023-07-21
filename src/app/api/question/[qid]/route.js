import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function GET(req, { params }) {

  // search question with objectid
  try {
    const question = await prisma.question.findUnique({
      where: {
        id: params.qid
      }
    })
    const data = {message: "Question found!", question};
    return NextResponse.json(data, {status: 200});
  }
  catch (e) {
    const data = {message: "Prisma error"};
    return NextResponse.json(data, {status: 400});
  }
}