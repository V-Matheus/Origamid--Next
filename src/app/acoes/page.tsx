import { Atualizar } from '@/components/atualizar';
import React, { useEffect, useState } from 'react';

type Acao = {
  nome: string;
  preco: string;
  atualizada: string;
};

export default async function AcoesPage() {
  const response = await fetch('https://api.origamid.online/acoes/lua', {
    next: {
      // revalidate: 0,
      tags: ['acoes']
    },
  });

  const acao = (await response.json()) as Acao;

  return (
    <main>
      <h1>Ações</h1>
      <Atualizar />
      <h2>{acao.nome}</h2>
      <p>Preço {acao.preco}</p>
      <p>Atualizada: {acao.atualizada}</p>
    </main>
  );
}
