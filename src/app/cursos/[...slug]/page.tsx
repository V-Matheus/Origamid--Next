import React from 'react';

type PageParams = {
  params: {
    slug: string[];
  };
};

type Curso = {
  id: number;
  nome: string;
  descricao: string;
  aulas: [{ id: string; nome: string; ordem: string }];
};

export default async function CursosPage({ params }: PageParams) {
  console.log(params);

  const response = await fetch(
    `http://api.origamid.online/cursos/${params.slug[0]}`,
  );
  const data = (await response.json()) as Curso;

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.descricao}</p>
      <div>
        {data.aulas.map((aula) => (
          <div key={aula.id}>
            <h3>Aula: {aula.ordem}</h3>
            <p>{aula.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
