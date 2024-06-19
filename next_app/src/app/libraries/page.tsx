'use server';

export default async function LibrariesList() {
  const res = await fetch('http://localhost:3000/api/libraries');
  const libs: any[] = (await res.json()).libraries;
  console.log('libs', libs);
  return (
    <main>
      {libs.map(l => (
        <div key={l.id}>
          {l.title}
        </div>
      ))}
    </main>
  );
}
