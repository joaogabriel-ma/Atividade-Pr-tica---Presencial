# Livraria Página Viva — Catálogo (Cadastro de Livro)

Projeto desenvolvido para a atividade prática de HTML, CSS e JavaScript.

## Estrutura

```
projeto/
├── index.html
├── css/
│   └── estilo.css
├── imagens/
│   └── capa-livro.png
└── js/
    └── script.js
```

## Respostas

**1. Qual é o papel de um servidor Web ao carregar esta página?**

O servidor Web recebe a requisição HTTP feita pelo navegador (por exemplo, ao
digitar o endereço ou clicar em um link) e devolve os recursos solicitados —
o arquivo `index.html`, o `estilo.css`, o `script.js` e a imagem da capa —
para que o navegador possa montar e exibir a página.

**2. Caminho relativo a partir de `paginas/sobre.html` até `imagens/capa-livro.png`**

```html
<img src="../imagens/capa-livro.png" alt="Capa do livro">
```

Usa-se `../` porque o arquivo `sobre.html` está uma pasta abaixo da raiz do
projeto (dentro de `paginas/`). O `../` sobe um nível, voltando para a raiz
`projeto/`, e a partir dali é possível descer até `imagens/capa-livro.png`.

**3. Boas práticas de escrita HTML aplicadas**

- Todas as tags foram corretamente aninhadas e fechadas, mantendo a
  hierarquia clara entre `header`, `main` e `footer`.
- Nenhum `id` foi repetido na página (cada `id`, como `btn-adicionar`,
  `contato` e `cabecalho`, aparece uma única vez).
- A indentação foi mantida consistente, refletindo visualmente a hierarquia
  dos elementos, o que facilita a leitura e manutenção do código.

## Como testar

Abra o arquivo `index.html` em qualquer navegador. Não é necessário servidor
nem instalação de dependências.
