import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET: Fetch all books
export async function GET() {
  const books = await prisma.book.findMany();
  return NextResponse.json(books);
}

// POST: Add a new book
export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Invalid book name" }, { status: 400 });
    }

    const newBook = await prisma.book.create({
      data: { name },
    });

    return NextResponse.json(newBook, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 } // ✅ Corrected syntax
    );
  }
}
