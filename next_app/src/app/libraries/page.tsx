'use server';

import Link from "next/link";

export default async function LibrariesList() {
  const res = await fetch('http://localhost:3000/api/libraries', { cache: 'no-store' });
  const libs: any[] = (await res.json()).libraries;
  return (
    <main>
      {libs.map(l => (
        <div key={l.id}>
          <Link href={`/libraries/${l.id}`}>{l.title}</Link>
        </div>
      ))}
    </main>
  );
}
