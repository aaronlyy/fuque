// this route is only for adding new questions to the database
// when auth is implemented, it is going to be secured

import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from '@/prisma';

export async function POST(req) {
  // get request body
  const json = await req.json();
  // check if body is valid (question, language, pid, cid)
  if (!json.question | !json.language | !json.pid | !json.cid) {
    const data = {message: "Request JSON is missing some stuff"};
    return NextResponse.json(data, {status: 400});
  }
  // check if question already exists in pack
  const check = await prisma.question.findUnique({
    where: {
      question: json.question,
      pid: json.pid
    }
  });


  // if body is valid, add needed information to json (created_at, modified_at, uid)
  const date = new Date();

  // save question to database
  try {
    await prisma.question.create({
      data: {
        question: json.question,
        qid: 0,
        cid: json.cid,
        pid: json.pid,
        uid: 0,
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