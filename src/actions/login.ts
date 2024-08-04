'use server';

import { cookies } from 'next/headers';

export default async function login(username: string, password: string) {
  try {
    const response = await fetch('https://api.origamid.online/conta/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    console.log(response.ok);

    if (!response.ok) {
      return Response.json(
        { autorizado: false, erro: 'Dados incorretos' },
        { status: 401 },
      );
    }

    const data = await response.json();
    cookies().set('token', data.token, { httpOnly: true, secure: true });
    return true;
  } catch (erro) {
    return false;
  }
}
