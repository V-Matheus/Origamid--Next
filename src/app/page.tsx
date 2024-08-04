'use client';
import setCookie from '@/actions/set-cookie';
import Acesso from '@/components/acesso';
import ServerFetch from '@/components/serverFetch';

export default function HomePage() {
  function handleClick() {
    console.log('teste');
    setCookie('segredo', '123456');
  }

  return (
    <main>
      <h1>Home</h1>
      {/* <Acesso /> */}
      {/* <ServerFetch /> */}

      <button onClick={handleClick}>Definit Cookie</button>
    </main>
  );
}
