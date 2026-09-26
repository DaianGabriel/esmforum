# Arquitetura Atual do ESM Forum

## Visão Geral

O ESM Forum utiliza uma arquitetura web cliente-servidor.

O frontend é desenvolvido em React e executado separadamente do backend. O backend utiliza Node.js com Express e disponibiliza uma API HTTP para acesso às funcionalidades da aplicação.

Os dados são armazenados em um banco SQLite.

De forma simplificada, a arquitetura atual pode ser representada pelo seguinte fluxo:

`Usuário -> Frontend React -> API Express -> Modelo/Repository -> SQLite`

## Frontend

O frontend do ESM Forum está localizado em um projeto separado e utiliza React.

Suas principais responsabilidades são:

- apresentar a interface ao usuário;
- exibir perguntas e respostas;
- receber as ações realizadas pelo usuário;
- enviar requisições HTTP para o backend;
- apresentar os resultados recebidos da API.

Essa camada representa a parte de apresentação da aplicação.

## Backend

O backend utiliza Node.js e Express.

O arquivo `server.js` configura o servidor HTTP e define as rotas disponibilizadas pela API.

Entre suas responsabilidades estão:

- receber requisições HTTP;
- obter parâmetros enviados pelo frontend;
- realizar validações básicas;
- chamar as operações da aplicação;
- devolver respostas HTTP aos clientes.

## Modelo

O arquivo `modelo.js` contém operações utilizadas pelas funcionalidades de perguntas e respostas.

Ele atua como uma camada intermediária entre as rotas da aplicação e o acesso aos dados.

Com a implementação da busca por palavra-chave, parte do acesso às perguntas passou a ser delegada ao arquivo `pergunta_repository.js`.

## Camada de Persistência

O módulo `bd/bd_utils.js` encapsula a comunicação com o banco de dados SQLite.

Ele utiliza a biblioteca `better-sqlite3` e disponibiliza funções genéricas para consultas e alterações no banco.

O arquivo `pergunta_repository.js` acrescenta uma camada mais específica para operações relacionadas às perguntas.

## Banco de Dados

O ESM Forum utiliza SQLite para persistência.

O banco armazena informações utilizadas pela aplicação, como perguntas, respostas e usuários.

A utilização do SQLite mantém a infraestrutura simples e adequada ao escopo atual do projeto.

## Comunicação entre os componentes

O fluxo básico de uma operação ocorre da seguinte maneira:

1. O usuário realiza uma ação no frontend React.
2. O frontend envia uma requisição HTTP para a API.
3. O `server.js` recebe a requisição.
4. A operação correspondente é solicitada ao modelo.
5. Quando necessário, o modelo ou repositório acessa a camada de persistência.
6. O SQLite executa a operação solicitada.
7. O resultado retorna pelas camadas da aplicação.
8. A API envia a resposta ao frontend.
9. O frontend apresenta o resultado ao usuário.

## Pontos positivos

A arquitetura atual possui algumas características positivas:

- separação entre frontend e backend;
- API HTTP para comunicação entre as aplicações;
- módulo específico para acesso ao SQLite;
- possibilidade de testar partes da aplicação separadamente;
- estrutura simples e de fácil compreensão para o tamanho atual do sistema.

## Limitações

Com a inclusão de novas funcionalidades, alguns componentes podem acumular responsabilidades.

O arquivo `server.js`, por exemplo, concentra as definições das rotas da API, enquanto `modelo.js` reúne diferentes operações relacionadas às entidades do sistema.

A evolução do projeto pode exigir uma separação maior entre rotas, serviços, regras de negócio e persistência.

## Diagrama da Arquitetura Atual

O diagrama da arquitetura atual representa a comunicação entre o frontend React, a API Express, o modelo, os componentes de acesso aos dados e o banco SQLite.

Os arquivos do diagrama são:

- `arquitetura_atual.mmd`
- `arquitetura_atual.png`

O fluxo representado é:

`Usuário -> Frontend React -> server.js -> modelo.js -> Repository/Acesso a Dados -> SQLite`

## Conclusão

A arquitetura atual é adequada ao tamanho inicial do ESM Forum e permite separar apresentação, API e persistência.

Entretanto, a inclusão de novas funcionalidades pode justificar uma organização mais modular para melhorar a manutenção, os testes e a evolução do sistema.
