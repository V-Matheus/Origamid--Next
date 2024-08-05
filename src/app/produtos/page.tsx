import ProdutosLista from '@/components/produtos-lista';
import React from 'react';

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>
      <ProdutosLista />
    </main>
  );
}
