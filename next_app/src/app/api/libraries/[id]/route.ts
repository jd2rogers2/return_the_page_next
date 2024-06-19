import { NextResponse } from 'next/server';


export const dynamic = 'force-dynamic';

const libraries = [
  { id: 1, title: 'my lil lib', location: 'here', owner: { id: 1, username: 'james' } },
  { id: 2, title: 'free books', location: 'there', owner: { id: 1, username: 'james' } },
];

export async function GET(request: Request, context: { params: { id: String }}) {
  const id = Number(context.params.id);
  const library = libraries.find(l => l.id === id);
  return NextResponse.json({ library }, { status: 200 });
}
