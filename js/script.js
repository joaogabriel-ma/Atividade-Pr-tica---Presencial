/*
  Este script roda diretamente no navegador do usuário, sem precisar
  recarregar a página. Ele reage ao clique no botão "Adicionar ao carrinho"
  e atualiza a interface (lista do carrinho e contador). Diferente do HTML
  (que define a estrutura) e do CSS (que define a aparência), o JavaScript
  é responsável pelo comportamento e pela interatividade da página.
*/

const botao = document.getElementById("btn-adicionar");
const carrinho = document.getElementById("carrinho");
const contador = document.getElementById("contador");

let quantidade = 0;
const tituloDoLivro = "Dom Casmurro";

function adicionarAoCarrinho() {
  const novoItem = document.createElement("li");
  novoItem.textContent = "1x " + tituloDoLivro;
  carrinho.appendChild(novoItem);

  quantidade++;
  contador.textContent = quantidade;
}

botao.addEventListener("click", adicionarAoCarrinho);
