import { buscarProdutos} from '../server/produtosService.js';
import { buscarAcessorios } from '../server/buscarAcessorios.js';
import { criarProdutoCard } from '../components/produtoCard.js';
import {buscarDesktop } from '../server/buscarDesktop.js';


async function init() {
  const produtos = await buscarProdutos();
  const acessorios = await buscarAcessorios();
  const desktop = await buscarDesktop();
  const containerAcessorios = document.getElementById('acessorios');
  const containerProdutos = document.getElementById('produtos');
  const containerDesktop = document.getElementById('desktop');


  if (containerProdutos) {
    containerProdutos.innerHTML = produtos
      .map(criarProdutoCard)
      .join('');
  }

  if (containerAcessorios) {
    containerAcessorios.innerHTML = acessorios
      .map(criarProdutoCard)
      .join('');
  }

  if (containerDesktop) {
    containerDesktop.innerHTML = desktop
      .map(criarProdutoCard)
      .join('');
  }

}

init();
