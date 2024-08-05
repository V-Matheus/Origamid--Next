'use client';

import adicionarProduto from '@/actions/adicionar-produto';
import { Produto } from '@/app/produtos/page';
import { FormEvent } from 'react';

export default function AdicionarProduto() {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data: Produto = {
      nome: event.currentTarget.nome.value,
      descricao: event.currentTarget.descricao.value,
      preco: Number(event.currentTarget.preco.value),
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.checked ? 1 : 0,
    };
    await adicionarProduto(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" id="nome" />

      <label htmlFor="preco">preço</label>
      <input type="text" name="preco" id="preco" />

      <label htmlFor="descricao">Descrição</label>
      <input type="text" name="descricao" id="descricao" />

      <label htmlFor="estoque">Estoque</label>
      <input type="text" name="estoque" id="estoque" />

      <label htmlFor="importado">
        <input type="checkbox" name="importado" id="importado" />
        Importado
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
}
