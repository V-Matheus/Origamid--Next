import React from 'react';

type PageParams = {
  params: {
    slug: string[];
  };
};

export default async function CursosPage({ params }: PageParams) {
  return (
    <div>
      <h1>Cursos</h1>
    </div>
  );
}
