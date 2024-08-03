import Link from 'next/link';
import React from 'react';

type PageParams = {
  params: {
    id: string;
  };
};

type Cursos = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export default async function CursosPage() {
  const response = await fetch(`http://api.origamid.online/cursos`);
  const data = (await response.json()) as Cursos[];
  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {data.map((curso) => (
          <li style={{ cursor: 'pointer' }} key={curso.id}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
