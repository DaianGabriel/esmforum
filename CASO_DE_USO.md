# Caso de Uso - Buscar perguntas por palavra-chave

## Identificação

**Nome:** Buscar perguntas por palavra-chave

**Ator principal:** Usuário do ESM Forum

**Objetivo:** Permitir que o usuário localize perguntas cadastradas no fórum utilizando uma palavra-chave.

## Pré-condições

- O ESM Forum deve estar disponível para acesso.
- Devem existir perguntas cadastradas no sistema.

## Pós-condições

- As perguntas correspondentes ao termo pesquisado são apresentadas ao usuário.
- Nenhuma informação cadastrada no sistema é alterada pela busca.

## Fluxo Principal

1. O usuário acessa a página de perguntas do ESM Forum.
2. O sistema apresenta as perguntas cadastradas e o campo de busca.
3. O usuário informa uma palavra-chave no campo de busca.
4. O usuário solicita a realização da pesquisa.
5. O sistema recebe o termo informado.
6. O sistema procura perguntas que contenham a palavra-chave.
7. O sistema apresenta as perguntas encontradas.
8. O usuário visualiza os resultados da busca.

## Fluxos Alternativos

### A1 - Nenhuma pergunta encontrada

1. O sistema realiza a busca utilizando a palavra-chave informada.
2. Nenhuma pergunta correspondente é encontrada.
3. O sistema informa ao usuário que não foram encontrados resultados para a pesquisa.
4. O usuário pode informar outro termo e realizar uma nova busca.

### A2 - Campo de busca vazio

1. O usuário solicita uma busca sem informar uma palavra-chave.
2. O sistema identifica que o campo de busca está vazio.
3. O sistema informa que é necessário fornecer um termo para a pesquisa.
4. O usuário pode informar uma palavra-chave e realizar novamente a busca.
