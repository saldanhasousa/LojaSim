export function criarProdutoCard(produto) {
  return `
    <div class="card">
      <img src="${produto.imagem}" alt="${produto.nome}">
      <div class="card-body">
        <h3>${produto.nome}</h3>
        <p>${produto.descricao}</p>
        <span class="preco">${produto.preco.toLocaleString()} Kz</span>
      </div>
    </div>
  `;
}
