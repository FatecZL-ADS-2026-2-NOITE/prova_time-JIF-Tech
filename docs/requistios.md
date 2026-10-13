# Documento de Requisitos – Guia de Pontos Turísticos de Mogi das Cruzes

Projeto Desafio 01 · Projeto Integrador · Fatec ZL · Time: JIF Tech

## 1. Contexto do negócio
A Secretaria Municipal de Turismo de Mogi das Cruzes cuida da promoção turística do município e do atendimento a quem visita: divulga os atrativos, apoia eventos e mantém contato com guias, pousadas e restaurantes. Atua nessa função há cerca de 15 anos. Seu público é formado por turistas de fora, principalmente da Grande São Paulo, que passam o fim de semana (cerca de 55%), moradores que querem conhecer a própria cidade ou levar parentes (cerca de 30%) e escolas e grupos organizados que pedem passeios educativos (cerca de 15%).
Hoje o visitante se informa por um folheto impresso (no balcão, em alguns hotéis e rodoviárias), pelo perfil da Secretaria em rede social e pelo atendimento presencial ou telefônico. Muita gente chega só pelo Google e encontra informação de terceiros, nem sempre correta. A Secretaria tem cerca de 12 pontos turísticos cadastrados.

## 2. Dores identificadas
  1. Atendimento repetido. A equipe de 3 pessoas faz em média 35 a 40 atendimentos por dia (balcão, telefone e mensagens), chegando a 60 em fins de semana e feriados. A pergunta "o que tem para visitar aqui?" aparece em mais da metade, cerca de 200 vezes por semana. Isso consome cerca de 2 horas por dia, ou 10 horas por semana, só com perguntas repetidas.
  2. Informação desatualizada. O folheto é reimpresso uma vez por ano (5 mil exemplares, cerca de R$ 4.500), então qualquer mudança no meio do ano fica errada por meses. O perfil na rede social é atualizado manualmente e atrasa. No ano passado houve pelo menos 10 reclamações de visitantes que chegaram a um local e o encontraram fechado ou com outro horário.
  3. Falta de uma fonte única e confiável. 
O visitante junta pedaços do folheto, do perfil e do Google, e as informações se contradizem. Sem uma visão geral, ele não consegue comparar os pontos e decidir o que fazer em um dia.
Informações mais procuradas, em ordem: horário de funcionamento, se é gratuito ou pago, onde fica e como chegar. Depois vêm "é bom para criança?" e "vale a pena?".

## 3. Escopo
O site vai:
  • mostrar os pontos turísticos em cartões, com busca por nome e filtro por categoria;
  • ter um botão "Somente gratuitos" que pode ser ligado e desligado;
  • mostrar quantos pontos estão na tela e avisar quando nada é encontrado;
  • mostrar, para cada ponto: nome, categoria, bairro, horário de funcionamento, se é gratuito, nota (de 1 a 5) e descrição curta;
  • permitir que a equipe da Secretaria atualize os pontos sozinha, acrescentando um item na lista de dados.
Desejável, se der tempo: foto do ponto, valor da entrada quando for pago e link para abrir o local no aplicativo de mapas do celular.

O site não vai:
  • vender ingressos (a maioria é gratuita e os pagos vendem na entrada);
  • ter login, cadastro ou aplicativo;
  • ter mapa interativo (por ora, bastam o bairro e o link para o aplicativo de mapas).
Premissas e restrições: HTML, CSS e JavaScript puro, sem servidor, banco de dados ou bibliotecas; dados em um arquivo separado; prazo de uma semana. A lista final de pontos e os horários devem ser conferidos com a Secretaria antes de publicar.
  
## 4. Requisitos funcionais
  • RF01. O sistema deve exibir os pontos turísticos em cartões com nome, categoria, bairro e nota.
  • RF02. O sistema deve permitir buscar pontos pelo nome enquanto o visitante digita.
  • RF03. O sistema deve permitir filtrar os pontos por categoria e voltar a mostrar todos.
  • RF04. O sistema deve permitir mostrar somente os pontos gratuitos e desligar esse filtro.
  • RF05. O sistema deve exibir a quantidade de pontos que aparecem na tela e atualizá-la a cada busca ou filtro.
  • RF06. O sistema deve mostrar as informações completas de um ponto (horário, bairro, se é gratuito, nota e descrição) ao clicar nele, com caminho de volta à lista.
  • RF07. O sistema deve exibir uma mensagem quando nenhum ponto for encontrado.
  • RF08. O sistema deve exibir automaticamente um novo ponto quando ele for acrescentado à lista de dados.

## 5. Requisitos não funcionais
  • RNF01. O site deve ser legível em telas de 400px de largura, sem rolagem lateral, porque de 80% a 85% dos visitantes consultam pelo celular.
  • RNF02. O site deve carregar rápido e funcionar com internet fraca, como em áreas de serra, sem depender de bibliotecas externas.
  • RNF03. O site deve ter contraste e tamanho de fonte adequados para leitura na rua ou no carro.
  • RNF04. A atualização dos pontos deve ser simples o bastante para a equipe da Secretaria fazer sozinha.
  • RNF05. O site deve abrir com duplo clique no arquivo index.html, sem servidor.

## 6. Validação
  • Data da entrevista: 09 / 10 / 2026
  • Entrevistada: Priscila no papel de representante da Secretaria Municipal de Turismo de Mogi das Cruzes (entrevista simulada)
  • Entrevistador(a): Isabella Tiemi Sasaki Nakadomari 
