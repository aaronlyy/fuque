// this route is only for adding new questions to the database
// when auth is implemented, it is going to be secured

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from '@/prisma';

export async function POST(req) {
  // get request body
  const json = await req.json();
  // check if body is valid (question, language, pid, cid)
  if (!json.question | !json.pid) {
    const data = {message: "Request JSON is missing some stuff"};
    return NextResponse.json(data, {status: 400});
  }

  // if body is valid, add needed information to json (created_at, modified_at)
  const date = new Date();

  // save question to database
  try {
    await prisma.question.create({
      data: {
        question: json.question,
        pid: json.pid,
        created_at: date,
        modified_at: date
      }
    })
  }
  catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      const data = {
        "message": "Primsa Error"
      }
      return NextResponse.json(data, {status: 400});
    }
  }

  // send return
  const data = {
    message: "Question added!"
  };
  return NextResponse.json(data, {status: 201});
}