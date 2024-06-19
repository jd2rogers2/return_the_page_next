'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'


export default function LibrariesNew() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  }

  const handleSubmit = async () => {
    await fetch('/api/libraries', {
      method: "POST",
      body: JSON.stringify(formData),
    });
    router.push('/libraries');
  }

  return (
    <main>
      <form action={handleSubmit}>
        <input type="text" name="title" onChange={handleInputChange} />
        <input type="text" name="location" onChange={handleInputChange} />
        <input type="submit" />
      </form>
    </main>
  );
}
