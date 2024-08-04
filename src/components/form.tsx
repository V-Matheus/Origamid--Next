'use client';
import login from '@/actions/login';
import React, { FormEvent, useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await login(username, password);
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
