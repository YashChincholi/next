import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { error } from "console";
import prisma from "@/prisma/client";

// fetch data from db

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!user) {
    //   if not found then error 404
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // else return the data
  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validate the request body
  const body = await request.json();
  // If invalid, return error
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  // Fetch the user with given id
  // If fetch doesn't  exist , return error 404
  const user = await prisma.user.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  // update the user
  // Return the update user
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });
  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      id: params.id
    },
  });
  // fetch the data form db
  // if inavlid , return 404
  if (!user)
    return NextResponse.json({ error: "user not found" }, { status: 404 });

  prisma.user.delete({
    where: {
      id: user.id,
    },
  });
  // delete the user ,return 200
  return NextResponse.json({});
}
