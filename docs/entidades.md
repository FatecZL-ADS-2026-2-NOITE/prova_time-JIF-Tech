# Lista de Entidades e Atributos – Guia de Pontos Turísticos de Mogi das Cruzes

Projeto Desafio 01 · Projeto Integrador · Fatec ZL · Time: JIF Tech

Rascunho do MER, feito com a regra vista em aula: substantivo vira entidade, característica vira atributo e verbo que liga dois substantivos vira relação.

## Entidade: PontoTuristico

Um lugar da cidade que a Secretaria de Turismo divulga ao visitante.

- **id** · número · identificador: **sim** · gerado automaticamente
- **nome** · texto · identificador: não · obrigatório (ex.: "Parque das Neblinas")
- **idCategoria** · número · identificador: não · chave estrangeira, aponta para Categoria
- **idBairro** · número · identificador: não · chave estrangeira, aponta para Bairro
- **gratuito** · verdadeiro/falso · identificador: não · true quando a entrada é franca
- **nota** · número · identificador: não · média de avaliações dos visitantes, de 1 a 5 (ex.: 4.5)
- **horario** · texto · identificador: não · horário de funcionamento (ex.: "07h às 17h")
- **descricao** · texto · identificador: não · dois ou três períodos sobre o lugar

Atributos desejáveis, se o time tiver tempo: **foto** (texto, caminho da imagem), **valorEntrada** (número, em reais, quando o ponto for pago) e **linkMapa** (texto, endereço para abrir no aplicativo de mapas).

## Entidade: Categoria

O tipo de atrativo, usado no filtro do site.

- **id** · número · identificador: **sim** · gerado automaticamente
- **nome** · texto · identificador: não · obrigatório (Parque, Igreja, Museu ou Mirante)

## Entidade: Bairro

A região da cidade onde o ponto fica.

- **id** · número · identificador: **sim** · gerado automaticamente
- **nome** · texto · identificador: não · obrigatório (ex.: "Centro", "Parque Santana")

## Relações

- Um PontoTuristico pertence a uma Categoria. (N para 1)
- Uma Categoria pode ter vários PontosTuristicos. (1 para N)
- Um PontoTuristico está localizado em um Bairro. (N para 1)
- Um Bairro pode ter vários PontosTuristicos. (1 para N)

## Observação sobre o array do site

No arquivo dados.js, para manter o projeto simples, a categoria e o bairro aparecem como texto dentro de cada objeto (por exemplo, categoria: "Parque"). No MER, eles viram entidades próprias, e o ponto turístico guarda só a chave de cada uma (idCategoria e idBairro). É o mesmo dado, organizado para evitar repetição quando virar tabela de banco de dados.
