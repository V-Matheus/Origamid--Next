import React from 'react';

type PageParams = {
  params: {
    id: string;
  };
};

type Produto = {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: number;
};

export default async function ProdutoPage({ params }: PageParams) {
  const response = await fetch(
    `http://api.origamid.online/produtos/${params.id}`,
  );
  const data = (await response.json()) as Produto;
  console.log(data);

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <h2>{data.preco}</h2>
    </div>
  );
}
