# Padrões de Projeto Existentes no ESM Forum

## Introdução

O ESM Forum possui uma estrutura simples, mas apresenta algumas características relacionadas a padrões e práticas comuns de organização de software.

A análise considera principalmente os arquivos `server.js`, `modelo.js`, `bd/bd_utils.js` e a separação existente entre o backend e o frontend React.

## MVC - Model View Controller

A arquitetura atual apresenta uma organização semelhante ao padrão MVC.

### View

A interface do usuário é desenvolvida separadamente utilizando React.

Ela é responsável pela apresentação das informações e pela interação com o usuário.

### Controller

O arquivo `server.js` exerce funções semelhantes às de um Controller.

Ele recebe as requisições HTTP, obtém os parâmetros enviados pelos clientes, chama as operações da aplicação e retorna as respostas da API.

### Model

O arquivo `modelo.js` concentra operações relacionadas aos dados e às regras utilizadas pelas funcionalidades de perguntas e respostas.

Essa separação ajuda a evitar que a interface do usuário fique diretamente acoplada ao banco de dados.

## Camada de acesso a dados

O arquivo `bd/bd_utils.js` centraliza a comunicação com o banco SQLite.

Ele disponibiliza operações como:

- `query()`
- `queryAll()`
- `exec()`

Essa estrutura funciona como uma camada de acesso a dados, evitando que outras partes da aplicação precisem utilizar diretamente a biblioteca `better-sqlite3`.

A implementação da busca também introduziu o arquivo `pergunta_repository.js`, que concentra operações de persistência específicas das perguntas.

Essa organização se aproxima do padrão Repository, pois cria uma camada responsável por operações de acesso aos dados de uma entidade.

## Substituição de dependência para testes

O arquivo `modelo.js` possui a função `reconfig_bd(mock_bd)`.

Essa função permite substituir o módulo responsável pelo banco de dados por uma implementação simulada durante os testes.

Embora não represente uma implementação completa de um padrão de injeção de dependências, essa estratégia reduz a dependência dos testes em relação ao banco real e melhora a testabilidade da aplicação.

## Conclusão

O ESM Forum não utiliza uma estrutura complexa de padrões de projeto, porém apresenta uma separação semelhante ao MVC e uma camada específica para acesso aos dados.

A introdução do repositório de perguntas também melhora essa organização e cria uma base para a evolução da arquitetura do sistema.
