import { NextResponse } from 'next/server';


export const dynamic = 'force-dynamic';

const libraries = [{ id: 1, title: 'my lil lib', location: 'here', owner: { id: 1, username: 'james' } }];

export async function GET(request: Request) {
  console.log('here');
  return NextResponse.json({ libraries }, { status: 200 });
  // return { libraries };
}
