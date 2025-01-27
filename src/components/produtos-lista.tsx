export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ProdutosLista() {
  let produtos: Produto[] = [];
  try {
    const resposne = await fetch('https://api.origamid.online/produtos', {
      cache: 'no-store',
      // next: {
      //   revalidate: 5,
      // },
    });

    if (!resposne.ok) throw new Error('Erro ao carregar os produtos');
    produtos = (await resposne.json()) as Produto[];
  } catch (error) {
    return <p>Ocorreu um erro nessa lista de produtos.</p>;
  }

  return (
    <ul>
      {produtos.map((produto) => (
        <li key={produto.id}>
          {produto.nome}: R$ {produto.preco}
        </li>
      ))}
    </ul>
  );
}
