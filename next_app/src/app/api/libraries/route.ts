import { NextResponse } from 'next/server';


export const dynamic = 'force-dynamic';

const owner = { id: 1, username: 'james' };
const libraries = [
  { id: 1, title: 'my lil lib', location: 'here', owner },
  { id: 2, title: 'free books', location: 'there', owner },
];

export async function GET(request: Request) {
  return NextResponse.json({ libraries }, { status: 200 });
}

export async function POST(request: Request) {
  const newLib = await request.json();
  libraries.push({ ...newLib, id: libraries.length + 1, owner });
  return NextResponse.json({ libraries }, { status: 200 });
}
