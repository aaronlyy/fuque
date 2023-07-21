import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

export async function GET(req, { params }) {

  // search question with objectid
  let question;
  try {
    question = await prisma.question.findUnique({
      where: {
        id: params.qid
      }
    })
  }
  catch (e) {
    const data = {message: "Prisma error"};
    return NextResponse.json(data, {status: 400});
  }

  const data = {message: "Question found!", question};
  return NextResponse.json(data, {status: 200});
}