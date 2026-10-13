# Guia de Pontos Turísticos de Mogi das Cruzes

Projeto Desafio 01 (Vitrine Interativa) · Projeto Integrador · Fatec Zona Leste · Análise e Desenvolvimento de Sistemas
Professor: Rodrigo dos Santos Faustino

## Time JIF Tech

- Felipe França
- Henrique Moura
- Isabella Tiemi
- João Vitor Vieira

## Projeto sorteado

**Projeto 1 · Guia de Pontos Turísticos de Mogi das Cruzes**, para a Secretaria Municipal de Turismo.

A Secretaria recebe muitas vezes a mesma pergunta ("o que tem para visitar aqui?") e informa o visitante por um folheto impresso e por uma rede social, que ficam desatualizados. O site reúne os pontos turísticos em uma única página, consultável no celular, com busca por nome e filtro por categoria.

## O que o site faz

- Mostra os pontos turísticos em cartões, gerados pelo JavaScript a partir do array `PONTOS` (`dados.js`).
- Busca por nome enquanto a pessoa digita, sem diferenciar maiúscula de minúscula.
- Filtro por categoria (Parque, Igreja, Museu e Mirante), com a opção "Todas" para voltar à lista completa.
- Botão **"Somente gratuitos"** (diferencial do projeto), que pode ser ligado e desligado.
- Contador com o número de pontos que aparecem na tela.
- Mensagem quando nenhum ponto é encontrado.
- Ao clicar em um cartão, mostra as informações completas do ponto, com botão para voltar à lista.
- Layout legível em telas de 400px, sem rolagem lateral.

Busca, filtro de categoria e "Somente gratuitos" funcionam ao mesmo tempo.

## Como abrir o site

1. Baixe ou clone o repositório.
2. Dê dois cliques no arquivo `index.html`. Não precisa de servidor, instalação nem internet.

## Como acrescentar um ponto turístico

Abra o `dados.js` e acrescente um objeto no array `PONTOS`, com as propriedades `nome`, `categoria`, `bairro`, `gratuito`, `nota`, `horario` e `descricao`. O cartão novo aparece sozinho na tela, sem mexer no HTML. A categoria deve ser uma das quatro do filtro.

## Estrutura do repositório

```
index.html      estrutura da página (HTML semântico)
style.css       aparência e layout (CSS puro, Flexbox e Grid)
dados.js        somente o array de objetos PONTOS
script.js       somente a lógica (busca, filtros, contador, detalhe)
README.md       este arquivo
docs/
  requisitos.md   documento de requisitos (entrevista com a Secretaria)
  entidades.md    lista de entidades e atributos (rascunho do MER)
```

## Divisão do trabalho

| Integrante | O que fez |
|---|---|
| João Vitor Vieira | **HTML:** escreveu o `index.html` com as tags semânticas (header, main, section, article, footer), os campos de busca e filtro com label e as áreas de contador, mensagem de vazio, detalhe e lista. |
| Felipe França | **CSS:** escreveu o `style.css` com a paleta de cores, a tipografia, os cartões, o cabeçalho e o rodapé, o layout em Grid e Flexbox e o comportamento em tela pequena (400px). |
| Henrique Moura | **JavaScript:** escreveu o `script.js`  |
| Isabella Tiemi | **Documentação, JavaScript e dados:** fez a entrevista e escreveu o documento de requisitos e a lista de entidades e atributos (pasta `docs`), montou o array de 8 pontos turísticos no `dados.js`, mexeu no JavaScript com a renderização dos cartões a partir do array, a busca, o filtro de categoria, o botão "Somente gratuitos", o contador, o estado vazio e o detalhe do ponto. e escreveu este README. |

O Kanban do repositório, na aba **Projects** do GitHub, registra as tarefas de cada integrante ao longo da semana.

## Entrevista com o cliente

A entrevista foi feita em 09/10/2026 com uma colega no papel de representante da Secretaria Municipal de Turismo (entrevista simulada). As principais descobertas:

- A equipe de 3 pessoas gasta cerca de 10 horas por semana respondendo perguntas repetidas.
- O folheto é reimpresso uma vez por ano e fica desatualizado, o que causou pelo menos 10 reclamações de visitantes no ano passado.
- Cerca de 80% a 85% dos visitantes consultam pelo celular.

O detalhamento está em `docs/requisitos.md`.

## Fontes dos dados

Os horários, as descrições e as notas dos pontos turísticos foram pesquisados em: https://www.mogidascruzes.sp.gov.br/pontos-turisticos/todos-os-assuntos. Os dados devem ser conferidos com a Secretaria de Turismo antes de uso real.

## Tecnologias

HTML5, CSS3 e JavaScript puro, sem frameworks, bibliotecas, servidor nem banco de dados.
