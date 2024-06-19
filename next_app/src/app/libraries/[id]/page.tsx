'use server';

import Link from "next/link";


export default async function Library({ params: { id }}: { params: { id: Number }}) {
  const res = await fetch(`http://localhost:3000/api/libraries/${id}`, { cache: 'no-store' });
  const lib: any = (await res.json()).library;
  return (
    <main>
      <Link href="/libraries">back to list</Link>
      <div>
        {lib.title}
      </div>
    </main>
  );
}
