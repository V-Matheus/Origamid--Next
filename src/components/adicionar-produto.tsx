'use client';

import adicionarProduto from '@/actions/adicionar-produto';
import { useFormState, useFormStatus } from 'react-dom';

export default function AdicionarProduto() {
  const [state, formAction] = useFormState(adicionarProduto, {
    errors: [],
  });
  console.log(state);

  function Button() {
    const status = useFormStatus();
    return (
      <button type="submit" disabled={status.pending}>
        Adicionar
      </button>
    );
  }

  return (
    <form action={formAction}>
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
      {state.errors.map((error, index) => (
        <p style={{ color: 'red' }} key={index}>
          {error}
        </p>
      ))}
      <Button />
    </form>
  );
}
