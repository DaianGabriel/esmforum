# Implementação dos Princípios SOLID no ESM Forum

## Funcionalidade escolhida

A funcionalidade escolhida para esta etapa foi a **busca de perguntas por palavra-chave**.

Essa funcionalidade permite consultar perguntas cadastradas no ESM Forum utilizando um termo informado pelo usuário.

A implementação foi realizada procurando manter as responsabilidades separadas entre rota HTTP, lógica da aplicação e acesso aos dados.

## Estrutura implementada

### Rota da API

Foi adicionada ao `server.js` a rota:

`GET /perguntas/busca?termo=palavra`

A rota é responsável por receber o parâmetro `termo`, validar a entrada e solicitar ao modelo a realização da busca.

Quando nenhum termo é informado, a API retorna o código HTTP 400 com uma mensagem informando que é necessário fornecer um termo.

### Lógica da aplicação

Foi adicionada ao `modelo.js` a função:

`buscar_perguntas(termo)`

Essa função valida o termo recebido, solicita ao repositório as perguntas correspondentes e adiciona a quantidade de respostas a cada pergunta encontrada.

### Repositório de perguntas

Foi criado o arquivo `pergunta_repository.js`.

Esse módulo concentra operações de persistência relacionadas às perguntas e possui as funções:

- `listar()`
- `buscar_por_palavra_chave()`
- `buscar_por_id()`
- `cadastrar()`

A busca utiliza uma consulta SQL com `LIKE`, permitindo localizar perguntas que contenham a palavra-chave informada.

## Aplicação dos princípios SOLID

### SRP - Single Responsibility Principle

A criação de `pergunta_repository.js` separa a responsabilidade de acesso aos dados das demais partes da aplicação.

A rota HTTP trata a requisição, o modelo coordena a lógica da busca e o repositório executa a consulta ao banco.

Essa divisão reduz a concentração de responsabilidades em um único módulo.

### DIP - Dependency Inversion Principle

A estrutura já possuía uma separação entre o modelo e o módulo de banco de dados, inclusive permitindo substituir a dependência por um mock nos testes.

A introdução do repositório acrescenta uma camada específica para o acesso aos dados das perguntas, reduzindo o contato da funcionalidade de busca com os detalhes da consulta SQL.

A implementação ainda pode evoluir para uma injeção de dependências mais completa, mas a separação criada reduz o acoplamento entre a regra da funcionalidade e a persistência.

### OCP - Open/Closed Principle

A funcionalidade de busca foi adicionada sem alterar o comportamento das operações existentes de cadastro, listagem e respostas.

Foi criada uma nova operação no modelo e um novo repositório para suportar a funcionalidade.

Dessa forma, o sistema foi estendido preservando o funcionamento das funcionalidades anteriores.

## Validação da implementação

Após as alterações, os testes existentes do projeto foram executados com:

`npm test -- --runInBand`

Resultado:

- 2 suítes de testes aprovadas;
- 3 testes aprovados;
- nenhuma falha.

A nova rota também foi validada manualmente em três cenários.

### Busca com resultado

Requisição:

`GET /perguntas/busca?termo=3`

Resultado: foram retornadas as perguntas que possuem o termo informado.

### Busca sem resultado

Requisição:

`GET /perguntas/busca?termo=xyz123`

Resultado:

`[]`

### Busca sem informar termo

Requisição:

`GET /perguntas/busca`

Resultado: a API retornou HTTP 400 com a mensagem:

`Informe um termo para realizar a busca.`

## Trechos da implementação relacionados ao SOLID

### SRP

A consulta específica de perguntas foi separada no `pergunta_repository.js`:

```javascript
function buscar_por_palavra_chave(termo) {
  return bd.queryAll(
    'select * from perguntas where texto like ?',
    [`%${termo}%`]
  );
}

## Conclusão

A implementação adicionou ao ESM Forum a busca de perguntas por palavra-chave e introduziu uma separação específica para o acesso aos dados das perguntas.

A alteração mantém as funcionalidades anteriores funcionando e demonstra a aplicação prática de conceitos relacionados principalmente a SRP, DIP e OCP.
