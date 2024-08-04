'use client';
import React, { FormEvent, useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = { username, password };

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) window.location.href = '/';
  }

  return (
    <form onSubmit={(r) => handleSubmit(r)}>
      <label htmlFor="login">
        <h3>Nome</h3>
        <input
          value={username}
          onChange={(v) => setUsername(v.target.value)}
          type="text"
          name="login"
          id="login"
        />
      </label>
      <label htmlFor="senha">
        <h3>Senha</h3>
        <input
          value={password}
          onChange={(v) => setPassword(v.target.value)}
          type="password"
          name="senha"
          id="senha"
        />
      </label>
      <button>Enviar</button>
    </form>
  );
}
